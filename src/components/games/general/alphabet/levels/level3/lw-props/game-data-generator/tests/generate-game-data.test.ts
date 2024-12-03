import {getWords, preloadSounds} from '@lib/game/utils';

import {generateGameData} from '../generate-game-data';
import {staticEngData} from '@lib/game/static-data';

const letters = Math.random() > 0.5 ? 'capital' : 'small';

const getParams = (lettersQty:number) => ({
    gameConfig: {birdsQty: 5},
    gameSettings: {
        level: 3,
        mode: 'easy',
        letters,
        speedInSeconds: '5',
        lettersQty,
    },
    staticEngData,
    langCode: 'ru',
    getWords: getWords,
    preloadSounds
});

describe('generateGameData lvl3', () => {
    const gameData = (lettersQty:number) => generateGameData(getParams(lettersQty));

    test('groups quantity', async () => {
        const {data} = await gameData(4);

        expect(data.length).toBe(3);
    });
    test('unique indexes', async () => {
        const {data} = await gameData(4);

        // eslint-disable-next-line max-len
        expect(data.every(group => group.every(({index}) => group.filter(elem => elem.index === index).length === 1))).toBeTruthy();
    });

    for (let i = 4; i <= 6; i++) {
        test(`${i} letters setting`, async () => {
            const {data} = await gameData(i);

            expect(data.every(group => group.length === i)).toBeTruthy();
        });
    }
});
