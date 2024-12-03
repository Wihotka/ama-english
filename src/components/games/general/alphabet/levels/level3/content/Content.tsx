import React, {useRef} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';

import {TopRow, BottomRow} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, handleClick, studyStage} = props;
    const {data} = gameData;
    const {iteration, currentIndex} = gamePlayData;

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
                        <TopRow rowData={data[iteration]} currentIndex={currentIndex} studyStage={studyStage}/>
                        {studyStage && <BottomRow 
                            rowData={data[iteration]} 
                            gamePlayData={gamePlayData} 
                            handleClick={handleClick} 
                            studyStage={studyStage} />}
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
};
