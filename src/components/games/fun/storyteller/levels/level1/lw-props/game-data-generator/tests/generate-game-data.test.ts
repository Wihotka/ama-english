import {generateGameData} from '../generate-game-data';
import {staticEngData} from '@lib/game/static-data';
import {getWords, preloadSounds} from '@lib/game/utils';

const params = {
    gameConfig: {},
    gameSettings: {
        level: 1,
        storyType: 'horror' as const,
    },
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds,
};

describe('storyteller generateGameData', () => {
    const gameData = generateGameData(params);

    test('gameQuestions have correct number of answers and a question', async () => {
        const {gameQuestions} = await gameData;

        expect(
            gameQuestions.every((q) => q.questionText && q.answers.length === 6)
        ).toBeTruthy();
    });
});
