import {GenerateGDCB} from '@custom-types/game';
import {random, sampleSize, shuffle} from 'lodash';
import {
    ColourfulPhoneticsGameT,
    ColourfulPhonetics_Marker,
} from '../../../../type';
import {pictureData} from './pictureData';

export const generateGameData:GenerateGDCB<ColourfulPhoneticsGameT> = async ({
    gameSettings,
    staticEngData,
    preloadSounds,
}) => {
    const {level, picture, complexity} = gameSettings;
    const {easySounds, difficultSounds} = staticEngData;
    const {
        colorSchemes,
        correctColors,
        transcriptionPositions,
        initialColors,
        colorAreas,
        totalAnswers
    } = pictureData[picture][level];
    const randomNumber = random(colorSchemes.length - 1);
    const colors = colorSchemes[randomNumber];
    const initColors = initialColors[randomNumber];
    const gameplaySounds
        = complexity === 1
            ? easySounds
            : complexity === 2
                ? difficultSounds
                : [...easySounds, ...difficultSounds];
    const randomSounds = sampleSize(gameplaySounds, colors.length);

    preloadSounds(randomSounds.map((s) => ({text: s})));

    const colorPalette:ColourfulPhonetics_Marker[] = colors.map(
        (color, i) => ({
            color,
            transcription: randomSounds[i],
        })
    );

    return {
        colorPalette: shuffle(colorPalette),
        transcriptionPos: transcriptionPositions.map((posArr, i) => ({
            pos: posArr,
            text: randomSounds[i],
        })),
        picture,
        colorScheme: colors,
        correctColors,
        initialColors: initColors,
        colorAreas,
        totalAnswers
    };
};
