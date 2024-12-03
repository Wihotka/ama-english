import React, {useEffect} from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {Content} from './content';

import {AlphabetL2T} from './type';

export const Body = (p:AlphabetL2T) => {
    const {game, changeGPD, changeGPDOnline, initFinishPlaying} = p;
    const {gamePlayData, gameData, gameSettings, gameConfig} = game;
    const {userAnswers, wrongAnswersQty, iteration, correctAnswersQty} = gamePlayData;
    const {data} = gameData;
    const {speedInSeconds} = gameSettings;
    const {birdsQty} = gameConfig;

    useEffect(() => {
        changeGPDOnline({
            currentMistakeId: null,
            wrongAnswersQty: iteration > birdsQty &&
            !userAnswers.includes(iteration - (birdsQty + 1)) && !data[iteration - (birdsQty + 1)].isCorrect
                ? wrongAnswersQty + 1
                : wrongAnswersQty,
        });

        setGameTimeout(() => {
            if (iteration < data.length + (birdsQty - 1)) {
                changeGPD({
                    isAnimated: true,
                });

                setGameTimeout(() => {
                    changeGPD({
                        iteration: iteration + 1
                    });
                }, 50);

                setGameTimeout(() => {
                    changeGPD({
                        isAnimated: false
                    });
                }, 180);

                if (iteration >= (data.length - 1) &&
                    data.filter(({id}) => id >= (iteration - birdsQty))
                        .every(({isCorrect, id}) => (isCorrect || (userAnswers.includes(id))))) {
                    initFinishPlaying();
                }
            } else {
                initFinishPlaying();
            }
        }, Number(speedInSeconds) * 1000);
    }, [iteration]);

    const handleClick = ({isCorrect, id}:{ isCorrect:boolean, id:number }) => {
        changeGPDOnline({
            userAnswers: [...userAnswers, id],
        });

        if (isCorrect) {
            changeGPDOnline({
                wrongAnswersQty: userAnswers.includes(id) ? wrongAnswersQty : wrongAnswersQty + 1,
                currentMistakeId: id,
            });
            setGameTimeout(() => {
                changeGPDOnline({
                    currentMistakeId: null
                });
            }, 500);
        } else {
            changeGPDOnline({
                correctAnswersQty: correctAnswersQty + 1
            });
        }
    };

    return (
        <Content
            gamePlayData={gamePlayData}
            gameData={gameData}
            birdsQty={birdsQty}
            handleClick={handleClick}
        />
    );
};
