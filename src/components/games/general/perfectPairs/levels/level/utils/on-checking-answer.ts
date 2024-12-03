import {isEqual} from 'lodash';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {PerfectPairs_GamePlayData, OnCheckingAnswerT, Variant} from '../type';

// Проверка состояния игры при нажатии по варианту ответа
export const onCheckingAnswer:OnCheckingAnswerT = (params) => {
    const {gamePlayData, changeGPDOnline, speakTexts, gameData} = params;
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
        changeGPDOnline<PerfectPairs_GamePlayData>({
            correctAnswerQty: correctAnswerQty + 1,
            selectedVariant: {answer: selectedVariant.answer, isCorrect: true},
            isAnimated: true,
            isActiveVerification: false
        });

        speakTexts({
            text: '',
            path: selectedVariant.answer?.soundUrl,
            onFinishPlaying: () => {
                changeGPDOnline<PerfectPairs_GamePlayData>({
                    selectedVariant: {answer: null, isCorrect: false},
                    isAnimated: false,
                    iteration: iteration + 1,
                });
            }
        });
    } else {
        changeGPDOnline<PerfectPairs_GamePlayData>({
            mistakeQte: mistakeQte + 1,
            selectedVariant: {answer: selectedVariant.answer, isCorrect: false},
            iteration: iteration + 1,
            isAnimated: true,
            isActiveVerification: false
        });

        setGameTimeout(() => {
            changeGPDOnline<PerfectPairs_GamePlayData>({
                selectedVariant: {answer: null, isCorrect: false},
                isAnimated: false
            });
        }, 800);
    }
};