import {SpeakTexts} from '@lib/game/utils/sound/speak-texts';
import {GetWordsT} from '@lib/game/utils/get-words/types';
import {StaticEngData} from '@custom-types/game/lw-callbacks';

// const

export enum ArenaModes {
    online = 'online',
    offline = 'offline'
}

export type ArenaPlayersInfo = {
    player1?:{name:string, avatar:string},
    player2?:{name:string, avatar:string}
};

// func

export type GenerateAGD<T extends AnyArenaGame> =
    (props:{
        gameSettings:T['gameSettings'],
        staticEngData:StaticEngData,
        getWords:GetWordsT
    }) => Promise<T['gameData']>;

export type GenerateAGPD<T extends AnyArenaGame> = (props:{gameData:T['gameData']}) => T['gamePlayData'];

// common

export type AnyArenaGame = ArenaGame<any, any, any>;
export type ArenaGame<AGS extends ArenaGameSettings, GameData = {}, GamePlayData = {}> = {
    status:{
        isRunGame:boolean;
        isPlaying:boolean;
        isFinishPlaying:boolean;
        isDisabledStartBtn:boolean;
    };
    gameData:GameData;
    gamePlayData:GamePlayData;
    gameSettings:AGS;
    gameConfig:ArenaGameConfig;
};

export type ArenaPartialGC = Partial<ArenaGameConfig>;
export type ArenaInitialGameConfig = ArenaGameConfigConstructT<ArenaPartialGC, ArenaGameSettings>;

export type ArenaGameConfigConstructT<AGC extends ArenaPartialGC, AGS extends ArenaGameSettings> = {
    gameConfig:AGC;
    gameSettings:{
        [key in keyof AGS]:any
    };
};

export type ArenaGameConfig = {
    section:'arena';
    gameName:string;
    timer?:{online:number|undefined; offline:number|undefined;};
    timerDelay?:number;
    stepTime?:number;
    roundQty?:number;
    modes?:Array<ArenaModes>;
};

export type ArenaGameSettings<T = {[key:string]:any}> = {
    [key in keyof T]:T[key]
};

export type InitialArenaGameProps<
    AGS extends ArenaGameSettings,
    GameData extends {[key:string]:any},
    GamePlayData extends {[key:string]:any}> = {
    // @ts-ignore
    game:ArenaGame<AGS, GameData, GamePlayData, boolean>;
    initFinishPlaying:() => () => void;
    changeGPD:<T>(gpData:Partial<T>) => (gpData:Partial<T>) => void;
    changeGPDOnline:<T>(gpData:Partial<T>) => (gpData:Partial<T>) => void;
    speakTexts:(props:SpeakTexts) => void;
};