import {navigationLocations, WordsThemes} from '@custom-types';

export type TypeResources =
    | TimelineLocalData
    | FruitSmoothieLocalData
    | PowerCoupleLocalDate
    | StorytellerLocalData
    | YesntLocalData
    | ClickItEasyLocalData
    | GrammarTimeLocalData
    | GrammarMixLocalData
    | PhraseJumpingLocalData
    | TextTeaserLocalData
    | CheckpointLocalData
    | EchoChamberLocalData
    | NavigationLocalData
    | AirWordLocalData;

export enum TimelineLocalData {
    presentSimple = 'timeline/presentSimple',
    presentContinuous = 'timeline/presentContinuous',
    pastSimple = 'timeline/pastSimple',
    presentPerfect = 'timeline/presentPerfect',
    futureSimple = 'timeline/futureSimple',
    beGoingTo = 'timeline/beGoingTo',
    pastContinuous = 'timeline/pastContinuous'
}

export enum FruitSmoothieLocalData {
    number = 'fruitSmoothie/number',
    pronouns = 'fruitSmoothie/pronouns',
    toBe = 'fruitSmoothie/to-be',
    verbForms = 'fruitSmoothie/verb-forms',
    countableUncountable = 'fruitSmoothie/countableUncountable',
    muchMany = 'fruitSmoothie/muchMany',
    regularIrregularVerbs = 'fruitSmoothie/regularIrregularVerbs',
    timeMarkersPresent = 'fruitSmoothie/timeMarkersPresent'
}

export enum PowerCoupleLocalDate {
    homographs = 'powerCouple/homographs',
    homophones = 'powerCouple/homophones',
    smiles = 'powerCouple/smiles',
}

export enum StorytellerLocalData {
    adventure = 'storyteller/adventure',
    detective = 'storyteller/detective',
    fairyTale = 'storyteller/fairy-tale',
    fantasy = 'storyteller/fantasy',
    horror = 'storyteller/horror',
    sciFi = 'storyteller/sci-fi',
}

export enum YesntLocalData {
    levelOne = 'yesnt/level-one',
    levelTwo = 'yesnt/level-two',
}

export enum ClickItEasyLocalData {
    simpleSentence = 'clickItEasy/simpleSentence',
    presentSimple = 'clickItEasy/presentSimple',
    presentContinuous = 'clickItEasy/presentContinuous',
    presentPerfect = 'clickItEasy/presentPerfect',
    pastSimple = 'clickItEasy/pastSimple',
    futureSimple = 'clickItEasy/futureSimple',
    mustShould = 'clickItEasy/mustShould',
    demonstrativePronouns = 'clickItEasy/demonstrativePronouns',
    haveTo = 'clickItEasy/haveTo',
    pastContinuous = 'clickItEasy/pastContinuous',
    wordOrder = 'clickItEasy/wordOrder',
    // todo удалить тему после 01.08
    verbHave = 'clickItEasy/haveTo',
}

export enum GrammarTimeLocalData {
    grammarConstructions = 'grammarTime/grammarConstructions',
    possessivePronouns = 'grammarTime/possessivePronouns',
    timeMarkersPresent = 'grammarTime/timeMarkersPresent',
    timeMarkers = 'grammarTime/timeMarkers',
    tensesPrSimplePrContinuous = 'grammarTime/tensesPrSimplePrContinuous',
    tensesPrSimplePSimple = 'grammarTime/tensesPrSimplePSimple',
    tensesPSimplePrPerfect = 'grammarTime/tensesPSimplePrPerfect',
    tensesRandom = 'grammarTime/tensesRandom',
    articles = 'grammarTime/articles',
    regularIrregularVerbs = 'grammarTime/regularIrregularVerbs',
    gerundInfinitive = 'grammarTime/gerundInfinitive',
    timeMarkersPast = 'grammarTime/timeMarkersPast',
    tensesPrContinuousPContinuous = 'grammarTime/tensesPrContinuousPContinuous',
    tensesPrPerfectPPerfect = 'grammarTime/tensesPrPerfectPPerfect',
    contractions = 'grammarTime/contractions',
}

