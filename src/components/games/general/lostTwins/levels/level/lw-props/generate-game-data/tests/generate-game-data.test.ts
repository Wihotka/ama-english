import {WordsThemes} from '@custom-types';
import {getWords} from '@lib/game/utils';
import {preloadSounds} from '@lib/game/utils/sound/preload-sounds';

import {generateGameData} from '../generate-game-data';
import {staticEngData} from '@lib/game/static-data';

const params = {
    gameSettings: {
        level: 1,
        hint: 1,
        fieldSize: '5x4',
        mode: 'easy',
        course: 1,
        theme: WordsThemes.animals
    },
    langCode: 'ru',
    staticEngData,
    preloadSounds,
    gameConfig: {},
    getWords
};

describe('Generate gameData Lost Twins for level 1', () => {

    test('Checking time visibility card', async () => {
        const {timeVisibilityCard} = await generateGameData(params);

        expect(timeVisibilityCard).not.toBeNaN();
        expect(Number.isInteger(timeVisibilityCard)).toBe(false);
    });

    test('Cards qty', async () => {
        const {cardsData, cardQty} = await generateGameData(params);

        expect(cardsData).toHaveLength(cardQty);

    });

    test('Cards qty', async () => {
        const {cardsData, cardQty} = await generateGameData(params);

        expect(cardsData).toHaveLength(cardQty);

    });

});