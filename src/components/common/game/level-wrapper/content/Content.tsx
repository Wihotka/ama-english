import React, {FC} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {isEmpty} from 'lodash';

import {Modal, LevelInner} from './parts';

import './styles.css';

import {DefaultGame} from '@custom-types';
import {LevelWrapperT} from '@components/common/game/level-wrapper/type';
import {globalGameConfig} from '@global-config/game';

type P = Omit<LevelWrapperT, 'generateGameData'| 'startPlaying'> & {
    game:DefaultGame;
};

const defaultStyle = {
    transition: `opacity ${globalGameConfig.startAnimationDuration}ms ease-in-out`,
};

export const Content:FC<P> = (p) => {
    const {game, getFinishModalIndicators, children, getStarsRequirements, calcProgressPercent, ...innerP} = p;

    const {status, gameSettings, gameConfig} = game;
    const {isPlaying, isFinishPlaying} = status;

    // const nodeRef = useRef<any>(null);
    // const progressPercent = 0;
    const progressPercent = getProgressPercent(game, calcProgressPercent);
    // const progressPercent = Math.round(calcProgressPercent({gamePlayData, gameData, gameConfig, gameSettings, gameTime}));
    const isNeedShowModals = !isPlaying || isFinishPlaying;

    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition
                key={isNeedShowModals ? 1 : 0}
                addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, false);
                }}
                classNames="fade">
                <div className="game" style={defaultStyle}>
                    {isNeedShowModals
                        ? <Modal
                            progressPercent={progressPercent}
                            game={game}
                            getFinishModalIndicators={getFinishModalIndicators}
                            getStarsRequirements={getStarsRequirements}/>
                        : <LevelInner
                            {...innerP}
                            progressPercent={progressPercent}
                            gameParams={{gameSettings, gameConfig}}
                            gameStatus={status}>
                            {children}
                        </LevelInner>
                    }
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
};

export const getProgressPercent = (game:DefaultGame, calcProgressPercent:LevelWrapperT['calcProgressPercent']) => {
    const {status, gamePlayData} = game;
    const {isPlaying, isFinishPlaying} = status;

    const isShowStart = !isPlaying && !isFinishPlaying;

    return isShowStart || isEmpty(gamePlayData)
        ? 0
        : Math.round(calcProgressPercent(game));
};