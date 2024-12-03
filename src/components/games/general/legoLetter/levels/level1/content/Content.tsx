import React, {useRef} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';

import {Card, Letter} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gamePlayData, gameData, handleClick} = props;
    const {data} = gameData;
    const {selectedIndexes, iteration} = gamePlayData;
    const {letterPaths, parts, height} = data[iteration];

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
                        <Letter letterPaths={letterPaths} height={height} selectedIndexes={selectedIndexes}/>
                        <div className={styles.parts}>
                            {parts.map(({part, index}:{ part:string, index:number | null }, position:number) => <Card
                                key={position}
                                gamePlayData={gamePlayData}
                                handleClick={handleClick}
                                index={index}
                                position={position}
                                path={part}/>
                            )}
                        </div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
};
