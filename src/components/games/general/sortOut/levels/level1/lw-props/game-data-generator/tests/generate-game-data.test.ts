import {getWords, preloadSounds} from '@lib/game/utils';
import {staticEngData} from '@lib/game/static-data';
import {generateGameData} from '../generate-game-data';
import {SortOut_GameData} from '../../../../../type';

const params = {
    gameConfig: {},
    gameSettings: {
        level: 1,
        fieldSize: '4x4' as const,
        complexity: 3,
        answersQty: 6,
    },
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds
};

let gameData:SortOut_GameData;

beforeAll(async () => {
    gameData = await generateGameData(params);
});

describe('sortOut generateGameData level1', () => {
    const {gameSettings} = params;
    const {answersQty} = gameSettings;
    
    test('gameFieldData has correct length' , () => {
        const {gameFieldData} = gameData;
        
        expect(gameFieldData.length === answersQty).toBeTruthy();
    });

    test('gameTasks have correct length' , () => {
        const {gameTasks} = gameData;

        expect(gameTasks.length === answersQty).toBeTruthy();
    });
});
