import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import {isObject} from 'lodash';

import {GuessTheSoundL1_GamePlayData, OnCheckingAnswerT, Variant} from '../type';

// Проверка состояния игры при нажатии по варианту ответа
export const onCheckingAnswer:OnCheckingAnswerT = (params) => {
    const {gamePlayData, changeGPDOnline, gameData} = params;

    const {
        iteration,
        attemptsQte,
        correctAnswerQty,
        isAnimated,
        selectedVariant
    } = gamePlayData;

    const {arrayOptions} = gameData;

    const {answer} = selectedVariant;

    const {firstTry: prevFirstTry, secondTry: prevSecondTry} = correctAnswerQty;
    const correctVariantTranscription:Variant | undefined = arrayOptions[iteration].find(variant => variant.isCorrect);

    if (isAnimated || !isObject(correctVariantTranscription)) return;

    const {selectedTranscription} = correctVariantTranscription;

    if (answer === selectedTranscription && attemptsQte === 0) {
        changeGPDOnline<GuessTheSoundL1_GamePlayData>({
            correctAnswerQty: {firstTry: prevFirstTry + 1, secondTry: prevSecondTry},
            iteration: iteration + 1,
            selectedVariant: {answer: answer, isCorrect: true},
            isAnimated: true
        });
    } else if (answer === selectedTranscription && attemptsQte === 1) {
        changeGPDOnline<GuessTheSoundL1_GamePlayData>({
            correctAnswerQty: {firstTry: prevFirstTry, secondTry: prevSecondTry + 1},
            iteration: iteration + 1,
            selectedVariant: {answer: answer, isCorrect: true},
            isAnimated: true
        });
    } else if (answer !== selectedTranscription) {
        changeGPDOnline<GuessTheSoundL1_GamePlayData>({
            attemptsQte: attemptsQte + 1,
            selectedVariant: {answer: answer, isCorrect: false},
            isAnimated: true,
            isActiveVerification: true
        });
    }

    setGameTimeout(() => {
        changeGPDOnline<GuessTheSoundL1_GamePlayData>({
            selectedVariant: {answer: null, isCorrect: false},
            isAnimated: false,
            isActiveVerification: false
        });
    }, 800);
};