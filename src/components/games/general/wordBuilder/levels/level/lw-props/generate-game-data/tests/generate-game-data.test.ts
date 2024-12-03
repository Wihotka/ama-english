import {isArray, isObject} from 'lodash';

import {generateGameData} from '../generate-game-data';
import {staticEngData} from '@lib/game/static-data';
import {getWords, preloadSounds} from '@lib/game/utils';

import {WordsThemes} from '@custom-types';

const params = {
    gameConfig: {
        levelConfigs: {
            1: {mixedPuzzleArrayLongerByFL: 0},
            2: {mixedPuzzleArrayLongerByFL: 40},
            3: {mixedPuzzleArrayLongerByFL: 40}
        }
    },
    gameSettings: {
        level: 1,
        hint: 1,
        course: 1,
        theme: WordsThemes.acquaintanceNumbers,
        answersQty: 4
    },
    langCode: 'ru',
    staticEngData,
    getWords: getWords,
    preloadSounds: preloadSounds
};

describe('generateGameData', () => {
    const gameData = generateGameData(params);

    test('typecasting of the hint value', async () => {
        const {isHintHidden} = await gameData;

        expect(isHintHidden).toBe(false);
    });

    test('fields of the words are not empty', async () => {
        const testQty = 100;

        for (let i = 0; i < testQty; i++) {
            const {words, answersQty} = await gameData;

            words.map(word => {
                expect(isObject(word)).toBeTruthy();

                expect((Object.keys(word)).every(el => el)).not.toBeNull();
                expect((Object.keys(word)).every(el => el)).not.toBeUndefined();

                expect((Object.values(word)).every(el => el)).not.toBeNull();
                expect((Object.values(word)).every(el => el)).not.toBeUndefined();
            });

            expect(words.length).toBeGreaterThan(answersQty - 1);
        }
    });

    test('alphabet is array and saved itself length', async () => {
        const {alphabet} = await gameData;

        expect(isArray(alphabet)).toBeTruthy();
        expect(alphabet.length === staticEngData.alphabet.length).toBeTruthy();
    });

    test('answer quantity in the range', async () => {
        const {answersQty} = await gameData;

        expect(answersQty === 4 ).toBe(true);
    });
});
