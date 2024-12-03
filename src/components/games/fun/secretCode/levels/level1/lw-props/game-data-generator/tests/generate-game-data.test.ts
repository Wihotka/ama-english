import {SecretCode_GameData} from '../../../../../type';
import {staticEngData} from '@lib/game/static-data';
import {getWords, preloadSounds} from '@lib/game/utils';
import {generateGameData} from '../generate-game-data';

const params = {
    gameConfig: {},
    gameSettings: {
        level: 1,
        complexity: 1,
        mode: 'easy',
    },
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds,
};

let gameData:SecretCode_GameData;

beforeAll(async () => {
    gameData = await generateGameData(params);
});

describe('secretCode generateGameData', () => {
    test('words have correct task', () => {
        const {words} = gameData;

        expect(
            words.every(({word, task}) => word.length === task.length)
        ).toBeTruthy();
    });

    test('word tasks have correct values', () => {
        const {alphabet, words} = gameData;

        expect(
            words.every(({word, task}) =>
                task.every(({value}, i) => alphabet[value].letter === word[i])
            )
        ).toBeTruthy();
    });
});

describe('secretCode generateGameData level1', () => {
    test('word tasks has correct color values', () => {
        const {words, alphabet} = gameData;

        expect(
            words.every(({task}) =>
                task.every(
                    ({value, color}) => color === alphabet[value].color
                )
            )
        ).toBeTruthy();
    });
});
