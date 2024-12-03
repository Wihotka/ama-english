import {dataMockL1} from './data-test';
import {ThemeTimeline} from '@custom-types';
import {staticEngData} from '@lib/game/static-data';

import {getWords, preloadSounds} from '@lib/game/utils';

import {generateGameData} from '../generate-game-data';

const params = {
    gameConfig: {},
    gameSettings: {
        level: 1,
        course: 1,
        complexity: 3,
        answersQty: 10,
        theme: ThemeTimeline.presentSimple
    },
    langCode: 'ru',
    staticEngData,
    getWords: getWords,
    preloadSounds: preloadSounds
};

describe('Generate gameData Perfect Pairs, for level 1', () => {
    const {gameSettings} = params;
    const {answersQty, level: levelSetting} = gameSettings;

    global.fetch = ():any => Promise.resolve(dataMockL1);

    test('Checking the number of rounds of the game', async () => {

        await generateGameData(params).then((data) => {
            expect(data.answersQty === answersQty).toBe(true);
        });
    });

    test('Checking the transmitted level', async () =>
        await generateGameData(params).then((data) => {
            expect(data.level === levelSetting).toBe(true);
        })
    );
});