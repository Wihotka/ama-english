import {staticEngData} from '@lib/game/static-data';
import {getWords} from '@lib/game/utils';
import {ThemeFruitSmoothie} from '@custom-types';
import {generateGameData} from './../generate-game-data';
import {dataToBe} from './data-test';

const params = {
    gameConfig: {
        finalHeightPosition: {min: 5, max: 10},
        rangeCoordinatesCentralPoint: {
            leftElements: {
                X: {min: 70, max: 80},
                Y: {min: 200, max: 250}
            },

            rightElements: {
                X: {min: 20, max: 30},
                Y: {min: 200, max: 250}
            }

        },
        flyDelay: [0.1, 0.2, 0.3],
    },
    gameSettings: {
        level: 1,
        course: 1,
        complexity: 3,
        answersQty: 10,
        theme: ThemeFruitSmoothie.toBe,
        speedInSeconds: '10',
    },
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds: jest.fn()
};

describe('Generate game data FruitSmoothie test', () => {

    test('Checking the number of rounds of the game', async () => {
        global.fetch = ():any => Promise.resolve(dataToBe);
        const {variantArray, timeFly, maxAttemptsQty} = await generateGameData(params);

        expect(variantArray).toHaveLength(10);
        expect(timeFly).toBe(10);
        expect(maxAttemptsQty).toBe(1);
    });
});