import React, {useEffect} from 'react';

import {Content} from './content';

import {answerStatuses, FieldUpdatingCBT, HandleCandidateCBT, HandleFieldCBT, Navigation_GamePlayData, NavigationT} from './type';

import {handleCandidate, handleField, fieldUpdating} from './utils';
import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

export const Body = (props:NavigationT) => {
    const {game, changeGPDOnline, initFinishPlaying} = props;
    const {gameData, gamePlayData} = game;
    const {options, locationBackground} = gameData;
    const {
        answerQty,
        mistakeQty,
        isUpdating,
        answerStatus,
        isHintShowed,
        taskMistakeQty,
        isFieldBlocked,
        pressedItemName,
        openedItemNames,
        hintedItemNames,
        availableOptions,
        isRightCandidate,
        currentOptionIndex,
        pressedCandidateName,
        currentAvailableOptionIndex
    } = gamePlayData;

    const handleCandidateCB:HandleCandidateCBT = (name) =>
        handleCandidate({name, openedItemNames, taskMistakeQty, availableOptions, changeGPDOnline, currentAvailableOptionIndex});
    const handleFieldCB:HandleFieldCBT = (name) =>
        handleField({
            name,
            mistakeQty,
            taskMistakeQty,
            fieldUpdatingCB,
            changeGPDOnline,
            hintedItemNames,
            openedItemNames,
            pressedCandidateName}
        );

    const fieldUpdatingCB:FieldUpdatingCBT = (status) =>
        fieldUpdating({
            status,
            options,
            answerQty,
            mistakeQty,
            taskMistakeQty,
            openedItemNames,
            changeGPDOnline,
            availableOptions,
            initFinishPlaying,
            currentOptionIndex,
            currentAvailableOptionIndex
        });

    useEffect(() => {
        taskMistakeQty > 1
            ? setGameTimeout(() => fieldUpdatingCB(answerStatuses.error), 500)
            : null;

        mistakeQty > 0 && taskMistakeQty !== 2
            ? changeGPDOnline<Navigation_GamePlayData>({isHintShowed: true})
            : changeGPDOnline<Navigation_GamePlayData>({isHintShowed: false});
    }, [mistakeQty, taskMistakeQty]);

    return (
        <Content
            options={options}
            isHintShowed={isHintShowed}
            isUpdating={isUpdating}
            answerStatus={answerStatus}
            handleFieldCB={handleFieldCB}
            isFieldBlocked={isFieldBlocked}
            pressedItemName={pressedItemName}
            hintedItemNames={hintedItemNames}
            openedItemNames={openedItemNames}
            availableOptions={availableOptions}
            isRightCandidate={isRightCandidate}
            handleCandidateCB={handleCandidateCB}
            locationBackground={locationBackground}
            pressedCandidateName={pressedCandidateName}
            currentAvailableOptionIndex={currentAvailableOptionIndex}/>
    );
};