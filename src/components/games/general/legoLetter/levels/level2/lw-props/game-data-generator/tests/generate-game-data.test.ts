import {getWords, preloadSounds} from '@lib/game/utils';

import {generateGameData} from '../generate-game-data';
import {staticEngData} from '@lib/game/static-data';

const answersQty = 4;

const params = {
    gameConfig: {
        cardsMaxQty: 6
    },
    gameSettings: {
        level: 2,
        answersQty,
        letters: 'capital'
    },
    langCode: 'ru',
    staticEngData,
    getWords: getWords,
    preloadSounds
};

describe('generateGameData lvl2', () => {
    const gameData = generateGameData(params);

    test('examples quantity', async () => {
        const {data} = await gameData;

        expect(data.length).toEqual(answersQty);
    });
    test('letters height > 0', async () => {
        const {data} = await gameData;

        expect(data.every(({height, cards}) => height > 0 && cards.every(({height}) => height > 0))).toBeTruthy();
    });
    test('cards quantity', async () => {
        const {data} = await gameData;

        expect(data.every(({cards}) => cards.length === 3)).toBeTruthy();
    });
    test('one correct answer', async () => {
        const {data} = await gameData;

        expect(data.every(({cards}) => cards.filter(card => card.isCorrect).length === 1)).toBeTruthy();
    });
});
