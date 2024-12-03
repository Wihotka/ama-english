import {getWords, preloadSounds} from '@lib/game/utils';

import {generateGameData} from '../generate-game-data';
import {staticEngData} from '@lib/game/static-data';

const params = {
    gameConfig: {},
    gameSettings: {
        gameTime: 210,
        level: 1
    },
    staticEngData,
    langCode: 'ru',
    getWords: getWords,
    preloadSounds
};

describe('generateGameData', () => {
    const data = generateGameData(params);

    test('letters quantity', async () => {
        const {letters} = await data;

        expect(letters.length).toEqual(16);
    });
    test('words length', async () => {
        const {words} = await data;

        expect(words.every(word => word.length > 2)).toBeTruthy();
    });
});
