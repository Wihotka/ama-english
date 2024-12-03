import {
    GameConfigConstructT,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl,
    ThemeGrammarTime,
} from '@custom-types/game';
import {GrammarTimeL1T} from './levels/level1/type';

export type GrammarTime_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl;
    theme:SettingsTemplateDependentValuesArr<ThemeGrammarTime>;
    answersQty:SettingsTemplateNumberValueControl;
}>;

export type GrammarTime_GameConfig = PartialGC & {
    levelResolver:{ [k:number]:number };
    maxMistakesResolver:{ [k:number]:number };
};

export type GrammarTime_Config = GameConfigConstructT<
    GrammarTime_GameConfig,
    GrammarTime_SettingsTemplate
>;

export type GrammarTime_ChangeReplacedItem = (
    el:GrammarTime_VariantElement | null
) => void;

export type GrammarTime_DropElement = (
    el:GrammarTime_VariantElement,
    index:number,
    replaceIndex:number
) => void;

type GrammarTime_Element = {
    text:string;
    indicator?:string
};

export type GrammarTime_StaticElement = GrammarTime_Element & {
    variantId:number;
};

export type GrammarTime_VariantElement = GrammarTime_Element & {
    id:number;
};

export type GrammarTime_Task = {
    staticElements:GrammarTime_StaticElement[];
    variantElements:GrammarTime_VariantElement[];
};

export type GrammarTime_DragItem = {
    element:GrammarTime_VariantElement;
    replaceIndex:number;
};

export type GrammarTime_GameData = {
    gameTasks:GrammarTime_Task[];
    qPerAnswer:number;
    maxMistakesQty:number;
};

export type GrammarTime_GamePlayData_Common = {
    currentQ:number;
    highlight:boolean;
    isCorrect:boolean;
    mistakesQty:number;
    userElements:(GrammarTime_VariantElement | null)[];
    elementToBeReplaced:GrammarTime_VariantElement | null;
    isDragDisabled:boolean;
};

export type OnDropElementP = {
    el:GrammarTime_VariantElement,
    index:number,
    replaceIndex:number;
    userElements:(GrammarTime_VariantElement | null)[];
    elementToBeReplaced:GrammarTime_VariantElement | null;
} & Pick<GrammarTimeL1T, 'changeGPDOnline'>;

export type OnChangeReplacedItemP = {
    el:GrammarTime_VariantElement | null
} & Pick<GrammarTimeL1T, 'changeGPDOnline'>;
