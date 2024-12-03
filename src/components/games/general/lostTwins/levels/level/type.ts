import {GameSettingsConstructT, InitialGameProps} from '@custom-types';
import {WordItem} from '@lib/game/utils/get-words/types';
import {LostTwins_GameConfig, LostTwins_SettingsTemplate} from './../../type';

//__________Game types__________
export type ContentP = {
    gamePlayData:LostTwins_GamePlayData;
    gameData:LostTwins_GameData;
    gameSettings:GameSettingsConstructT<LostTwins_SettingsTemplate>

    handlerSelectCard:HandleSelectOption;
    handlerFlipAllCard:HandlerFlipAllCard;
};

export type LostTwinsT = InitialGameProps<LostTwins_GameConfig,
    LostTwins_SettingsTemplate,
    LostTwins_GameData,
    LostTwins_GamePlayData>;

export type LostTwinsGameL1T = LostTwinsT['game'];

export type LostTwins_GamePlayData = {
    cards:CardI[]

    selectedCard:{
        first:CardI | null,
        seconds:CardI | null
    }
    secondsNowGame:number;

    isStartFlip:boolean;
    isAllFlipCard:boolean;
};

export type LostTwins_GameData = {
    readonly words:Word[],
    readonly cardsData:CardsData[];

    readonly columnsQty:number;
    readonly cardQty:number;
    readonly timeVisibilityCard:number;

    readonly isFlippedField:boolean;

};

export interface CardI {
    id:number,
    word:string,
    content:string
    type:TypeContentCard;

    inSelect:boolean,
    isDisabled:boolean;
    isFlipped:boolean;
    isRotate:boolean;
    isHidden:boolean;
    isCorrect:boolean | null;

    studyStage:number | undefined;
}

export type CardsData = Pick<CardI, 'id' | 'word' | 'content' | 'type' | 'isRotate'>;

export type Word = Required<Pick<WordItem, 'word' | 'imageUrls' | 'soundUrl'>>;

//__________Components__________

export type CardContainerI = { card:CardI, onSelectOption:HandleSelectOption }
    & Pick<LostTwins_GameData, 'timeVisibilityCard'>
    & Pick<LostTwins_GamePlayData, 'isStartFlip'>;

export type CardListP = { handlerSelectCard:HandleSelectOption; }
    & Pick<LostTwinsGameL1T, 'gameData' | 'gamePlayData'>;

//__________Body function types__________
export type HandleSelectOption = (selectCard:CardI) => void;
export type HandlerFlipAllCard = () => void;

//__________Utils types__________

type OnSelectCardP = { selectCard:CardI }
    & Pick<LostTwinsGameL1T, 'gamePlayData' | 'gameSettings'>
    & Pick<LostTwinsT, 'changeGPDOnline'>;

export type OnSelectCardT = (params:OnSelectCardP) => void;

type OnCheckingSelectCardsP =
    Pick<LostTwinsT, 'changeGPDOnline' | 'speakTexts'>
    & Pick<LostTwinsGameL1T, 'gameData' | 'gamePlayData'>;

export type OnCheckingSelectCardsT = (params:OnCheckingSelectCardsP) => void;

type UseCurrentStateGameP = Pick<LostTwinsT, 'speakTexts' | 'changeGPDOnline' | 'initFinishPlaying'>
    & Pick<LostTwinsGameL1T, 'gameData' | 'gamePlayData' | 'gameSettings'>;

export type useCurrentStateGameT = (params:UseCurrentStateGameP) => void;

type OnFlipAllCardP = Pick<LostTwinsT, 'changeGPDOnline'>;

export type OnFlipAllCardT = (params:OnFlipAllCardP) => void;

//__________Enums__________
export enum TypeContentCard {
    image = 'image',
    word = 'word'
}