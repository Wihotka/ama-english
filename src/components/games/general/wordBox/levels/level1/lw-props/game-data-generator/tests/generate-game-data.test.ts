import {getWords, preloadSounds} from '@lib/game/utils';
import {staticEngData} from '@lib/game/static-data';

import {WordsThemes} from '@custom-types';
import {generateGameData} from '../generate-game-data';

const getParams = ({theme, wordsQty}:{ theme:WordsThemes | '', wordsQty:number }) => ({
    gameConfig: {},
    gameSettings: {
        level: 1,
        course: 1,
        theme,
        wordsQty,
        complexity: 1
    },
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds
});

describe('generateGameData', () => {
    ['acquaintanceNumbers', ''].forEach(theme => {
        for (let wordsQty = 4; wordsQty < 9; wordsQty++) {
            const gameData = generateGameData(getParams({theme: theme as WordsThemes | '', wordsQty}));

            test('field size', async () => {
                const {fields, size} = await gameData;

                expect(fields.length).toEqual(size * size);
            });
            test('words qty', async () => {
                const {placedWords} = await gameData;

                expect(placedWords.length).toEqual(wordsQty);
            });
            test('max length word', async () => {
                const {placedWords, size} = await gameData;

                expect(placedWords.every(({word}) => word.length < size)).toBeTruthy();
            });
            test('available', async () => {
                const {directions} = await gameData;

                expect(directions.length).toBeGreaterThan(1);
            });
        }
    });
});
