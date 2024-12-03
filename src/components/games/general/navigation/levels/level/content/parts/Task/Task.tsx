import React from 'react';
import styled, {css} from 'styled-components';
import {classNames} from 'js-data-utils';

import style from './style.scss';

import {TaskP} from '../../../type';

const Candidate = styled.span<{isPressedCandidate:boolean, isRightCandidate:boolean}>`
    ${({isPressedCandidate, isRightCandidate, theme}) =>
        isPressedCandidate 
            ? isRightCandidate 
                ? css`
                    transform: translateY(8px);
                    box-shadow: 0 0 0 #BFBFBF;
                    border: 1px solid ${theme.colors.color8};
                ` 
                : css`
                    pointer-events: none;
                    transform: translateY(8px);
                    border: 1px solid rgba(254, 58, 58, 0.64);
                    box-shadow: 0 0 3px #FE3A3A, 0 0 32px rgba(254, 58, 58, 0.4);
                `
            : css`
                border: 1px solid rgba(191, 191, 191, 0.72);
            `
}`;

export const Task = (props:TaskP) => {
    const {
        isUpdating,
        isHintShowed,
        answerStatus,
        isFieldBlocked,
        availableOptions,
        isRightCandidate,
        handleCandidateCB,
        pressedCandidateName,
        currentAvailableOptionIndex
    } = props;

    const getCandidateClasses = (name:string) =>
        classNames(
            style.candidate,
            !isFieldBlocked ? style.candidateUnclickable : '',
            pressedCandidateName !== name ? style.candidateWithShadow : ''
        );

    const getWrapperClasses = () =>
        classNames(
            style.wrapper,
            !isHintShowed || answerStatus !== 'Error' ? style[`wrapper${answerStatus}`] : '',
            answerStatus === 'Error' ? style.wrapperError : '',
        );

    const getTaskClasses = () =>
        classNames(
            style.task,
            isUpdating ? style.taskUpdating : ''
        );

    return (
        <div className={getWrapperClasses()}>
            <p className={getTaskClasses()}>{availableOptions[currentAvailableOptionIndex].sentence}</p>
            <div className={style.items}>
                {availableOptions &&
                    availableOptions.map(({item}, index) => (
                        <Candidate
                            key={index}
                            className={getCandidateClasses(item.name)}
                            isRightCandidate={isRightCandidate}
                            isPressedCandidate={pressedCandidateName === item.name}
                            onClick={() => handleCandidateCB(item.name)}>
                            <img
                                alt={item.name}
                                src={require(`/assets/img/resources/${item.imgUrl}`)}/>
                        </Candidate>
                    ))
                }
            </div>
        </div>
    );
};