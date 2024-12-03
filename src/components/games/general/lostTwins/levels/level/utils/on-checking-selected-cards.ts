import {isObject} from 'lodash';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {LostTwins_GamePlayData, OnCheckingSelectCardsT} from './../type';

export const onCheckingSelectCards:OnCheckingSelectCardsT = (params) => {
    const {gamePlayData, changeGPDOnline, gameData, speakTexts} = params;
    const {cards, selectedCard} = gamePlayData;
    const {isFlippedField, words} = gameData;
    const {first, seconds} = selectedCard;

    if (!isObject(first) || !isObject(seconds)) return;

    if (first.word === seconds.word) {
        changeGPDOnline<LostTwins_GamePlayData>({
            cards: cards.map(card => card.id === first.id || card.id === seconds.id
                ? {...card, isCorrect: true}
                : {...card, isDisabled: true}),
            selectedCard: {first: null, seconds: null}
        });

        const sounds = words.find(word => word.word === first.word);

        if (!sounds) return;

        speakTexts({
            text: sounds.word,
            path: sounds.soundUrl,
            onFinishPlaying: () => changeGPDOnline<LostTwins_GamePlayData>({
                cards: cards.map(card => card.id === first.id || card.id === seconds.id
                    ? {...card, isHidden: true, inSelect: false}
                    : {...card, isDisabled: false})
            })
        });
    } else {
        changeGPDOnline<LostTwins_GamePlayData>({
            cards: cards.map(card => card.id === first.id || card.id === seconds.id
                ? {...card, isCorrect: false}
                : {...card, isDisabled: true}),
            selectedCard: {first: null, seconds: null}
        });

        setGameTimeout(() => {
            isFlippedField
                ? changeGPDOnline<LostTwins_GamePlayData>({
                    cards: cards.map(card => card.id === first.id || card.id === seconds.id
                        ? {...card, isFlipped: false, isCorrect: null, inSelect: false}
                        : {...card, isDisabled: false})
                })
                : changeGPDOnline<LostTwins_GamePlayData>({
                    cards: cards.map(card => card.id === first.id || card.id === seconds.id
                        ? {...card, isCorrect: null, inSelect: false}
                        : {...card, isDisabled: false})
                });
        }, 1000);
    }
};