import React, {FC, Key, useRef} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';

import styles from './style.scss';

type P = {
    keyProp:Key;
};

export const ContentInnerAnimation:FC<P> = ({children, keyProp}) => {
    const nodeRef = useRef<any>(null);

    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition
                key={keyProp}
                addEndListener={(done:any) => nodeRef.current?.addEventListener('transitionend', done, false)}
                nodeRef={nodeRef}
                classNames={{
                    enter: styles.fadeEnter,
                    enterActive: styles.fadeEnterActive,
                    exit: styles.fadeExit,
                    exitActive: styles.fadeExitActive,
                }}>
                <div className={styles.exampleWrapper} ref={nodeRef}>
                    {children}
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
};
