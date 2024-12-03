import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import React from 'react';
import {
    TextTeaserT,
    TextTeaser_GamePlayData,
    TextTeaser_TextPart,
} from '../../type';
import {Content} from './content';

export const Body = ({
    game,
    changeGPDOnline,
    initFinishPlaying,
}:TextTeaserT) => {
    const {gameData, gamePlayData} = game;
    const {
        textParts,
        mistakesQty,
        rightAnswersQty,
        isHintUsed,
        isCorrect: isCorrectAnswer,
    } = gamePlayData;
    const isThirdTry = mistakesQty === 2;

    const checkAnswer = () => {
        if (isCorrectAnswer) {
            initFinishPlaying();
            
            return;
        }

        const newTextParts:TextTeaser_TextPart[] = textParts.map(
            ({correctPosition, text}, i) => ({
                isCorrect: i + 1 === correctPosition,
                correctPosition,
                text,
            })
        );
        const isCorrect = newTextParts.every(({isCorrect}) => isCorrect);

        changeGPDOnline<TextTeaser_GamePlayData>({
            textParts: newTextParts,
            mistakesQty: isCorrect ? mistakesQty : mistakesQty + 1,
            rightAnswersQty: isCorrect ? rightAnswersQty + 1 : rightAnswersQty,
            isCheckBtnDisabled: true,
            highlight: true,
            isDragDisabled: true,
        });

        setGameTimeout(() => {
            if (isThirdTry && !isCorrect) {
                initFinishPlaying();
            } else {
                changeGPDOnline<TextTeaser_GamePlayData>({
                    highlight: false,
                    isDragDisabled: false,
                    isCorrect,
                    isCheckBtnDisabled: false,
                });
            }
        }, 1000);
    };

    const moveTextPart = (where:number, from:number) => {
        const copy = [...textParts];

        [copy[where], copy[from]] = [copy[from], copy[where]];

        changeGPDOnline<TextTeaser_GamePlayData>({
            textParts: copy,
            isCheckBtnDisabled: false,
        });
    };

    const handleHintClick = () => {
        if (isHintUsed) return;

        const firstTextPartIndex = textParts.findIndex(
            ({correctPosition}) => correctPosition === 1
        );
        const firstTextPart = textParts[firstTextPartIndex];
        const newTextParts:TextTeaser_TextPart[] = [
            {...firstTextPart, isCorrect: true},
            ...textParts.filter(({correctPosition}) => correctPosition !== 1),
        ];

        changeGPDOnline<TextTeaser_GamePlayData>({
            textParts: newTextParts,
            isHintUsed: true,
        });
    };

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            checkAnswer={checkAnswer}
            handleHintClick={handleHintClick}
            moveTextPart={moveTextPart}
        />
    );
};
