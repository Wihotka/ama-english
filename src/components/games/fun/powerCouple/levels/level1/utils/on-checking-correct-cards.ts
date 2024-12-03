import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import {updateGridMap} from './';

import {OnCheckingSelectCardsT, PowerCouple_GamePlayData} from './../type';

export const onCheckingCorrectCards:OnCheckingSelectCardsT = (params) => {
    const {selectCards, gridSelectMap, mainField, cards, changeGPDOnline} = params;

    if (!selectCards.first) return;

    if (!selectCards.second) return;

    if (selectCards.first.name === selectCards.second.name) {
        const updateCard = cards.filter(card => card.id !== selectCards.first?.id && card.id !== selectCards.second?.id);

        changeGPDOnline<PowerCouple_GamePlayData>({
            cards: cards.map(card => (card.id === selectCards.first?.id || card.id === selectCards.second?.id)
                ? {...card, isCorrect: true}
                : card),
            isAllDisabledCard: true
        });

        setGameTimeout(() => {
            changeGPDOnline<PowerCouple_GamePlayData>({
                gridSelectMap: updateGridMap({gridSelectMap, selectCards, mainField}),
                selectCards: {first: null, second: null},
                cards: updateCard,
                isAllDisabledCard: false
            });
        }, 1000);

    } else {
        changeGPDOnline<PowerCouple_GamePlayData>({
            cards: cards.map(card => card.id === selectCards.first?.id || card.id === selectCards.second?.id
                ? {...card, isCorrect: false}
                : card),
            isAllDisabledCard: true
        });

        setGameTimeout(() => {
            changeGPDOnline<PowerCouple_GamePlayData>({
                cards: cards.map(card => card.id === selectCards.first?.id || card.id === selectCards.second?.id
                    ? {...card, isCorrect: null, isSelect: false}
                    : card),
                selectCards: {first: null, second: null},
                isAllDisabledCard: false
            });

        }, 1000);
    }
};