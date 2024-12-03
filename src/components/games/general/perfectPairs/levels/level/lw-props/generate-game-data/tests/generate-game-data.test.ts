import {WordsThemes} from '@custom-types';
import {isEqual} from 'lodash';

import {getWords, preloadSounds} from '@lib/game/utils';
import {staticEngData} from '@lib/game/static-data';
import {generateGameData} from '../generate-game-data';

import {Variant} from './../../../type';

const params = {
    gameConfig: {},
    gameSettings: {
        level: 1,
        course: 1,
        complexity: 3,
        answersQty: 10,
        theme: WordsThemes.gamesHobbies
    },
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds
};

describe('Generate gameData Perfect Pairs, for level 1', () => {
    const {gameSettings} = params;
    const {answersQty, level: levelSetting} = gameSettings;
    const testQty = 100;
    const maxComplexity = 2;

    test('Checking the number of rounds of the game', async () => {
        const {arrayOptions} = await generateGameData(params);

        expect(arrayOptions).toHaveLength(answersQty);
    });

    test('Checking the transmitted level', async () => {
        const {level} = await generateGameData(params);

        expect(level === levelSetting).toBe(true);
    });

    test('Check variants array', async () => {
        for (let i = 1; i <= testQty; i++) {
            const {arrayOptions} = await generateGameData(params);
            const wordItemObj:Variant = {
                word: '',
                transcription: '',
                isCorrect: false,
                imageUrls: [],
                soundUrl: ''
            };

            arrayOptions.map(variantArray => {
                expect(variantArray).toHaveLength(maxComplexity);
                expect(variantArray).toHaveLength([...new Set(variantArray)].length);
                //Проверка на один правильный ответ
                expect(variantArray.filter(variant => variant.isCorrect)).toHaveLength(1);
                //Проверка на неправильный ответ
                expect(variantArray.filter(variant => !variant.isCorrect)).toHaveLength(1);

                variantArray.map(variant => {
                    expect(variant).not.toBeNull();
                    expect(isEqual(
                        Object.keys(wordItemObj).sort(),
                        Object.keys(variant).sort()))
                        .toBe(true);
                });
            });
        }
    });
});