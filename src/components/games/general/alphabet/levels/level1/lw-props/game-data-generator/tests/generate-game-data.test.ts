import {getWords, preloadSounds} from '@lib/game/utils';

import {generateGameData} from '../generate-game-data';
import {staticEngData} from '@lib/game/static-data';

const lettersQty = 4;
let letters:string;
const randomValue = Math.random();

if (randomValue > 0.66) {
    letters = 'capital';
} else if (randomValue > 0.33) {
    letters = 'small';
} else letters = 'random';

const params = {
    gameConfig: {birdsQty: 5},
    gameSettings: {
        level: 1,
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

describe('generateGameData lvl1', () => {
    const gameData = generateGameData(params);

    test('alphabet match', async () => {
        const {data, alphabet} = await gameData;

        expect([...data].sort((a, b) => a.index - b.index).map(({letter}) => letter)).toEqual(alphabet);
    });
    test('register match', async () => {
        const {data} = await gameData;

        if (letters === 'random') {
            expect(data.filter(({letter}) => letter === letter.toLowerCase()).length).toBe(13);
        } else {
            expect(data.every(({letter}) => letter === ((letters === 'small')
                ? letter.toLowerCase()
                : letter.toUpperCase()))).toBeTruthy();
        }
    });
});
