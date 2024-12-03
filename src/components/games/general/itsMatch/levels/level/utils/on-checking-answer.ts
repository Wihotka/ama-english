import {isEqual} from 'lodash';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {ItsMatch_GamePlayData, OnCheckingAnswerT, Variant} from '../type';

// Проверка состояния игры при нажатии по варианту ответа
export const onCheckingAnswer:OnCheckingAnswerT = (params) => {
    const {gamePlayData, changeGPDOnline, gameData} = params;
    const {arrayOptions} = gameData;
    const {
        correctAnswerQty,
        iteration,
        isAnimated,
        mistakeQte,
        selectedVariant,
        numberOptions
    } = gamePlayData;

    if (isAnimated) return;

    const correctVariantTranscription:Variant | undefined = arrayOptions[numberOptions].find(variantObj => variantObj.isCorrect);

    if (!correctVariantTranscription) return;

    if (isEqual(selectedVariant.answer, correctVariantTranscription)) {
        changeGPDOnline<ItsMatch_GamePlayData>({
            correctAnswerQty: correctAnswerQty + 1,
            selectedVariant: {answer: selectedVariant.answer, isCorrect: true}
        });
    } else {
        changeGPDOnline<ItsMatch_GamePlayData>({
            mistakeQte: mistakeQte + 1,
            selectedVariant: {answer: selectedVariant.answer, isCorrect: false}

        });
    }

    changeGPDOnline<ItsMatch_GamePlayData>({
        iteration: iteration + 1,
        isAnimated: true,
        isActiveVerification: false
    });

    setGameTimeout(() => {
        changeGPDOnline<ItsMatch_GamePlayData>({
            selectedVariant: {answer: null, isCorrect: false},

            isAnimated: false
        });
    }, 800);
};