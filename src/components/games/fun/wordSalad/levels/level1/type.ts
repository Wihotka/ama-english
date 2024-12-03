import {
    WordSalad_GamePlayData, WordSalad_ImagesPaths,
} from '../../type';

export type ContentP = {
    gamePlayData:WordSalad_GamePlayData;
    imagesPaths:WordSalad_ImagesPaths | null;
    handleInput:Function;
    handleClear:Function;
    handleEnter:Function;
    handleRenew:Function;
};
