import {
    ColourfulPhonetics_GameData,
    ColourfulPhonetics_Picture,
} from '../../../../../type';
import {staticEngData} from '@lib/game/static-data';
import {getWords, preloadSounds} from '@lib/game/utils';
import {generateGameData} from '../generate-game-data';

const params = {
    gameConfig: {},
    gameSettings: {
        level: 1,
        course: 1,
        picture: ColourfulPhonetics_Picture.funnyCrocodile,
        complexity: 1,
    },
    langCode: 'ru',
    staticEngData,
    getWords,
    preloadSounds,
};

let gameData:ColourfulPhonetics_GameData;

beforeAll(async () => {
    gameData = await generateGameData(params);
});

describe('colourfulPhonetics generateGameData', () => {
    test('color palette has correct number of colors', () => {
        const {colorPalette, colorScheme} = gameData;

        expect(colorPalette.length).toEqual(colorScheme.length);
    });

    test('transcription positions arr has correct length', () => {
        const {colorPalette, transcriptionPos} = gameData;

        expect(transcriptionPos.length).toEqual(colorPalette.length);
    });

    test('every transcription has its position', () => {
        const {transcriptionPos, colorPalette} = gameData;
        const transcriptionsArray = transcriptionPos.map(({text}) => text);

        expect(
            colorPalette.every(({transcription}) =>
                transcriptionsArray.includes(transcription)
            )
        ).toBeTruthy();
    });
});
