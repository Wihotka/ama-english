import {staticEngData} from '@lib/game/static-data';
import {getWords, preloadSounds} from '@lib/game/utils';
import {generateGameData} from '../generate-game-data';

const params = {
    gameConfig: {},
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds,
};

describe('makeYourChoice generate game data level 1', () => {
    test('every word has image', async () => {
        const {wordsData} = await generateGameData({
            ...params,
            gameSettings: {
                level: 1,
                gameTime: 60,
            },
        });

        expect(wordsData.every(({img}) => Boolean(img))).toBeTruthy();
    });
});
