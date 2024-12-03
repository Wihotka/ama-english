import {
    GameConfigConstructT,
    InitialGameProps,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateNumberValueControl,
    SettingsTemplateValuesArr,
} from '@custom-types/game';

export type SortOutT = InitialGameProps<
    SortOut_GameConfig,
    SortOut_SettingsTemplate,
    SortOut_GameData,
    SortOut_GamePlayData
>;

export type SortOutGameT = SortOutT['game'];

export type SortOut_FieldSize = '4x3' | '4x4' | '4x5';

export type SortOut_SettingsTemplate = SettingsTemplate<{
    complexity:SettingsTemplateNumberValueControl;
    fieldSize:SettingsTemplateValuesArr<SortOut_FieldSize>;
    answersQty:SettingsTemplateNumberValueControl;
}>;

export type SortOut_ImagesPaths = {
    'phonebg':string;
};

export type SortOut_GameConfig = PartialGC & {
    imagesPaths?:SortOut_ImagesPaths;
};

export type SortOut_Config = GameConfigConstructT<
    SortOut_GameConfig,
    SortOut_SettingsTemplate
>;

export type SortOut_DndElement = { image:number };

export type SortOut_FieldElement = SortOut_DndElement & {
    index:number;
};

export type SortOut_Preposition =
    | 'left'
    | 'right'
    | 'under'
    | 'above'
    | 'between';

export type SortOut_GameTask = {
    targetElement:SortOut_FieldElement;
    answerElement:SortOut_FieldElement;
    preposition:SortOut_Preposition;
    extraElementImage?:number;
};

export type SortOut_GameFieldData = {
    fieldElements:SortOut_FieldElement[];
    dndElements:SortOut_DndElement[];
};

export type SortOut_GameData = {
    gameFieldData:SortOut_GameFieldData[];
    gameTasks:SortOut_GameTask[];
    rows:number;
    cols:number;
};

export type SortOut_GamePlayData = {
    currentTask:number;
    isCorrect:boolean;
    correctAnswersQty:number;
    highlightIndex:number;
    highlight:boolean;
    selectedElement:SortOut_FieldElement;
    isDragDisabled:boolean;
};
