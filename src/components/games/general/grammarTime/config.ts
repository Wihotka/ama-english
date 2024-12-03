import {ControlNames, ThemeGrammarTime} from '@custom-types/game';
import {GrammarTime_Config} from './type';

export const config:GrammarTime_Config = {
    gameConfig: {
        bgColor: {
            1: 'linear-gradient(146.05deg, #FFA686 -6.14%, #995454 109.76%)',
            2: 'linear-gradient(146.05deg, #F7B393 -6.14%, #77C6BA 109.76%)',
            3: 'linear-gradient(146.05deg, #FAA25E -6.14%, #E26566 109.76%)',
            4: 'linear-gradient(146.05deg, #CCFF98 -6.14%, #75BAFF 109.76%)'
        },
        displayedSettings: ['course', 'theme', 'answersQty'],
        valuesThresholds: [50, 70, 90],
        levelResolver: {
            1: 2,
            2: 3,
        },
        maxMistakesResolver: {
            1: 2,
            2: 3,
        }
    },
    settingsTemplate: {
        level: {
            min: 1,
            max: 2,
            step: 1,
        },
        course: {
            min: 1,
            max: 4,
            step: 1,
            controlName: ControlNames.slider
        },
        theme: {
            dependentFrom: 'course',
            dependentValues: {
                1: [
                    ThemeGrammarTime.grammarConstructions
                ],
                2: [
                    ThemeGrammarTime.grammarConstructions,
                    ThemeGrammarTime.possessivePronouns,
                    ThemeGrammarTime.timeMarkersPresent,
                    ThemeGrammarTime.timeMarkers,
                    ThemeGrammarTime.tensesPrSimplePrContinuous,
                    ThemeGrammarTime.tensesPrSimplePSimple,
                    ThemeGrammarTime.tensesRandom
                ],
                3: [
                    ThemeGrammarTime.articles,
                    ThemeGrammarTime.timeMarkersPresent,
                    ThemeGrammarTime.timeMarkers,
                    ThemeGrammarTime.tensesPrSimplePrContinuous,
                    ThemeGrammarTime.tensesPrSimplePSimple,
                    ThemeGrammarTime.tensesRandom,
                    ThemeGrammarTime.tensesPSimplePrPerfect,
                    ThemeGrammarTime.gerundInfinitive,
                    ThemeGrammarTime.regularIrregularVerbs,
                ],
                4: [
                    ThemeGrammarTime.articles,
                    ThemeGrammarTime.possessivePronouns,
                    ThemeGrammarTime.timeMarkersPresent,
                    ThemeGrammarTime.timeMarkersPast,
                    ThemeGrammarTime.tensesPrSimplePrContinuous,
                    ThemeGrammarTime.tensesPrSimplePSimple,
                    ThemeGrammarTime.tensesPrContinuousPContinuous,
                    ThemeGrammarTime.tensesPrPerfectPPerfect,
                    ThemeGrammarTime.regularIrregularVerbs,
                    ThemeGrammarTime.contractions
                ],
            },
            controlName: ControlNames.carousel
        },
        answersQty: {
            min: 4,
            max: 10,
            step: 1,
            controlName: ControlNames.inputNumber
        }
    },
};
