import {useEffect} from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import {onCheckingSelectCards} from './';

import {LostTwins_GamePlayData, useCurrentStateGameT} from './../type';

export const useCurrentStateGame:useCurrentStateGameT = (params) => {
    const {gamePlayData, gameData, gameSettings, changeGPDOnline, initFinishPlaying, speakTexts} = params;
    const {cardQty, cardsData, timeVisibilityCard} = gameData;
    const {selectedCard, cards, isAllFlipCard, secondsNowGame} = gamePlayData;
    const {level} = gameSettings;

    const isStartCardFlip = level === 1;

    useEffect(() => {
        setGameTimeout(() => changeGPDOnline<LostTwins_GamePlayData>({
            secondsNowGame: secondsNowGame + 1
        }), 1000);
    }, [secondsNowGame]);

    useEffect(() => {
        if (!isAllFlipCard) return;

        changeGPDOnline<LostTwins_GamePlayData>({
            cards: cards.map(card => ({...card, isFlipped: true, isDisabled: true}))
        });

        setGameTimeout(() => {
            changeGPDOnline<LostTwins_GamePlayData>({
                cards: cards.map(card => ({...card, isFlipped: false, isDisabled: false})),
                isAllFlipCard: false
            });
        }, 5000);
    }, [isAllFlipCard]);

    useEffect(() => {
        const statusOpenCard = cards.map(card => ({...card, isFlipped: isStartCardFlip, isDisabled: false}));

        setGameTimeout(() => {
            changeGPDOnline<LostTwins_GamePlayData>({
                cards: statusOpenCard,
                isStartFlip: false
            });
        }, cardQty * timeVisibilityCard + 1000);

    }, [cardsData]);

    useEffect(() => {
        onCheckingSelectCards({gamePlayData, gameData, changeGPDOnline, speakTexts});
    }, [selectedCard]);

    useEffect(() => {
        if (cards.every(card => card.isHidden)) {
            initFinishPlaying();
        }
    }, [cards]);
};