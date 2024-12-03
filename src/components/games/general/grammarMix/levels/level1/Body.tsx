import React from 'react';

import {Content} from './content';

import {onSelectOption, onCheckingAnswer, useGame} from './utils';

import {GrammarMixT1, HandlerSelectOption} from './type';

export const Body = (props:GrammarMixT1) => {
    const {game, changeGPDOnline, initFinishPlaying} = props;
    const {gameData, gamePlayData, gameSettings} = game;
    const {answersQty} = gameSettings;
    const {question, options, selectOption, correctAnswer, correctAnswerQty, isFieldUpdate} = gamePlayData;

    useGame({...gamePlayData, ...gameData, initFinishPlaying, changeGPDOnline, answersQty});
    const handlerSelectOption:HandlerSelectOption = (option) => onSelectOption({option, changeGPDOnline});
    const handleCheckingAnswer = () => onCheckingAnswer({correctAnswer, selectOption, correctAnswerQty, changeGPDOnline});

    return (
        <Content
            question={question}
            options={options}
            selectOption={selectOption}

            handlerSelectOption={handlerSelectOption}
            handleCheckingAnswer={handleCheckingAnswer}

            isFieldUpdate={isFieldUpdate}
        />
    );
};