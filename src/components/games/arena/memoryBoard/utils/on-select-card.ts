import {isObject} from 'lodash';
import {MemoryBoard_Card} from '../type';

export const onSelectCard = (params:any) => {
    const {selectCard, changeGPDOnline, gamePlayData} = params;
    const {selectedCard, cards} = gamePlayData;
    const {first} = selectedCard;

    const searchSelectCard:MemoryBoard_Card = cards.find(((card:MemoryBoard_Card) => card.id === selectCard.id));

    if (!isObject(searchSelectCard)) return;

    changeGPDOnline({
        cards: cards.map((card:MemoryBoard_Card) => (card.id === searchSelectCard.id) && (!card.isFlipped)
            ? {
                ...card,
                isFlipped: true,
                inSelect: true
            }
            : card)
    });

    if (first?.id === searchSelectCard.id) {
        changeGPDOnline({
            cards: cards.map((card:MemoryBoard_Card) => card.id === searchSelectCard.id ? {
                ...card,
                isFlipped: false,
                inSelect: false
            } : card),
            selectedCard: {first: null, second: null}
        });
    } else {
        if (!isObject(first)) {
            changeGPDOnline({
                selectedCard: {first: searchSelectCard, second: null}
            });
        } else {
            changeGPDOnline({
                selectedCard: {...selectedCard, second: searchSelectCard}
            });
        }
    }
};