import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {OnCheckingAnswerT, PhraseJumping_GamePlayData} from './../type';

export const onCheckingAnswer:OnCheckingAnswerT = (params) => {
    const {inputText, correctAnswers, correctAnswerQty, numberAttempts, iteration, changeGPDOnline} = params;

    const getPattern = (str:string) =>
        (str.slice(0, 1).toLowerCase() + str.slice(1, str.length))
            .replace(/[\b\s.!?]/g, '');

    const isCorrect = correctAnswers.some(variant => getPattern(variant) === getPattern(inputText));

    changeGPDOnline<PhraseJumping_GamePlayData>({
        isBtnDisabled: true,
    });

    if (isCorrect) {

        if (numberAttempts === 0) {
            changeGPDOnline<PhraseJumping_GamePlayData>({
                correctAnswerQty: {...correctAnswerQty, firstTry: correctAnswerQty.firstTry + 1},
                isCorrectAnswer: true
            });
        } else {
            changeGPDOnline<PhraseJumping_GamePlayData>({
                correctAnswerQty: {...correctAnswerQty, secondTry: correctAnswerQty.secondTry + 1},
                isCorrectAnswer: true
            });
        }

        setGameTimeout(() => {
            changeGPDOnline<PhraseJumping_GamePlayData>({
                inputText: '',
                iteration: iteration + 1,
                numberAttempts: 0,
                isOpenHint: false,
                isCorrectAnswer: null,
                isFieldUpdate: true,
            });
        }, 1000);
    } else {
        if (numberAttempts === 0) {
            changeGPDOnline<PhraseJumping_GamePlayData>({
                isCorrectAnswer: false,
                numberAttempts: 1
            });

            setGameTimeout(() => {
                changeGPDOnline<PhraseJumping_GamePlayData>({
                    isCorrectAnswer: null
                });
            }, 1000);
        } else {
            changeGPDOnline<PhraseJumping_GamePlayData>({
                isCorrectAnswer: false
            });

            setGameTimeout(() => {
                changeGPDOnline<PhraseJumping_GamePlayData>({
                    inputText: '',
                    iteration: iteration + 1,
                    numberAttempts: 0,
                    isOpenHint: false,
                    isCorrectAnswer: null,
                    isFieldUpdate: true,
                });
            }, 1000);
        }
    }
};