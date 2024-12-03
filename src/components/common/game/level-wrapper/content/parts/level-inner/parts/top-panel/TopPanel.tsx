import React from 'react';

import {Clock, Content, ProgressBar} from './parts';

import styles from './styles.scss';

import {LevelWrapperT} from '@components/common/game/level-wrapper/type';
import {initFinishPlaying} from '@lib/game/actions';

type P = Pick<LevelWrapperT, 'getTopPanelContent'> & {
    gameTime:number;
    progressPercent:number;
    needHideProgressBar:boolean;
    isNeedHideTimer:boolean;
    valuesThresholds:Array<number>;
};

export const TopPanel = (p:P) => {
    const {progressPercent, gameTime, valuesThresholds, needHideProgressBar, isNeedHideTimer, getTopPanelContent} = p;

    const onFinish = () => {
        if (gameTime > 0) {
            initFinishPlaying();
        }
    };

    return (
        <div className={styles.topPanel}>
            <Clock gameTime={gameTime} isNeedHideTimer={isNeedHideTimer} onFinish={onFinish}/>
            {getTopPanelContent && <Content getTopPanelContent={getTopPanelContent}/>}
            <ProgressBar
                progressPercent={progressPercent}
                needHideProgressBar={needHideProgressBar}
                valuesThresholds={valuesThresholds}/>
        </div>
    );
};