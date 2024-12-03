import {useEffect} from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {GrammarMix_GamePlayData, UseGameT} from './../type';

export const useGame:UseGameT = (params) => {
    const {
        selectOption,
        iteration,
        variants,
        answersQty,
        changeGPDOnline,
        initFinishPlaying
    } = params;

    useEffect(() => {
        if (selectOption.isCorrect === null) return;

        setGameTimeout(() => {
            changeGPDOnline<GrammarMix_GamePlayData>({
                isFieldUpdate: true
            });
        }, 1000);

        setGameTimeout(() => {
            changeGPDOnline<GrammarMix_GamePlayData>({
                iteration: iteration + 1,
            });
        }, 1500);

    }, [selectOption]);

    useEffect(() => {
        if (iteration === 0) return;

        setGameTimeout(() => {
            changeGPDOnline<GrammarMix_GamePlayData>({
                question: variants[iteration].question,
                options: variants[iteration].variantsAnswer.map(answer => ({content: answer})),
                correctAnswer: variants[iteration].correctAnswer,
                isFieldUpdate: false,
                selectOption: {option: null, isCorrect: null}
            });
        }, 1000);

    }, [iteration]);

    useEffect(() => {
        if (iteration === answersQty) {
            initFinishPlaying();
        }
    }, [iteration]);
};