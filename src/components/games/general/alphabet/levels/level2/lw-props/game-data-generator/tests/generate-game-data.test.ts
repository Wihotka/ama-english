import {getWords, preloadSounds} from '@lib/game/utils';

import {generateGameData} from '../generate-game-data';
import {staticEngData} from '@lib/game/static-data';

const lettersQty = 4;
const letters = Math.random() > 0.5 ? 'capital' : 'small';

const params = {
    gameConfig: {birdsQty: 5},
    gameSettings: {
        level: 2,
        mode: 'easy',
        letters,
        speedInSeconds: '5',
        lettersQty,
    },
    staticEngData,
    langCode: 'ru',
    getWords: getWords,
    preloadSounds
};

describe('generateGameData lvl2', () => {
    const gameData = generateGameData(params);

    test('letters quantity', async () => {
        const {data} = await gameData;

        expect(data.length).toEqual(27);
    });
    test('correct fields', async () => {
        const {data} = await gameData;

        expect(data.filter(({isCorrect}) => isCorrect).every(({wrongLetter}) => wrongLetter === null)).toBeTruthy();
    });
    test('wrong fields', async () => {
        const {data} = await gameData;

        expect(data.filter(({isCorrect}) => !isCorrect).every(({wrongLetter}) => wrongLetter !== null)).toBeTruthy();
    });
});
