import React from 'react';

import {Task, Field} from './parts';

import style from './style.scss';

import {ContentP} from '../type';
import {classNames} from 'js-data-utils';

export const Content = (props:ContentP) => {
    const {
        options,
        isUpdating,
        answerStatus,
        isHintShowed,
        handleFieldCB,
        isFieldBlocked,
        pressedItemName,
        hintedItemNames,
        openedItemNames,
        availableOptions,
        isRightCandidate,
        handleCandidateCB,
        locationBackground,
        pressedCandidateName,
        currentAvailableOptionIndex
    } = props;

    const getTaskClasses = () =>
        classNames(
            style.task,
            isUpdating ? style.taskUpdating : ''
        );

    return (
        <div className={style.wrapper}>
            <p className={getTaskClasses()}>{availableOptions[currentAvailableOptionIndex].sentence}</p>
            <div className={style.gameWrapper}>
                <Task
                    isUpdating={isUpdating}
                    isHintShowed={isHintShowed}
                    answerStatus={answerStatus}
                    isFieldBlocked={isFieldBlocked}
                    isRightCandidate={isRightCandidate}
                    availableOptions={availableOptions}
                    handleCandidateCB={handleCandidateCB}
                    pressedCandidateName={pressedCandidateName}
                    currentAvailableOptionIndex={currentAvailableOptionIndex}/>
                <Field
                    options={options}
                    isHintShowed={isHintShowed}
                    answerStatus={answerStatus}
                    handleFieldCB={handleFieldCB}
                    isFieldBlocked={isFieldBlocked}
                    pressedItemName={pressedItemName}
                    hintedItemNames={hintedItemNames}
                    openedItemNames={openedItemNames}
                    locationBackground={locationBackground}/>
            </div>
        </div>
    );
};
