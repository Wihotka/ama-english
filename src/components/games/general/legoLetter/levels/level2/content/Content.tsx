import React, {useRef} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';

import {Btn} from '@components/common/elements';

import {InactiveCard, ActiveCard} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gamePlayData, gameData, clickHandler, checkAnswer} = props;
    const {data} = gameData;
    const {iteration, answer, isAnswerChecked} = gamePlayData;
    const {cards, currentImgName, path, height, width} = data[iteration];

    const nodeRef = useRef<any>(null);

    return (
        <div className={styles.gameWrap}>
            <SwitchTransition mode={'out-in'}>
                <CSSTransition
                    key={iteration}
                    addEndListener={(done:any) => nodeRef.current?.addEventListener('transitionend', done, false)}
                    nodeRef={nodeRef}
                    classNames={{
                        enter: styles.fadeEnter,
                        enterActive: styles.fadeEnterActive,
                        exit: styles.fadeExit,
                        exitActive: styles.fadeExitActive,
                    }}>
                    <div className={styles.game} ref={nodeRef}>
                        <InactiveCard
                            width={width}
                            height={height}
                            path={path}
                            imgName={currentImgName}/>
                        <div className={styles.row}>
                            {cards.map((card, index) => {
                                const {letter, imgName, path, height, width} = card;

                                return <ActiveCard
                                    key={index}
                                    height={height}
                                    width={width}
                                    letter={letter}
                                    path={path}
                                    imgName={imgName}
                                    clickHandler={clickHandler}
                                    gamePlayData={gamePlayData}/>;
                            })}
                        </div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <Btn
                disabled={!answer.letter.length || isAnswerChecked}
                handler={checkAnswer}
                className={styles.checkBtn}
                textCode={'check'}
                type={'primary'}/>
        </div>
    );
};