export enum GrammarMixLocalData {
    number = 'grammarMix/number',
    pronouns = 'grammarMix/pronouns',
    determiners = 'grammarMix/determiners',
    numerals = 'grammarMix/numerals',
    formsOfAdjectives = 'grammarMix/formsOfAdjectives',
    verbHave = 'grammarMix/verbHave',
    futureActions = 'grammarMix/futureActions',
    gerundInfinitive = 'grammarMix/gerundInfinitive',
    regularIrregularVerbs = 'grammarMix/regularIrregularVerbs',
    passiveVoicePrSimple = 'grammarMix/passiveVoicePrSimple',
    passiveVoicePrContinuous = 'grammarMix/passiveVoicePrContinuous',
    firstConditional = 'grammarMix/firstConditional',
    secondConditional = 'grammarMix/secondConditional',
    thirdConditional = 'grammarMix/thirdConditional',
    passiveVoicePastSimple = 'grammarMix/passiveVoicePastSimple'
}

export enum PhraseJumpingLocalData {
    presentSimple = 'phraseJumping/presentSimple',
    toBe = 'phraseJumping/toBe',
    thereIsAre = 'phraseJumping/thereIsAre',
    verbHave = 'phraseJumping/verbHave',
    formsOfAdjectives = 'phraseJumping/formsOfAdjectives',
    fewLittle = 'phraseJumping/fewLittle',
    futureContinuous = 'phraseJumping/futureContinuous',
    presentPerfectContinuous = 'phraseJumping/presentPerfectContinuous',
    pastPerfect = 'phraseJumping/pastPerfect'
}

export enum CheckpointLocalData {
    firstLevel = 'checkpoint/firstLevel',
    secondLevel = 'checkpoint/secondLevel',
}

export enum TextTeaserLocalData {
    texts = 'textTeaser',
}

export enum EchoChamberLocalData {
    sentences = 'echoChamber'
}

export enum NavigationLocalData {
    options = 'navigation'
}

export enum AirWordLocalData {
    words = 'airWord'
}

export interface PowerCoupleData {
    id:string;
    variants:Array<{ content:string; imgPath:string }>;
}

export interface PowerCoupleSmiles {
    id:string,
    imagePath:string
}

export interface TimelinePresentSimpleData {
    1:Array<{
        sentence:Array<string>,
        imagePath:string,
        disabledImg:Array<string>
    }>;
    2:Array<{
        correctVersion:string,
        incorrectVersion:string,
        imagePath:string
    }>;
}

export interface FruitSmoothieNumber {
    question:string,
    correctAnswer:string,
    incorrectAnswers:Array<string>
}

export interface FruitSmoothieVerbForm {
    1:Array<TypeVerbForm1>;
    2:Array<TypeVerbForm2>;
}

export interface FruitSmoothieCountableUncountable {
    question:string,
    correctAnswer:string,
    incorrectAnswers:Array<string>
}

export interface FruitSmoothieMuchMany {
    question:string,
    correctAnswer:string,
    incorrectAnswers:Array<string>
}

export interface FruitSmoothieRegularIrregularVerbs {
    question:string,
    correctAnswer:string,
    incorrectAnswers:Array<string>
}

export interface FruitSmoothieTimeMarkersPresent {
    question:string,
    correctAnswer:string,
    incorrectAnswers:Array<string>
}

interface TypeVerbForm1 {
    question:string,
    correctAnswer:string,
    incorrectAnswers:Array<string>
}

interface TypeVerbForm2 {
    question:Array<string>,
    correctAnswer:string,
    incorrectAnswers:Array<string>
}

export interface FruitSmoothieTobe {
    question:string,
    correctAnswer:string,
    incorrectAnswers:Array<string>
    endOfQuestion:Array<string>
}

