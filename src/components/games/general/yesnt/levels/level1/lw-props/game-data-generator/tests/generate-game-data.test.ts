import {generateGameData} from '../generate-game-data';
import {staticEngData} from '@lib/game/static-data';
import {getWords, preloadSounds} from '@lib/game/utils';

const params = {
    gameConfig: {},
    gameSettings: {
        level: 1,
        course: 1,
        answersQty: 4,
    },
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds,
};

describe('yesnt generateGameData level1', () => {
    const gameData = generateGameData(params);

    test('not null', async () => {
        const {taskData} = await gameData;

        expect(taskData).toBeTruthy();
    });
});
