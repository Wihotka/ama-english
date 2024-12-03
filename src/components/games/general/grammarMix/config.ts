import {GrammarMix_Config, GrammarMix_GameConfig, GrammarMix_SettingsTemplate} from '@components/games/general/grammarMix/type';
import {ControlNames, ThemeGrammarMix} from '@custom-types';

const settingsTemplate:GrammarMix_SettingsTemplate = {
    level: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1
    },
    course: {
        min: 1,
        max: 4,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider
    },
    theme: {
        valueType: ThemeGrammarMix.determiners,
        dependentFrom: 'course',
        dependentValues: {
            1: [
                ThemeGrammarMix.determiners,
                ThemeGrammarMix.pronouns,
                ThemeGrammarMix.number,
                ThemeGrammarMix.numerals
            ],
            2: [
                ThemeGrammarMix.determiners,
                ThemeGrammarMix.pronouns,
                ThemeGrammarMix.number,
                ThemeGrammarMix.formsOfAdjectives,
                ThemeGrammarMix.verbHave
            ],
            3: [
                ThemeGrammarMix.determiners,
                ThemeGrammarMix.formsOfAdjectives,
                ThemeGrammarMix.verbHave,
                ThemeGrammarMix.futureActions,
                ThemeGrammarMix.gerundInfinitive,
                ThemeGrammarMix.regularIrregularVerbs
            ],
            4: [
                ThemeGrammarMix.futureActions,
                ThemeGrammarMix.regularIrregularVerbs,
                ThemeGrammarMix.formsOfAdjectives,
                ThemeGrammarMix.passiveVoicePrSimple,
                ThemeGrammarMix.passiveVoicePrContinuous,
                ThemeGrammarMix.passiveVoicePastSimple,
                ThemeGrammarMix.firstConditional,
                ThemeGrammarMix.secondConditional,
                ThemeGrammarMix.thirdConditional
            ]
        },
        controlName: ControlNames.carousel
    },
    answersQty: {
        min: 4,
        max: 10,
        step: 1,
        valueType: 4,
        controlName: ControlNames.inputNumber
    }
};

const gameConfig:GrammarMix_GameConfig = {
    bgColor: {
        1: 'linear-gradient(356.29deg, #4A4EA7 3.9%, #B0D9FD 66.12%)',
        2: 'linear-gradient(146.05deg, #A7F3FE -6.14%, #FFC590 109.76%)',
        3: 'linear-gradient(146.05deg, #A7F3FE -6.14%, #FFC590 109.76%)',
        4: 'linear-gradient(146.05deg, #8A73D2 -6.14%, #A1BBDE 109.76%)'
    },
    displayedSettings: ['theme', 'course', 'answersQty'],
};

export const config:GrammarMix_Config = {gameConfig, settingsTemplate};