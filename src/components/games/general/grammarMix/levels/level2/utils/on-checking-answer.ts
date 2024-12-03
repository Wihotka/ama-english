import {GrammarMix_GamePlayData, OnCheckingAnswerT} from './../type';
import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

export const onCheckingAnswer:OnCheckingAnswerT = (params) => {
    const {inputText, correctAnswer, correctAnswerQty, numberAttempts, iteration, changeGPDOnline} = params;

    if (inputText.toLowerCase() === correctAnswer.toLowerCase()) {
        if (numberAttempts === 0) {
            changeGPDOnline<GrammarMix_GamePlayData>({
                correctAnswerQty: {...correctAnswerQty, firstTry: correctAnswerQty.firstTry + 1},
                isCorrectAnswer: true
            });
        } else {
            changeGPDOnline<GrammarMix_GamePlayData>({
                correctAnswerQty: {...correctAnswerQty, secondTry: correctAnswerQty.secondTry + 1},
                isCorrectAnswer: true
            });
        }

        setGameTimeout(() => {
            changeGPDOnline<GrammarMix_GamePlayData>({
                isFieldUpdate: true,
                inputText: '',
                iteration: iteration + 1,
                numberAttempts: 0
            });
        }, 1000);

    } else {
        if (numberAttempts === 0) {

            changeGPDOnline<GrammarMix_GamePlayData>({
                numberAttempts: numberAttempts + 1,
                isCorrectAnswer: false
            });

            setGameTimeout(() => {
                changeGPDOnline<GrammarMix_GamePlayData>({
                    inputText: '',
                    isCorrectAnswer: null,
                });
            }, 1000);

        } else {

            changeGPDOnline<GrammarMix_GamePlayData>({
                isCorrectAnswer: false
            });

            setGameTimeout(() => {
                changeGPDOnline<GrammarMix_GamePlayData>({
                    isFieldUpdate: true,
                    inputText: '',
                    iteration: iteration + 1,
                    numberAttempts: 0
                });
            }, 1000);
        }
    }
};