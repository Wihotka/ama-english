import {ColourfulPhonetics_Marker} from '../../type';

export type PictureP = {
    colorData:string[];
    initialColors:string[];
    updateFillColors:UpdateFillColorsT;
};

export type ChangeCurrectColorT = (newColor:string) => void;

export type UpdateFillColorsT = (index:number) => void;

export type PlaySoundT = (transcription:string, color:string, index:number) => void;

export type ColorPaletteP = {
    colorPalette:ColourfulPhonetics_Marker[];
    currentColor:string | null;
    isSoundPlaying:boolean;
    pressedBtnIndex:number;
    failedColor:string | null;
    changeCurrentColor:ChangeCurrectColorT;
    playSound:PlaySoundT;
};

export type MarkerItemP = {
    color:string;
    currentColor:string | null;
    failedColor:string | null;
    changeCurrentColor:ChangeCurrectColorT;
};
