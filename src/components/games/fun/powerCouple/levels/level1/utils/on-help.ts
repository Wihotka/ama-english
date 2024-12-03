import {groupBy, isEqual, random} from 'lodash';
import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {OnHelpT, PowerCouple_GamePlayData} from '../type';

export const onHelp:OnHelpT = (params) => {
    const {cards, changeGPDOnline} = params;

    const correctCard = cards.filter(card => !card.isDisabled);

    const groupCard = Object.values(groupBy(correctCard, (card) => card.name)).filter(group => group.length === 2);

    if (groupCard.length <= 0) {
        changeGPDOnline<PowerCouple_GamePlayData>({
            isBtnMixLighting: true,
            isHelpBtnDisabled: true,
        });

        setGameTimeout(() => {
            changeGPDOnline<PowerCouple_GamePlayData>({
                isHelpBtnDisabled: false,
                isBtnMixLighting: false
            });
        }, 300);
    }

    const randomGroup = groupCard[random(groupCard.length - 1)];

    changeGPDOnline<PowerCouple_GamePlayData>({
        cards: cards.map(card => {
            if (randomGroup.some(cardCorrect => isEqual(card, cardCorrect))) {
                return {...card, isCorrect: true};
            }

            return card;
        }),
        isHelpBtnDisabled: true,
        isAllDisabledCard: true,
    });

    setGameTimeout(() => changeGPDOnline<PowerCouple_GamePlayData>({
        cards: cards.map(card => {
            if (randomGroup.some(cardCorrect => isEqual(card, cardCorrect))) {
                return {...card, isCorrect: null};
            }

            return card;
        }),
        isHelpBtnDisabled: false,
        isAllDisabledCard: false,
    }), 1000);
};