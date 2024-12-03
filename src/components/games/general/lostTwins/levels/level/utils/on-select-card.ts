import {isObject} from 'lodash';

import {LostTwins_GamePlayData, OnSelectCardT} from './../type';

export const onSelectCart:OnSelectCardT = (params) => {
    const {selectCard, changeGPDOnline, gamePlayData, gameSettings} = params;
    const {level} = gameSettings;
    const {selectedCard, cards} = gamePlayData;
    const {first} = selectedCard;

    const searchSelectCard = cards.find((card => card.id === selectCard.id));

    if (!isObject(searchSelectCard)) return;

    changeGPDOnline<LostTwins_GamePlayData>({
        cards: cards.map(card => card.id === searchSelectCard.id ? {
            ...card,
            isFlipped: true,
            inSelect: true
        } : card)
    });

    if (first?.id === searchSelectCard.id) {
        changeGPDOnline<LostTwins_GamePlayData>({
            cards: cards.map(card => card.id === searchSelectCard.id ? {
                ...card,
                inSelect: false,
                isFlipped: level === 1
            } : card),
            selectedCard: {first: null, seconds: null}
        });
    } else {
        if (!isObject(first)) {
            changeGPDOnline<LostTwins_GamePlayData>({
                selectedCard: {first: searchSelectCard, seconds: null}
            });
        } else {
            changeGPDOnline<LostTwins_GamePlayData>({
                selectedCard: {...selectedCard, seconds: searchSelectCard}
            });
        }
    }

};