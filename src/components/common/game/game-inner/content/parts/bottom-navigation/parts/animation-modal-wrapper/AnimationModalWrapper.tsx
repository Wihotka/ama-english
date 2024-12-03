import React, {FC} from 'react';
import {CSSTransition} from 'react-transition-group';

import './styles.css';

type P = {
    inn:boolean;
};

export const AnimationModalWrapper:FC<P> = ({children, inn}) => (
    <CSSTransition
        in={inn}
        addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false);
        }}
        unmountOnExit
        classNames="alert">
        {children}
    </CSSTransition>
);
