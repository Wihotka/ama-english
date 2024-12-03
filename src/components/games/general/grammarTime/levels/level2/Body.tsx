import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import React from 'react';
import {
    GrammarTime_ChangeReplacedItem,
    GrammarTime_DropElement,
} from '../../type';
import {onChangeReplacedItem, onDropElement} from '../../utils';
import {Content} from './content';
import {GrammarTimeL2T, GrammarTimeL2_GamePlayData} from './type';

export const Body = ({
    game,
    changeGPDOnline,
    initFinishPlaying,
}:GrammarTimeL2T) => {
    const {gameData, gamePlayData, gameSettings} = game;
    const {
        userElements,
        elementToBeReplaced,
        currentQ,
        firstTryCorrectAnswersQty,
        secondTryCorrectAnswersQty,
        mistakesQty,
    } = gamePlayData;
    const {gameTasks, qPerAnswer, maxMistakesQty} = gameData;
    const {answersQty} = gameSettings;
    const isFirstTry = mistakesQty === 0;
    const isSecondTry = mistakesQty === 1;
    const isThirdTry = mistakesQty === 2;

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
        const correctAnswers = staticElements[0].indicator
            ? staticElements.map(({indicator}, i) => indicator === userElements[i]?.indicator)
            : staticElements.map(({variantId}, i) => variantId === userElements[i]?.id);

        const isCorrect = correctAnswers.every((a) => a);
        const newCorrectIndexes = correctAnswers
            .map((a, i) => (a ? i : null))
            .filter((i):i is number => typeof i === 'number');
        const iterationChange = isCorrect || mistakesQty + 1 === maxMistakesQty;
        const isLastIteration = iterationChange && currentQ === answersQty - 1;
        const newUserEls
            = isFirstTry || iterationChange
                ? new Array<null>(qPerAnswer).fill(null)
                : correctAnswers.map((v, i) => (v ? userElements[i] : null));
        
        changeGPDOnline<GrammarTimeL2_GamePlayData>({
            highlight: true,
            isCorrect,
            firstTryCorrectAnswersQty:
                isCorrect && isFirstTry
                    ? firstTryCorrectAnswersQty + 1
                    : firstTryCorrectAnswersQty,
            secondTryCorrectAnswersQty:
                isCorrect && isSecondTry
                    ? secondTryCorrectAnswersQty + 1
                    : secondTryCorrectAnswersQty,
            correctIndexes: isFirstTry || isThirdTry ? [] : newCorrectIndexes,
            isDragDisabled: true,
        });

        setGameTimeout(() => {
            if (isLastIteration) {
                initFinishPlaying();
            } else {
                changeGPDOnline<GrammarTimeL2_GamePlayData>({
                    highlight: false,
                    isCorrect: false,
                    userElements: newUserEls,
                    currentQ: iterationChange ? currentQ + 1 : currentQ,
                    mistakesQty: iterationChange
                        ? 0
                        : isCorrect
                            ? mistakesQty
                            : mistakesQty + 1,
                    correctIndexes: iterationChange || isFirstTry ? [] : newCorrectIndexes,
                    isDragDisabled: false,
                });
            }
        }, 1000);
    };

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            isFirstTry={isFirstTry}
            dropElement={dropElement}
            changeReplacedItem={changeReplacedItem}
            checkAnswer={checkAnswer}
        />
    );
};
