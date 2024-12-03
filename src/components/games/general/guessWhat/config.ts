import {ControlNames, WordsThemes} from '@custom-types/game';
import {GuessWhat_Config} from './type';

export const config:GuessWhat_Config = {
    gameConfig: {
        bgColor: {
            1: 'linear-gradient(146.05deg, #ECCABC -6.14%, #F2ACB3 109.76%)',
            2: 'linear-gradient(146.05deg, #ECCABC -6.14%, #F2ACB3 109.76%)',
            3: 'linear-gradient(146.05deg, #6DF2A5 -6.14%, #357E77 109.76%)',
            4: 'linear-gradient(146.05deg, #6DF2A5 -6.14%, #357E77 109.76%)'
        },
        displayedSettings: ['course', 'theme', 'complexity', 'answersQty'],
        valuesThresholds: [50, 70, 90],
        wordsQtyResolver: {
            1: 4,
            2: 6,
            3: 8,
        },
        maxMistakesResolver: {
            1: 2,
            2: 2,
            3: 3,
        },
        descriptionResolver: {
            1: 1,
            2: 2,
        },
    },
    settingsTemplate: {
        level: {
            min: 1,
            max: 3,
            step: 1,
            disabledSettings: {
                1: ['hint'],
                2: ['hint'],
            }
        },
        course: {
            min: 1,
            max: 4,
            step: 1,
            disabledSettings: {
                1: ['complexity'],
            },
            controlName: ControlNames.slider
        },
        theme: {
            dependentFrom: 'course',
            dependentValues: {
                1: [
                    WordsThemes.coloursShapes,
                    WordsThemes.familyHome,
                    WordsThemes.gamesHobbies,
                    WordsThemes.clothesWeather,
                    WordsThemes.food,
                    WordsThemes.travel,
                    WordsThemes.animals,
                ],
                2: [
                    WordsThemes.familyHome,
                    WordsThemes.gamesHobbies,
                    WordsThemes.clothesWeather,
                    WordsThemes.food,
                    WordsThemes.travel,
                    WordsThemes.animals,
                    WordsThemes.school,
                    WordsThemes.professions,
                ],
                3: [
                    WordsThemes.school,
                    WordsThemes.familyHome,
                    WordsThemes.animals,
                    WordsThemes.gamesHobbies,
                    WordsThemes.clothesWeather,
                    WordsThemes.food,
                    WordsThemes.travel,
                    WordsThemes.cityLife,
                    WordsThemes.professions,
                    WordsThemes.holidays,
                    WordsThemes.shopping
                ],
                4: [
                    WordsThemes.school,
                    WordsThemes.familyHome,
                    WordsThemes.animals,
                    WordsThemes.gamesHobbies,
                    WordsThemes.clothesWeather,
                    WordsThemes.food,
                    WordsThemes.travel,
                    WordsThemes.cityLife,
                    WordsThemes.shopping,
                    WordsThemes.inventions,
                    WordsThemes.moviesSeries,
                    WordsThemes.socialNets,
                    WordsThemes.health
                ],
            },
            controlName: ControlNames.carousel
        },
        complexity: {
            min: 1,
            max: 2,
            step: 1,
            controlName: ControlNames.slider,
        },
        hint: {
            min: 0,
            max: 1,
            step: 1,
            controlName: ControlNames.toggle
        },
        answersQty: {
            min: 4,
            max: 8,
            step: 1,
            controlName: ControlNames.inputNumber
        }
    },
};
