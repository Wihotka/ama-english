import {InitialGameProps, ThemePowerCouple} from '@custom-types';
import {PowerCouple_GameConfig, PowerCouple_SettingTemplate} from '@components/games/fun/powerCouple/type';

//__________Game types__________

export type PowerCoupleT = InitialGameProps<PowerCouple_GameConfig,
    PowerCouple_SettingTemplate,
    PowerCouple_GameData,
    PowerCouple_GamePlayData>;

export type PowerCoupleL1T = PowerCoupleT['game'];

export type PowerCouple_GameData = {
    readonly cards:Array<CardI>;
    readonly map:Map;
};

export type PowerCouple_GamePlayData = {
    mainField:MainField;
    cards:Array<CardI>
    maxCardsQty:number

    selectCards:{
        first:CardI | null,
        second:CardI | null
    }

    gridSelectMap:GridMap

    isCardFlip:boolean;
    isHelpBtnDisabled:boolean;
    isAllDisabledCard:boolean;
    isBtnMixLighting:boolean;
};

export interface CardI {
    id:number,
    name:string,

    content:string,
    imgPath:string,

    isSelect:boolean,
    isDisabled:boolean,
    isCorrect:boolean | null,
}

export type MainField = Array<Array<Array<undefined | CardI>>>;

export type GridMap = Array<Array<Array<(number | null)>>>;

//__________Components__________

export type ContentP =
    {
        handlerHelp:Function
        handleMixingCards:Function
        handlerSelectCard:HandlerSelectCardT;
        handlerCentralPositionCard:Function;
    }
    & Pick<PowerCouple_GamePlayData, 'mainField' | 'cards' | 'isCardFlip' | 'isAllDisabledCard' | 'isHelpBtnDisabled' | 'isBtnMixLighting'>;

export type GameFieldP = Pick<ContentP, 'mainField' | 'handlerSelectCard' | 'isCardFlip' | 'isAllDisabledCard'>;

export type CardP = {
    card:CardI
    positionLine:number,
    positionCell:number,
    numberField:number
} & Pick<ContentP, 'handlerSelectCard' | 'isCardFlip' | 'isAllDisabledCard'>;

export type BtnFieldP = {
    isMixinBtn:boolean;
    handlerHelp:Function
    handleMixingCards:Function;
    handlerCentralPositionCard:Function;
    disabledMixingCard:boolean;
} & Pick<ContentP, 'isHelpBtnDisabled' | 'isBtnMixLighting' | 'handlerHelp' | 'handleMixingCards' | 'handlerCentralPositionCard'>;

//__________LwProps types__________

interface FetchDataP {
    theme:ThemePowerCouple;
    cardsQty:number;
}

export interface DataI {
    id:string;
    variants:Array<{ content:string | '', imgPath:string }>;
}

export type FetchDataT = (params:FetchDataP) => Promise<Array<DataI>>;

interface Map {
    [key:string]:Array<Array<number | null>>;
}

export type MapsField = { [key:number]:Map };

interface GenerateVariantsP {
    theme:ThemePowerCouple;
    map:number;
}

export type GenerateVariantsT = (params:GenerateVariantsP) => Promise<Array<CardI>>;

//__________Body function types__________

export type HandlerSelectCardT = (card:CardI) => void;

//__________Utils types__________

interface OnGenerateMainFieldP {
    gridSelectMap:GridMap,
    cards:Array<CardI>;
}

export type OnGenerateMainFieldT = (params:OnGenerateMainFieldP) => MainField;

type OnActiveCardsP = Pick<PowerCouple_GamePlayData, 'mainField'>;

export type OnActiveCardsT = (params:OnActiveCardsP) => MainField;

type OnSelectCardP = { selectCard:CardI }
    & Pick<PowerCoupleT, 'changeGPDOnline'>
    & Pick<PowerCouple_GamePlayData, 'cards' | 'selectCards'>;

export type OnSelectCardT = (params:OnSelectCardP) => void;

type OnCheckingSelectCardsP = Pick<PowerCoupleT, 'changeGPDOnline'>
    & Pick<PowerCouple_GamePlayData, 'mainField' | 'selectCards' | 'gridSelectMap' | 'cards'>;

export type OnCheckingSelectCardsT = (params:OnCheckingSelectCardsP) => void;

type OnMixingCardsP = Pick<PowerCoupleT, 'changeGPDOnline'>
    & Pick<PowerCouple_GameData, 'cards'>
    & Pick<PowerCouple_GamePlayData, 'gridSelectMap'>;

export type OnMixingCardsT = (params:OnMixingCardsP) => void;

type OnFinalPositionP = Pick<PowerCoupleT, 'changeGPDOnline'>;

export type onFinalPositionT = (params:OnFinalPositionP) => void;

type GetCoordinatesCardsP = Pick<PowerCouple_GamePlayData, 'mainField' | 'selectCards'>;

export type GetCoordinatesCardsT = (params:GetCoordinatesCardsP) => Array<[grid:number, line:number, indexCard:number]>;

type UpdateGridMapP = Pick<PowerCouple_GamePlayData, 'gridSelectMap'> & GetCoordinatesCardsP;

export type UpdateGridMapT = (params:UpdateGridMapP) => GridMap;

type UseGameP =
    Pick<PowerCouple_GamePlayData, 'selectCards' | 'gridSelectMap' | 'cards' | 'mainField'>
    & Pick<PowerCoupleT, 'changeGPDOnline' | 'initFinishPlaying'>;

export type UseGameT = (params:UseGameP) => void;

type OnHelpP = Pick<PowerCouple_GamePlayData, 'cards'> & Pick<PowerCoupleT, 'changeGPDOnline'>;

export type OnHelpT = (params:OnHelpP) => void;

//__________Enums__________
