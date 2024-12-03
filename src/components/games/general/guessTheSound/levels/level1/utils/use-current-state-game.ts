import {useEffect} from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {GuessTheSoundL1_GamePlayData, useCurrentStateGameT} from '../type';

export const useCurrentStateGame:useCurrentStateGameT = (props) => {
    const {
        gameData,
        gamePlayData,

        changeGPDOnline,
        initFinishPlaying
    } = props;

    const {iteration, attemptsQte, mistakeQte, numberOptions} = gamePlayData;
    const {answersQty} = gameData;

    useEffect(() => {
        if (iteration === answersQty) return;

        if (iteration !== 0) {

            setGameTimeout(() => {
                changeGPDOnline<GuessTheSoundL1_GamePlayData>({
                    isFieldUpdate: true
                });
            }, 1000);

            setGameTimeout(() => {
                changeGPDOnline<GuessTheSoundL1_GamePlayData>({
                    isFieldUpdate: false,
                    numberOptions: numberOptions + 1,
                    attemptsQte: 0
                });
            }, 1800);

        }
    }, [iteration]);

    useEffect(() => {
        if (attemptsQte === 2) {
            changeGPDOnline<GuessTheSoundL1_GamePlayData>({
                iteration: iteration + 1,
                mistakeQte: mistakeQte + 1,
                attemptsQte: 0
            });
        }
    }, [attemptsQte]);

    useEffect(() => {
        if (iteration === answersQty)
            setGameTimeout(() => {
                initFinishPlaying();
            }, 1000);
    }, [iteration]);
};