export type FruitSmoothiePronouns = Pick<FruitSmoothieTobe, 'correctAnswer' | 'incorrectAnswers' | 'question' | 'endOfQuestion'>;

interface StorytellerStoryData {
    storyText:string;
    imageBg:string;
    questions:Array<{
        questionText:string;
        answers:Array<{
            value:string;
            imgPath:string;
        }>;
    }>;
}

export interface YesntLevel1TaskData {
    textTitle:string;
    taskText:string;
    taskQuestions:Array<{
        question:string;
        correctAnswer:boolean;
    }>;
}

export interface YesntLevel2TaskData {
    img:string;
    taskQuestions:Array<{
        question:string;
        correctAnswer:boolean;
    }>;
}

export type ClickItEasyLocalDataItem = {
    sentence:string,
    type:string,
    imgUrl:string
};

export interface GrammarTimeVariant {
    text:string;
    placeholders?:Array<string>;
}

export interface GrammarTimeGrammarConstruction {
    sentence:Array<string> | string;
    variants:Array<GrammarTimeVariant>;
    sentencePlaceholders?:Array<string>;
    variantsPlaceholders?:Array<string>;
}

export interface GrammarTimeSimpleItem {
    firstPart:string;
    secondPart:string
}

export type GrammarMixDeterminers = {
    correctAnswer:string,
    incorrectAnswers:string,
    question:Array<string>
};

export type GrammarMixNumber = {
    question:string,
    correctAnswer:string,
    incorrectAnswers:Array<string>,
    typeAnswer:string
};

export type GrammarMixNumerals = {
    1:Array<{
        question:string,
        correctAnswer:string,
        incorrectAnswers:Array<string>,
        endOfQuestion:Array<string>,
    }>
    2:Array<{
        question:string,
        correctAnswer:Array<string>,
        endOfQuestion:Array<string>,
    }>
};

export type GrammarMixPronouns = {
    1:Array<{
        question:string,
        correctAnswer:string,
        incorrectAnswers:Array<string>,
        endOfQuestion:Array<string>,
    }>
    2:Array<{
        question:string,
        correctAnswer:string,
        incorrectAnswers:string,
        endOfQuestion:Array<string>,
    }>
};

export type GrammarMixFormsOfAdjectives = {
    1:Array<{
        question:string,
        correctAnswer:string,
        incorrectAnswers:string
    }>
    2:Array<{
        question:string,
        correctAnswer:string,
        incorrectAnswers:string
    }>
};

export type GrammarMixVerbHave = GrammarMixFormsOfAdjectives;
export type GrammarMixFutureActions = GrammarMixFormsOfAdjectives;
export type GrammarMixGerundInfinitive = GrammarMixFormsOfAdjectives;
export type GrammarMixRegularIrregularVerbs = GrammarMixFormsOfAdjectives;
export type GrammarMixPassiveVoicePrSimple = GrammarMixFormsOfAdjectives;
export type GrammarMixPassiveVoicePrContinuous = GrammarMixFormsOfAdjectives;
export type GrammarMixFirstConditional = GrammarMixFormsOfAdjectives;
export type GrammarMixSecondConditional = GrammarMixFormsOfAdjectives;
export type GrammarMixThirdConditional = GrammarMixFormsOfAdjectives;
export type GrammarMixPassiveVoicePastSimple = GrammarMixFormsOfAdjectives;

export interface PhraseJumpingData {
    question:string,
    correctAnswers:Array<string>,
    punctuationMark:string
    typePrompt:'affirmative' | 'negative' | 'question' | 'comparative' | 'superlative' | 'there' |
        'fewLittle' | 'futureContinuous' | 'presentPerfectContinuous' | 'pastPerfect'
}

export type CheckpointLocalDataItem = {
    id:number,
    theme?:string,
    wrongTheme?:string,
    wordsQty?:number;
    wrongWordsQty?:number,
    options?:any,
    case:string
};

