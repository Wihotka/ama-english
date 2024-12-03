import {isArray, isObject, flatten} from 'lodash';

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
        course: 1,
        theme: WordsThemes.acquaintanceNumbers,
        speed: 1,
        feathersQty: 5,
        answersQty: 4
    },
    langCode: 'ru',
    staticEngData,
    getWords: getWords,
    preloadSounds: preloadSounds
};

describe('generateGameData', () => {
    const gameDataL1 = generateGameData(params);

    params.gameSettings.level = 2;
    const gameDataL2 = generateGameData(params);

    params.gameSettings.level = 3;
    const gameDataL3 = generateGameData(params);

    const gameDataArray = [gameDataL1, gameDataL2, gameDataL3];

    test('each feather has a universal color', async () => {
        for (let i = 0; i < gameDataArray.length; i++) {
            const levelFetchData = await gameDataArray[i];

            console.log(levelFetchData);

            const colorsCount = flatten(levelFetchData.colorOrder).length;
            const feathersCount = params.gameSettings.answersQty * params.gameSettings.feathersQty;

            expect(
                isArray(levelFetchData.colorOrder) &&
                levelFetchData.colorOrder.every((colours:Array<number>) => isArray(colours))
            ).toBeTruthy();
            expect(colorsCount === feathersCount).toBeTruthy();
        }
    });

    test('first and third levels have words that are equal arrays in array with full object', async () => {
        const testQty = 1;

        const checkWords = (words:Array<any>) => {
            words.map(word => {
                expect(isObject(word)).toBeTruthy();

                expect((Object.keys(word)).every(el => el)).not.toBeNull();
                expect((Object.keys(word)).every(el => el)).not.toBeUndefined();

                expect((Object.values(word)).every(el => el)).not.toBeNull();
                expect((Object.values(word)).every(el => el)).not.toBeUndefined();
            });
        };

        for (let i = 0; i < gameDataArray.length; i++) {
            if (i !== 1) {
                for (let t = 0; t < testQty; t++) {
                    const {words} = await gameDataArray[i];

                    words.map((subWords:any) => checkWords(subWords));
                    expect(words.length).toBeGreaterThan(params.gameSettings.answersQty - 1);
                }
            }
        }
    });
});