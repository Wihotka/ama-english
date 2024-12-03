import {compact, flattenDeep} from 'lodash';

import {onDisabledCards, onGenerateMainField} from './../utils';

import {StartPlayingCB} from '@custom-types';
import {PowerCoupleL1T} from './../type';

export const startPlaying:StartPlayingCB<PowerCoupleL1T> = ({gameData}) => {
    const {cards, map} = gameData;

    const field = onGenerateMainField({cards, gridSelectMap: Object.values(map)});

    const mainField = onDisabledCards({mainField: field});

    return {
        mainField,
        gridSelectMap: Object.values(map),

        cards: compact(flattenDeep(mainField)),
        maxCardsQty: compact(flattenDeep(field)).length,
        selectCards: {
            first: null,
            second: null
        },

        isCardFlip: false,
        isHelpBtnDisabled: false,
        isAllDisabledCard: false,
        isBtnMixLighting: false
    };
};