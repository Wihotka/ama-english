import React, {FC, useContext, useEffect, useMemo, useRef} from 'react';
import {classNames} from 'js-data-utils';

import {useWindowDimensions} from '@lib/custom-hooks';
import {FieldWrap} from '@components/common/game/components';
import {LevelWrapperPropsContext} from '@components/common/game/game-inner/content/parts/level-resolver/LevelResolver';

import {getBg} from './utils';

import {/*Mask,*/ TopPanel} from './parts';

import styles from './styles.scss';

import {GameParams, GameStatus} from '@custom-types';
import {LevelWrapperT} from '@components/common/game/level-wrapper/type';

type P = Pick<LevelWrapperT, 'background' | 'getTopPanelContent'> & {
    progressPercent:number;
    gameParams:GameParams;
    gameStatus:GameStatus;
};

export const LevelInner:FC<P> = (p) => {
    const {children, progressPercent, gameParams, getTopPanelContent, background = ''} = p;
    const {gameConfig, gameSettings} = gameParams;
    const {gameTime = 0, level} = gameSettings;
    const {needHideProgressBar, valuesThresholds, isCenterContainer, studyStage,
        gameName, section, bgColor, levelsWithHiddenTimer = []} = gameConfig;
    const {isInitializedGPData} = useContext(LevelWrapperPropsContext);
    const {width} = useWindowDimensions();
    const gameContentClassName = classNames(styles.gameContent, (isCenterContainer && styles.gameContent_center));
    const {matches: isNeedHideBgImg} = matchMedia('screen and (max-width: 1000px) and (orientation: landscape), screen and (max-width: 768px) and (orientation: portrait)');

    const bg = useMemo(() => getBg(background, section, gameName, studyStage, bgColor, isNeedHideBgImg), [width]);
    const myRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (myRef.current) {
            myRef.current.scrollIntoView();
        }
    }, []);

    const finalValuesThresholds = Array.isArray(valuesThresholds) ? valuesThresholds : valuesThresholds[level];

    const isNeedHideTimer = levelsWithHiddenTimer.includes(level);

    return (
        <FieldWrap outerClassName={styles.outerCN} ref={myRef}>
            <div className={styles.levelInner} style={{background: bg}}>
                <TopPanel
                    progressPercent={progressPercent}
                    valuesThresholds={finalValuesThresholds}
                    gameTime={+gameTime}
                    isNeedHideTimer={isNeedHideTimer}
                    needHideProgressBar={!!needHideProgressBar}
                    getTopPanelContent={getTopPanelContent}/>
                <div className={gameContentClassName}>
                    {isInitializedGPData && children}
                </div>
            </div>
        </FieldWrap>
    );
};
