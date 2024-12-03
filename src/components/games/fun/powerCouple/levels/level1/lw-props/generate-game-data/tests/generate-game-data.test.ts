import {groupBy} from 'lodash';
import {staticEngData} from '@lib/game/static-data';
import {getWords} from '@lib/game/utils';
import {generateGameData} from './../generate-game-data';
import {dataHomographs, dataHomophones} from './data-test';

import {ThemePowerCouple} from '@custom-types';

const params = {
    gameConfig: {},
    gameSettings: {
        level: 1,
        theme: ThemePowerCouple.homographs,
        map: 7,

    },
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds: jest.fn()
};

describe('Generate gameData Power Couple', () => {
    test('Cards tests theme Homographs', async () => {
        for (let i = 0; i <= 100; i++) {
            global.fetch = ():any => Promise.resolve(dataHomographs);
            const {cards} = await generateGameData(params);

            const groupCard = Object.values(groupBy(cards, (card) => card.name));

            expect(groupCard.every(group => group.length % 2 === 0)).toBe(true);
            cards.forEach(card => expect(card.id).not.toBeNull());
        }
    });

    test('Cards tests theme Homophones', async () => {
        for (let i = 0; i <= 100; i++) {
            global.fetch = ():any => Promise.resolve(dataHomophones);
            const {cards} = await generateGameData(params);

            const groupCard = Object.values(groupBy(cards, (card) => card.name));

            expect(groupCard.every(group => group.length % 2 === 0)).toBe(true);
            cards.forEach(card => expect(card.id).not.toBeNull());
        }
    });
});