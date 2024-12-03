import React from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';

import styles from './style.scss';

type TransitionWrapperP = {
    currentQ:number;
};

export const TransitionWrapper = ({
    currentQ,
    children,
}:React.PropsWithChildren<TransitionWrapperP>) => (
    <SwitchTransition>
        <CSSTransition
            key={currentQ}
            addEndListener={(node, done) =>
                node.addEventListener(
                    'transitionend',
                    done,
                    false
                )
            }
            classNames={{
                enter: styles.enter,
                enterActive: styles.enterActive,
                exit: styles.exit,
                exitActive: styles.exitActive,
            }}
        >
            {children}
        </CSSTransition>
    </SwitchTransition>
);
