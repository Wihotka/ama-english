import {useEffect} from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {UseGameT, PhraseJumping_GamePlayData} from '../type';

export const useGame:UseGameT = (params) => {
    const {variants, iteration, answersQty, isFieldUpdate, changeGPDOnline, initFinishPlaying} = params;

    useEffect(() => {
        if (iteration === 0) return;

        setGameTimeout(() => {
            changeGPDOnline<PhraseJumping_GamePlayData>({
                question: variants[iteration].question,
                correctAnswers: variants[iteration].correctAnswers,
                punctuationMark: variants[iteration].punctuationMark,
                hintType: variants[iteration].typePrompt,

                isFieldUpdate: false,
                isCorrectAnswer: null,
            });
        }, 1000);

    }, [isFieldUpdate]);

    useEffect(() => {
        if (iteration === answersQty) {
            initFinishPlaying();
        }
    }, [iteration]);
};