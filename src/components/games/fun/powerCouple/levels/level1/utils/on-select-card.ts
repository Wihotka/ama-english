import {OnSelectCardT, PowerCouple_GamePlayData} from './../type';

export const onSelectCard:OnSelectCardT = (params) => {
    const {selectCard, cards, selectCards, changeGPDOnline} = params;

    if (!selectCards.first) {
        changeGPDOnline<PowerCouple_GamePlayData>({
            cards: cards.map(card => card?.id === selectCard.id ? {...card, isSelect: true} : card),
            selectCards: {...selectCards, first: selectCard}
        });
    }

    if (selectCards.first && selectCards.first.id === selectCard.id) {
        changeGPDOnline<PowerCouple_GamePlayData>({
            cards: cards.map(card => card?.id === selectCard.id ? {...card, isSelect: false} : card),
            selectCards: {first: null, second: null}
        });
    }

    if (selectCards.first && selectCard.id !== selectCards.first.id) {
        changeGPDOnline<PowerCouple_GamePlayData>({
            cards: cards.map(card => card?.id === selectCard.id ? {...card, isSelect: true} : card),
            selectCards: {...selectCards, second: selectCard}
        });
    }
};