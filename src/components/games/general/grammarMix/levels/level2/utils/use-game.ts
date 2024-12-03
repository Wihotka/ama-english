import {useEffect} from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {GrammarMix_GamePlayData, UseGameT} from './../type';

export const useGame:UseGameT = (params) => {
    const {
        iteration,
        answersQty,
        variants,
        isFieldUpdate,
        initFinishPlaying,
        changeGPDOnline
    } = params;

    useEffect(() => {
        if (iteration === 0) return;

        setGameTimeout(() => {
            changeGPDOnline<GrammarMix_GamePlayData>({
                question: variants[iteration].question,
                indexVariantsAnswer: variants[iteration].indexVariantsAnswer,
                correctAnswer: variants[iteration].correctAnswer,
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