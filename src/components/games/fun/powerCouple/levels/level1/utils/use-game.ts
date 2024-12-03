import {useEffect} from 'react';

import {onCheckingCorrectCards, onDisabledCards, onGenerateMainField} from './';

import {PowerCouple_GamePlayData, UseGameT} from './../type';

export const useGame:UseGameT = (params) => {
    const {mainField, selectCards, gridSelectMap, cards, changeGPDOnline, initFinishPlaying} = params;

    useEffect(() => {
        onCheckingCorrectCards({cards, selectCards, gridSelectMap, mainField, changeGPDOnline});
    }, [selectCards]);

    useEffect(() => {
        changeGPDOnline<PowerCouple_GamePlayData>({
            mainField: onDisabledCards({mainField: onGenerateMainField({cards, gridSelectMap})})
        });
    }, [cards, gridSelectMap]);

    useEffect(() => {
        if (cards.length <= 0) {
            initFinishPlaying();
        }
    }, [cards]);
};