import {WordsThemes} from '@custom-types/game';
import {staticEngData} from '@lib/game/static-data';
import {getWords, preloadSounds} from '@lib/game/utils';
import {GuessWhat_GameConfig, GuessWhat_GameData} from '../../../../../type';
import {generateGameData} from '../generate-game-data';

const gameConfig:GuessWhat_GameConfig = {
    wordsQtyResolver: {
        1: 4,
        2: 6,
        3: 8,
    },
    maxMistakesResolver: {
        1: 2,
        2: 2,
        3: 3,
    },
    descriptionResolver: {
        1: 1,
        2: 2,
    },
};

const params = {
    gameConfig,
    gameSettings: {
        level: 1,
        course: 1,
        answersQty: 10,
        complexity: 1,
        theme: WordsThemes.animals,
        hint: 1,
    },
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds,
};

describe('Generate gameData guessWhat', () => {
    let gameData:GuessWhat_GameData;

    beforeAll(async () => {
        gameData = await generateGameData(params);
    });

    test('every task word has description and soundUrl', () => {
        const {taskData} = gameData;

        taskData.every(({taskWord}) => {
            const {description, soundUrl} = taskWord;

            return description && soundUrl;
        });
    });

    test('every task answer has image and word', () => {
        const {taskData} = gameData;

        taskData.every(({answers}) =>
            answers.every(({img, word}) => img && word)
        );
    });

    test('every task answers have correct task word', () => {
        const {taskData} = gameData;

        taskData.every(({answers, taskWord}) =>
            answers.some(
                ({word, img}) =>
                    word === taskWord.word && img === taskWord.img
            )
        );
    });
});
