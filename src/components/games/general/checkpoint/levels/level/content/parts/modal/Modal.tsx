import React from 'react';

import {Task, Case, Input} from './parts';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {ModalP} from '../../../type';

export const Modal = (props:ModalP) => {
    const {
        options,
        inputValue,
        answerStatus,
        handlePlayCB,
        isModalShowed,
        handleInputCB,
        compareValuesCB,
        currentOptionIndex,
        isPlayButtonPressed
    } = props;

    const getModalClasses = (index:number) =>
        classNames(
            styles.wrapper,
            isModalShowed && currentOptionIndex === index ? styles.wrapper__active : ''
        );

    return (
        <>
            {options.map((card, index) =>
                <div key={index} className={getModalClasses(index)}>
                    <Task
                        card={card}
                        currentOptionIndex={currentOptionIndex}/>
                    <Case
                        card={card}
                        answerStatus={answerStatus}
                        handlePlayCB={handlePlayCB}
                        currentOptionIndex={currentOptionIndex}
                        isPlayButtonPressed={isPlayButtonPressed}/>
                    <Input
                        inputValue={inputValue}
                        answerStatus={answerStatus}
                        handleInputCB={handleInputCB}
                        compareValuesCB={compareValuesCB}
                        currentOptionIndex={currentOptionIndex}/>
                </div>
            )}
        </>
    );
};