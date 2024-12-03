import {isObject} from 'lodash';
import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import {MemoryBoard_Card} from '../type';

export const onCheckingSelectCards = (params:any) => {
    const {gamePlayData, changeGPDOnline} = params;
    const {cards, selectedCard, score, stepBy} = gamePlayData;
    const {first, second} = selectedCard as {first:MemoryBoard_Card; second:MemoryBoard_Card};

    if (!isObject(first) || !isObject(second)) return;

    if (first.word === second.word) {
        changeGPDOnline({
            cards: cards.map((card:MemoryBoard_Card) => card.id === first.id || card.id === second.id
                ? {...card, isCorrect: true, isDisabled: true, isHidden: true}
                : {...card, isDisabled: true}),
            selectedCard: {first: null, second: null},
            score: {...score, [stepBy]: score[stepBy] + 2}
        });

        setGameTimeout(() => {
            changeGPDOnline({
                cards: cards.map((card:MemoryBoard_Card) => card.id === first.id || card.id === second.id
                    ? {...card, isCorrect: true, isDisabled: true, isHidden: true}
                    : {...card, isDisabled: false})
            });
        }, 600);
    } else {
        changeGPDOnline({
            cards: cards.map((card:MemoryBoard_Card) => card.id === first.id || card.id === second.id
                ? {...card, isCorrect: false, isDisabled: true}
                : {...card, isDisabled: true}),
            selectedCard: {first: null, second: null}
        });

        setGameTimeout(() => {
            changeGPDOnline({
                cards: cards.map((card:MemoryBoard_Card) => card.id === first.id || card.id === second.id
                    ? {...card, isFlipped: false, isCorrect: null, inSelect: false, isDisabled: false}
                    : {...card, isDisabled: card.isCorrect ? true : false})
            });
        }, 600);
    }
};