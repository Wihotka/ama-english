export enum GameTags {
    'vocabulary' = 'vocabulary',
    'phonetics' = 'phonetics',
    'speaking' = 'speaking',
    'grammar' = 'grammar',
    'listening' = 'listening',
    'reading' = 'reading',
}

export type GamesSection = 'general'|'fun'|'arena';

export type GameInfo = {
    name:string;
    tags:Array<GameTags>;
    enablesStudyStage:Array<number>;
    disabled?:boolean;
};

export type GeneralGamesInfo = Array<GameInfo>;

export type FunGame = Omit<GameInfo, 'tags'|'enablesStudyStage'> & {
    tags?:Array<GameTags>;
    enablesStudyStage?:Array<number>;
};

export type FunGamesInfo = Array<FunGame>;

// todo пока так
export type ArenaGamesInfo = FunGamesInfo;