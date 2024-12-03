import {getWords, preloadSounds} from '@lib/game/utils';
import {staticEngData} from '@lib/game/static-data';

import {generateGameData} from '../generate-game-data';

const answersQty = 4;

const params = {
    gameConfig: {
        cardsMaxQty: 6
    },
    gameSettings: {
        level: 1,
        letters: 'capital',
        answersQty
    },
    langCode: 'ru',
    staticEngData,
    getWords: getWords,
    preloadSounds
};

describe('generateGameData lvl1', () => {
    const gameData = generateGameData(params);

    test('cards quantity', async () => {
        const {data} = await gameData;

        expect(data.length).toEqual(answersQty);
    });
    test('letters height > 0', async () => {
        const {data} = await gameData;

        expect(data.every(letter => letter?.height > 0)).toBeTruthy();
    });
    test('letters are low', async () => {
        const {data} = await gameData;

        expect(data.every(({letter}) => letter === letter.toLowerCase())).toBeTruthy();
    });
    test('coincidence of parts quantity', async () => {
        const {data} = await gameData;

        // eslint-disable-next-line max-len
        data.every(({parts, letterPaths}) => expect(parts.filter(({index}) => index !== null).length).toEqual(letterPaths.length));
    });
    test('existence of wrong parts', async () => {
        const {data} = await gameData;

        data.every(({parts}) => expect(parts.filter(({index}) => index === null).length).toBeGreaterThan(0));
    });
});