export type TextTeaserData = {
    [level:number]:Array<{
        title:string;
        sentences:string[];
    }>
};

export type EchoChamberLocalDataItem = {
    id:string,
    text:string
};

export type NavigationLocalDataItemOfOption = {
    name:string,
    imgUrl:string,
    size:number,
    top:number,
    left:number
};

export type NavigationLocalDataItem = {
    item:NavigationLocalDataItemOfOption,
    sentence:string,
    complexity:number
};

export type NavigationLocalDataItemByLocation = {
    [key in navigationLocations]:{
        imgUrl:string,
        options:Array<NavigationLocalDataItem>
    }
};

export type AirWordLocalDataByTheme = {
    [key in WordsThemes]:Array<string>
};

type ResultT<T extends TypeResources> =
    T extends TimelineLocalData.presentSimple ? TimelinePresentSimpleData : never |
    T extends TimelineLocalData.presentContinuous ? TimelinePresentSimpleData : never |
    T extends TimelineLocalData.pastSimple ? TimelinePresentSimpleData : never |
    T extends TimelineLocalData.presentPerfect ? TimelinePresentSimpleData : never |
    T extends TimelineLocalData.futureSimple ? TimelinePresentSimpleData : never |
    T extends TimelineLocalData.beGoingTo ? TimelinePresentSimpleData : never |
    T extends TimelineLocalData.pastContinuous ? TimelinePresentSimpleData : never |
    T extends FruitSmoothieLocalData.toBe ? FruitSmoothieTobe[] : never |
    T extends FruitSmoothieLocalData.number ? FruitSmoothieNumber[] : never |
    T extends FruitSmoothieLocalData.pronouns ? FruitSmoothiePronouns[] : never |
    T extends FruitSmoothieLocalData.verbForms ? FruitSmoothieVerbForm : never |
    T extends FruitSmoothieLocalData.countableUncountable ? FruitSmoothieCountableUncountable[] : never |
    T extends FruitSmoothieLocalData.muchMany ? FruitSmoothieMuchMany[] : never |
    T extends FruitSmoothieLocalData.regularIrregularVerbs ? FruitSmoothieRegularIrregularVerbs[] : never |
    T extends FruitSmoothieLocalData.timeMarkersPresent ? FruitSmoothieTimeMarkersPresent[] : never |
    T extends PowerCoupleLocalDate.homographs ? PowerCoupleData[] : never |
    T extends PowerCoupleLocalDate.homophones ? PowerCoupleData[] : never |
    T extends PowerCoupleLocalDate.smiles ? PowerCoupleSmiles[] : never |
    T extends StorytellerLocalData ? StorytellerStoryData : never |
    T extends YesntLocalData.levelOne ? YesntLevel1TaskData[] : never |
    T extends YesntLocalData.levelTwo ? YesntLevel2TaskData[] : never |
    T extends ClickItEasyLocalData.simpleSentence ? ClickItEasyLocalDataItem[] : never |
    T extends ClickItEasyLocalData.presentSimple ? ClickItEasyLocalDataItem[] : never |
    T extends ClickItEasyLocalData.presentContinuous ? ClickItEasyLocalDataItem[] : never |
    T extends ClickItEasyLocalData.presentPerfect ? ClickItEasyLocalDataItem[] : never |
    T extends ClickItEasyLocalData.pastSimple ? ClickItEasyLocalDataItem[] : never |
    T extends ClickItEasyLocalData.futureSimple ? ClickItEasyLocalDataItem[] : never |
    T extends ClickItEasyLocalData.mustShould ? ClickItEasyLocalDataItem[] : never |
    T extends ClickItEasyLocalData.demonstrativePronouns ? ClickItEasyLocalDataItem[] : never |
    T extends ClickItEasyLocalData.haveTo ? ClickItEasyLocalDataItem[] : never |
    T extends ClickItEasyLocalData.pastContinuous ? ClickItEasyLocalDataItem[] : never |
    T extends ClickItEasyLocalData.wordOrder ? ClickItEasyLocalDataItem[] : never |
    T extends GrammarTimeLocalData.grammarConstructions ? GrammarTimeGrammarConstruction[] : never |
    T extends GrammarTimeLocalData.possessivePronouns ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.timeMarkersPresent ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.timeMarkers ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.tensesPrSimplePrContinuous ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.tensesPrSimplePSimple ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.tensesPSimplePrPerfect ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.tensesRandom ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.articles ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.regularIrregularVerbs ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.gerundInfinitive ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.timeMarkersPast ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.tensesPrContinuousPContinuous ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.tensesPrPerfectPPerfect ? GrammarTimeSimpleItem[] : never |
    T extends GrammarTimeLocalData.contractions ? GrammarTimeSimpleItem[] : never |
    T extends GrammarMixLocalData.number ? GrammarMixNumber[] : never |
    T extends GrammarMixLocalData.determiners ? GrammarMixDeterminers[] : never |
    T extends GrammarMixLocalData.pronouns ? GrammarMixPronouns : never |
    T extends GrammarMixLocalData.numerals ? GrammarMixNumerals : never |
    T extends GrammarMixLocalData.formsOfAdjectives ? GrammarMixFormsOfAdjectives : never |
    T extends GrammarMixLocalData.verbHave ? GrammarMixVerbHave : never |
    T extends GrammarMixLocalData.futureActions ? GrammarMixFutureActions : never |
    T extends GrammarMixLocalData.gerundInfinitive ? GrammarMixGerundInfinitive : never |
    T extends GrammarMixLocalData.regularIrregularVerbs ? GrammarMixRegularIrregularVerbs : never |
    T extends GrammarMixLocalData.passiveVoicePrSimple ? GrammarMixPassiveVoicePrSimple : never |
    T extends GrammarMixLocalData.passiveVoicePrContinuous ? GrammarMixPassiveVoicePrContinuous : never |
    T extends GrammarMixLocalData.passiveVoicePastSimple ? GrammarMixPassiveVoicePastSimple : never | 
    T extends GrammarMixLocalData.firstConditional ? GrammarMixFirstConditional : never |
    T extends GrammarMixLocalData.secondConditional ? GrammarMixSecondConditional : never |
    T extends GrammarMixLocalData.thirdConditional ? GrammarMixThirdConditional : never |
    T extends PhraseJumpingLocalData.presentSimple ? PhraseJumpingData[] : never |
    T extends PhraseJumpingLocalData.toBe ? PhraseJumpingData[] : never |
    T extends PhraseJumpingLocalData.thereIsAre ? PhraseJumpingData[] : never |
    T extends PhraseJumpingLocalData.formsOfAdjectives ? PhraseJumpingData[] : never |
    T extends PhraseJumpingLocalData.verbHave ? PhraseJumpingData[] : never |
    T extends PhraseJumpingLocalData.fewLittle ? PhraseJumpingData[] : never |
    T extends PhraseJumpingLocalData.futureContinuous ? PhraseJumpingData[] : never |
    T extends PhraseJumpingLocalData.presentPerfectContinuous ? PhraseJumpingData[] : never |
    T extends PhraseJumpingLocalData.pastPerfect ? PhraseJumpingData[] : never |
    T extends CheckpointLocalData.firstLevel ? CheckpointLocalDataItem[] : never |
    T extends CheckpointLocalData.secondLevel ? CheckpointLocalDataItem[] : never |
    T extends EchoChamberLocalData.sentences ? EchoChamberLocalDataItem[] : never |
    T extends TextTeaserLocalData.texts ? TextTeaserData : never |
    T extends NavigationLocalData.options ? NavigationLocalDataItemByLocation : never |
    T extends AirWordLocalData.words ? AirWordLocalDataByTheme : never;

export type LoadLocalGameData = <T extends TypeResources>(resourceName:T) => Promise<ResultT<T>>;