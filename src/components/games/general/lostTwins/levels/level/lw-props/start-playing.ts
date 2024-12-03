import {StartPlayingCB} from '@custom-types';
import {LostTwinsGameL1T, LostTwins_GamePlayData, CardI} from '../type';

export const startPlaying:StartPlayingCB<LostTwinsGameL1T> = ({gameData, gameConfig}):LostTwins_GamePlayData => {
    const {cardsData} = gameData;
    const {studyStage} = gameConfig;

    const cards:CardI[] = cardsData.map(card => ({
        ...card,
        inSelect: false,
        isHidden: false,
        isDisabled: true,
        isCorrect: null,
        isFlipped: true,
        studyStage
    }));

    return {
        cards: cards,

        selectedCard: {first: null, seconds: null},
        secondsNowGame: 0,

        isStartFlip: true,
        isAllFlipCard: false
    };
};