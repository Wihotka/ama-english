import React, {useState} from 'react';
// import {CSSTransition} from 'react-transition-group';

import {Btn} from '@components/common/elements';
import {Modal} from './modal/Modal';

import {
    AnimationModalWrapper
} from '@components/common/game/game-inner/content/parts/bottom-navigation/parts/animation-modal-wrapper';

import styles from './styles.scss';

export const Burger = ({isHomework}:{isHomework:boolean}) => {
    const [isShowModal, setIsShowModal] = useState(false);

    const burgerHandler = () => setIsShowModal(state => !state);

    return (
        <div>
            <AnimationModalWrapper inn={isShowModal}>
                <Modal isHomework={isHomework} hideModal={() => setIsShowModal(false)}/>
            </AnimationModalWrapper>
            <Btn className={styles.btn} isRound handler={burgerHandler}>
                <span className={styles.burger}>
                    <span/>
                    <span/>
                    <span/>
                </span>
            </Btn>
        </div>
    );
};

