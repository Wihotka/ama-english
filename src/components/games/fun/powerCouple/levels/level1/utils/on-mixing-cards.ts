import {groupBy, shuffle} from 'lodash';
import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {onDisabledCards, onGenerateMainField} from './';

import {CardI, OnMixingCardsT, PowerCouple_GamePlayData} from './../type';

export const onMixingCards:OnMixingCardsT = (params) => {
    const {cards, gridSelectMap, changeGPDOnline} = params;

    let isCoincidences = false;
    let cardsShuffle = cards;

    do {
        cardsShuffle = shuffle(cards);
        const generatorMainField = onDisabledCards({mainField: onGenerateMainField({cards: cardsShuffle, gridSelectMap})});
        const cardsMainField = generatorMainField.flat(5).filter(card => !!card) as CardI[];
        const correctCard = cardsMainField.filter(card => !card.isDisabled);
        const groupCard = Object.values(groupBy(correctCard, (card) => card.name)).filter(group => group.length === 2);

        isCoincidences = groupCard.length > 0;
    } while (!isCoincidences);

    console.log(isCoincidences, '3');

    changeGPDOnline<PowerCouple_GamePlayData>({
        isCardFlip: true,
        isHelpBtnDisabled: true
    });

    setGameTimeout(() => {
        changeGPDOnline<PowerCouple_GamePlayData>({
            cards: cardsShuffle
        });
    }, 1000);

    setGameTimeout(() => {
        changeGPDOnline<PowerCouple_GamePlayData>({
            isCardFlip: false,
            isHelpBtnDisabled: false
        });
    }, 1200);
};