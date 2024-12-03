import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import React from 'react';
import {
    GrammarTime_ChangeReplacedItem,
    GrammarTime_DropElement,
} from '../../type';
import {onChangeReplacedItem, onDropElement} from '../../utils';
import {Content} from './content';
import {GrammarTimeL1T, GrammarTimeL1_GamePlayData} from './type';

export const Body = ({
    game,
    changeGPDOnline,
    initFinishPlaying,
}:GrammarTimeL1T) => {
    const {gameData, gamePlayData, gameSettings} = game;
    const {
        userElements,
        elementToBeReplaced,
        currentQ,
        correctAnswersQty,
        mistakesQty,
    } = gamePlayData;
    const {gameTasks, qPerAnswer, maxMistakesQty} = gameData;
    const {answersQty} = gameSettings;

    const dropElement:GrammarTime_DropElement = (el, index, replaceIndex) => {
        onDropElement({
            el,
            index,
            userElements,
            replaceIndex,
            elementToBeReplaced,
            changeGPDOnline,
        });
    };

    const changeReplacedItem:GrammarTime_ChangeReplacedItem = (el) => {
        onChangeReplacedItem({el, changeGPDOnline});
    };

    const checkAnswer = () => {
        const currentTask = gameTasks[currentQ];
        const {staticElements} = currentTask;
        const isCorrect = staticElements[0].indicator
            ? staticElements.every(({indicator}, i) => indicator === userElements[i]?.indicator)
            : staticElements.every(({variantId}, i) => variantId === userElements[i]?.id);

        const iterationChange = isCorrect || mistakesQty + 1 === maxMistakesQty;
        const isLastIteration = iterationChange && currentQ === answersQty - 1;

        changeGPDOnline<GrammarTimeL1_GamePlayData>({
            highlight: true,
            isCorrect,
            correctAnswersQty:
                isCorrect && mistakesQty === 0
                    ? correctAnswersQty + 1
                    : correctAnswersQty,
            isDragDisabled: true,
        });

        setGameTimeout(() => {
            if (isLastIteration) {
                initFinishPlaying();
            } else {
                changeGPDOnline<GrammarTimeL1_GamePlayData>({
                    highlight: false,
                    isCorrect: false,
                    userElements: new Array(qPerAnswer).fill(null),
                    currentQ: iterationChange ? currentQ + 1 : currentQ,
                    elementToBeReplaced: null,
                    mistakesQty: iterationChange
                        ? 0
                        : isCorrect
                            ? mistakesQty
                            : mistakesQty + 1,
                    isDragDisabled: false,
                });
            }
        }, 1000);
    };

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            dropElement={dropElement}
            changeReplacedItem={changeReplacedItem}
            checkAnswer={checkAnswer}
        />
    );
};
