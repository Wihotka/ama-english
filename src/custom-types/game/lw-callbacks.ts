//типы к функциям коллбекам для levelWrapper
import {ReactNode} from 'react';
import {AnyGame} from '@custom-types';
import {GetWordsT} from '@lib/game/utils/get-words/types';
import {PreloadSounds} from '@lib/game/utils/sound/preload-sounds';

export type ProgressPercentCB<T extends AnyGame> = (p:T) => number;
export type StartPlayingCB<T extends AnyGame> = (p:{gameData:T['gameData'], gameConfig:T['gameConfig'], gameSettings:T['gameSettings']}) => T['gamePlayData'];
export type GenerateGDCB<T extends AnyGame> =
    (p:{
        gameConfig:T['gameConfig'],
        gameSettings:T['gameSettings'],
        langCode:string,
        staticEngData:StaticEngData,
        getWords:GetWordsT,
        preloadSounds:(sounds:PreloadSounds) => void
    }) => Promise<T['gameData']>;

export type StaticEngData = {
    difficultSounds:Array<string>;
    easySounds:Array<string>;
    alphabet:Array<string>;
    keyboard:Array<string>;
    disabledSoundsWithDividedWords:Array<string>;
};
export type TopPanelContentCb<T extends AnyGame> = (p:{gamePlayData:T['gamePlayData'], gameData:T['gameData']}) => ReactNode;

export enum StartModalIndicatorsT {
    rightAnswersQty = 'rightAnswersQty',
    gameTime = 'gameTime',
    maxErrors = 'maxErrors',
    collectItems = 'collectItems'
}

export type StartModalStarItem = {
    [key in StartModalIndicatorsT]?:number;
};

export type StartModalStarItemArrT = [keyof StartModalStarItem, number];

export type StartModalStars = Array<StartModalStarItem>;

export type StarsRequirementsCb<T extends AnyGame> = (p:{gameData:T['gameData'], gameConfig:T['gameConfig'], gameSettings:T['gameSettings']}) => StartModalStars;

export type FinModalIndicators = {
    rightAnswersQty?:string|number;
    pointsQty?:string|number;
    gameTime?:string;
    wrongAnswersQty?:string;
    // readingSyllablesSpeed?:number;
    // readingWordsSpeed?:number;
};

export type GetFinModalIndicators<T extends AnyGame> = (p:{gamePlayData:T['gamePlayData'] ,gameData:T['gameData'], gameConfig:T['gameConfig'], gameSettings:T['gameSettings']}) => FinModalIndicators;
