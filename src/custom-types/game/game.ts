import {FC} from 'react';
import {SettingsTemplate as SettingsTemplateT} from '@custom-types/game/settings';
import {LevelWrapperT} from '@components/common/game/level-wrapper/type';
import {SpeakTexts} from '@lib/game/utils/sound/speak-texts';

export type GameSettings = {
    level:number;
    mode?:string;
};

export type AllGameSettings = GameSettings & {
    [key:string]:number|string;
};

export type DefaultGame = Game<GameConfig, SettingsTemplateT>;
export type AnyGame = Game<any, any, any, any>;

export type ReduxGame = EmptyGame<{}, {}> | Game<GameConfig, SettingsTemplateT>;

export interface EmptyGame<GC extends PartialGC, STT extends Partial<SettingsTemplateT>, GD = {}, BPD = {}> 
    extends Omit<Game<GameConfig, SettingsTemplateT, GD, BPD>, 'gameConfig'| 'gameSettings'>  {
    gameConfig:GC;
    gameSettings:STT
}

export type Game<GC extends GameConfig, STT extends SettingsTemplateT, GameData = {}, GamePlayData = {}> = {
    status:{
        isRunGame:boolean;
        isPlaying:boolean;
        isFinishPlaying:boolean;
        isDisabledStartBtn:boolean;
    };
    gameData:GameData;
    gamePlayData:GamePlayData;
    gameTime:{
        start:number;
        end:number;
    };
    gameSettings:GameSettingsConstructT<STT>;
    gameConfig:GC;
};

export type GameParams = Pick<Game<GameConfig, SettingsTemplateT>, 'gameConfig' | 'gameSettings'>;
export type GameStatus = DefaultGame['status'];

export type GameImagesPaths<T = any> = Array<{
    name:keyof T;
    path:string;
    type:'png'|'svg'|'jpg';
    subObj?:string;
}>;

export enum GameMode {
    homework = 'homework',
    free = 'free',
    classwork = 'classwork'
}

export type GameConfig<T = {}> = T& {
    gameName:string;
    studyStage:number;
    section:string;
    levelsNames?:Array<string>; // масив імен рівняв, які відображаються в модалках наприклад: [, 'free', 'marathon', 'fittings', 'faultless']
    displayedSettings?:{ // масив імен налаштувань, які відображаються в початковій модалці. може бути об"єктом, якщо на різних рівнях треба різні масиви
        [key:number]:Array<string>;
    }|Array<string>;
    levelConfigs?:{ // унікальні конфіги для різних рівнів
        [key:number]:any;
    };
    levelsWithHiddenTimer?:Array<number>;
    bgColor?:{
        [key:number]:string;
    }|string;
    gameImages?:GameImagesPaths;
    hometaskID?:number;
    gameMode:GameMode;
    isHideLevelInModals?:boolean;
    isCenterContainer?:boolean;
    isHomework:boolean;
    valuesThresholds:Array<number> | {
        [key:number]:Array<number>;
    }; // Уникальные значения для прохождения игры [70, 80, 90]
    needHideProgressBar?:boolean; // если нужно скрыть прогресс бар
    maximumTries?:number; //уникальный конфиг для количества попыток
};

export type PartialGC = Partial<GameConfig>;

export type GameInput = {
    settings:AllGameSettings;
    hometaskID?:number;
    gameName:string;
    section:string;
    studyStage:number;
    gameMode:GameMode
};

export type InitialGameConfig = GameConfigConstructT<PartialGC, SettingsTemplateT>;
export type InitializedGameConfig = GameConfigConstructT<GameConfig, SettingsTemplateT>;

export type GameLevels<T = InitialGameProps<any, any, any, any>> = {
    [key:string]:(p:T) => JSX.Element;
};

export type InitialGameProps<
    GC extends PartialGC,
    SettingsTemplate extends SettingsTemplateT,
    GameData extends {[key:string]:any},
    GamePlayData extends {[key:string]:any}> = {
    // @ts-ignore
    game:Game<GC, SettingsTemplate, GameData, GamePlayData>;
    isInitializedData:boolean;
    isInitializedGPData:boolean;
    user?:{
        isHost:boolean;
    };
    LevelWrapper:FC<LevelWrapperT>;
    initFinishPlaying:() => () => void;
    changeGPD:<T>(gpData:Partial<T>) => (gpData:Partial<T>) => void;
    changeGPDOnline:<T>(gpData:Partial<T>) => (gpData:Partial<T>) => void;
    speakTexts:(props:SpeakTexts) => void;
};

export type GameSettingsConstructT<SettingsTemplate extends SettingsTemplateT> = {
    [key in keyof SettingsTemplate]:SettingsTemplate[key]['valueType'];
};

export type GameConfigConstructT<GameConfig extends PartialGC, SettingsTemplate extends SettingsTemplateT> = {
    gameConfig:GameConfig;
    settingsTemplate:{
        [key in keyof SettingsTemplate]:Omit<SettingsTemplate[key], 'valueType'>
    };
};

