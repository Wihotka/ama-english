import React from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {Content} from './content';

import {CardT, WorndNLettersT} from './type';

export const Body = (p:WorndNLettersT) => {
    const {game, changeGPDOnline, initFinishPlaying} = p;
    const {gamePlayData, gameData, gameSettings} = game;
    const {cards, mistakesPerIteration, iteration, correctAnswersQty, userScores} = gamePlayData;
    const {level} = gameSettings;
    const {examples} = gameData;

    const checkAnswer = () => {
        const answers = [...cards].filter(a => a.columnId === 0).sort((a, b) => a.id - b.id);
        const userAnswers = cards.filter(({index}) => index !== null).map(({id, index}) => ({
            id,
            isCorrect: answers[index as number].index === index
        }));
        const isCorrect = userAnswers.every(({isCorrect}) => isCorrect);

        changeGPDOnline({
            userAnswers,
            gameIsPausing: true,
            correctAnswersQty: isCorrect ? correctAnswersQty + 1 : correctAnswersQty,
            userScores: userScores + (isCorrect
                ? mistakesPerIteration === 0
                    ? 2
                    : 1
                : 0)
        });

        setGameTimeout(() => (isCorrect || mistakesPerIteration > 0)
            ? iterationChange()
            : stageChange(userAnswers), 2000);
    };

    const stageChange = (userAnswers:Array<{ id:number, isCorrect:boolean }>) => {
        const newCards = cards.map(elem => (userAnswers.find(({id}) => id === elem.id)?.isCorrect)
        || (userAnswers.find(({id}) => (id - cards.length / 2) === elem.id)?.isCorrect)
            ? elem
            : (elem.columnId === 1)
                ? {...elem, id: (elem.id + cards.length / 2), columnId: 0}
                : {...elem, id: (elem.id - cards.length / 2), columnId: 1});

        changeGPDOnline({
            cards: newCards,
            mistakesPerIteration: 1,
            gameIsPausing: false,
            userAnswers: [],
            correctAnswers: newCards.filter(({columnId, index}) => columnId === 0 && index !== null).map(({id}) => id)
        });
    };

    const iterationChange = () => {
        if (iteration === (examples.length - 1)) {
            initFinishPlaying();
        } else {
            const {words} = examples[iteration + 1];

            changeGPDOnline({
                cards: [...words.map(word => ({...word, columnId: 1})),
                    ...words.map(({id}) => ({id: words.length + id, word: null, columnId: 0, index: null}))],
                mistakesPerIteration: 0,
                iteration: iteration + 1,
                gameIsPausing: false,
                userAnswers: [],
                correctAnswers: []
            });
        }
    };

    const moveHandler = ({dragId, hoverId, columnId}:any) => changeGPDOnline({
        cards: cardMoving({
            dragId,
            columnId,
            hoverId
        })
    });

    const changeDragStatus = (value:boolean) => changeGPDOnline({
        dragStatus: value
    });

    const cardMoving = ({dragId, columnId, hoverId}:any) => {
        const {cards} = gamePlayData;

        const currentCard = cards.find(card => card.id === dragId) as CardT;

        const columnsIsMatch:boolean = currentCard.columnId === columnId;

        return [...cards].map(card => {
            if (card.id === dragId) {
                return columnsIsMatch ? {...card, id: hoverId} : {...card, columnId: 0, id: hoverId};
            } else if (card.id === hoverId) {
                return columnsIsMatch ? {...card, id: dragId} : {...card, columnId: 1, id: dragId};
            }

            return card;
        });
    };

    return (
        <Content
            gamePlayData={gamePlayData}
            gameData={gameData}
            level={level}
            moveHandler={moveHandler}
            checkAnswer={checkAnswer}
            changeDragStatus={changeDragStatus}
        />
    );
};
