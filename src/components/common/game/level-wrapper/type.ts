import {
    AnyGame, GenerateGDCB, GetFinModalIndicators,
    ProgressPercentCB, StarsRequirementsCb,
    StartPlayingCB,
    TopPanelContentCb
} from '@custom-types';

// всюди де any треба якось прокинути тип гри
export type LevelWrapperT = {
    background?:string; // Если нужно какой-то динамический фон `url(${require(`_assets/img/courses/${courseName}/games/${gameName}/bg.png`)})`; *
    getTopPanelContent?:TopPanelContentCb<AnyGame>;
    getFinishModalIndicators?:GetFinModalIndicators<AnyGame>;
    generateGameData:GenerateGDCB<AnyGame>; // эта функция принимает GameParams и должна возвращать gameData для конкретной игры
    startPlaying:StartPlayingCB<AnyGame>;
    calcProgressPercent:ProgressPercentCB<AnyGame>;
    getStarsRequirements?:StarsRequirementsCb<AnyGame>; // эта функция должна возвращать колбек, который возвращает массив информаци о получении звезд
};