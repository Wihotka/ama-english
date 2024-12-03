import React, {useRef} from 'react';

import {Content} from './content';

import {useGame, onSelectOption, getTransformStyles} from './utils';

import {FruitSmoothieT, HandlerSelectOption, OnTransformStyles, VariantObj} from './type';

export const Body = (props:FruitSmoothieT) => {
    const {changeGPDOnline, initFinishPlaying} = props;
    const {gamePlayData, gameData, gameSettings} = props.game;
    const {timeFly, maxAttemptsQty} = gameData;
    const {
        time,
        options,
        question,
        optionsFieldSize,
        fieldSize,
        selectOptions,
        timeToClick,
        actualAttemptsQty,
        isFieldUpdate,
        isHidingOption
    } = gamePlayData;

    const field = useRef(null);
    const useOptionsRef = Array.from({length: options.length}, () => React.createRef<HTMLDivElement>());

    useGame({
        field,
        changeGPDOnline,
        gamePlayData,
        optionsRef: useOptionsRef,
        gameData,
        gameSettings,
        initFinishPlaying
    });

    const handlerSelectOption:HandlerSelectOption = (option) => onSelectOption({
        selectOption: option,
        options,
        time,
        actualAttemptsQty,
        maxAttemptsQty: maxAttemptsQty,
        changeGPDOnline
    });

    const generateTransformStyles:OnTransformStyles = (variant:VariantObj) => getTransformStyles({
        variant,
        time,
        timeFly,
        timeToClick,
        actualAttemptsQty,
        fieldSize,
        optionsFieldSize,
        isHidingOption,
    });

    return (
        <Content
            options={options}
            question={question}
            selectOptions={selectOptions}

            fieldRef={field}
            optionsRef={useOptionsRef}

            isFieldUpdate={isFieldUpdate}

            generateTransformStyles={generateTransformStyles}
            handlerSelectOption={handlerSelectOption}
        />
    );
};