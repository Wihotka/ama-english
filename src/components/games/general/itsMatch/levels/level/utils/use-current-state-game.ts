import {useEffect} from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {ItsMatch_GamePlayData, useCurrentStateGameT} from '../type';

export const useCurrentStateGame:useCurrentStateGameT = (props) => {
    const {
        gameData,
        gamePlayData,

        changeGPDOnline,
        initFinishPlaying
    } = props;

    const {iteration,numberOptions,} = gamePlayData;
    const {answersQty} = gameData;

    useEffect(() => {
        if (iteration === answersQty) return;

        if (iteration !== 0) {

            setGameTimeout(() => {
                changeGPDOnline<ItsMatch_GamePlayData>({
                    isFieldUpdate: true
                });
            }, 1000);

            setGameTimeout(() => {
                changeGPDOnline<ItsMatch_GamePlayData>({
                    numberOptions: numberOptions + 1,
                    isFieldUpdate: false,
                });
            }, 1800);
        }
    }, [iteration]);

    useEffect(() => {
        if (iteration === answersQty)
            setGameTimeout(() => {
                initFinishPlaying();
            }, 1000);
    }, [iteration]);
};