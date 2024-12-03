import {sample} from 'lodash';

import {GenerateGDCB, WordsThemes} from '@custom-types';
import {WorndNLettersGameT} from '../../type';

type PlacedWordT = { word:string, id:number, image?:string };

export const generateGameData:GenerateGDCB<WorndNLettersGameT> = async ({gameSettings, getWords}) => {
    const {answersQty, level, theme, complexity, course} = gameSettings;

    const levelsResolver:{ [key:number]:{ wordsQty:number, wordsTheme:WordsThemes | '' } } = {
        1: {
            wordsQty: 6,
            wordsTheme: ''
        },
        2: {
            wordsQty: 4,
            wordsTheme: theme as WordsThemes
        }
    };
    const {wordsQty, wordsTheme} = levelsResolver[level];

    const examples = [];
    const wordsData = await getWords({
        wordsQty: 100, //todo почему именно 100? вынести в конфиг магическое число
        theme: wordsTheme,
        hasImg: level === 2,
        studyStage: course - 1 ? [course - 1, course] : [course]
    });

    while (examples.length < answersQty) {
        const words:Array<PlacedWordT> = [];

        while (words.length < wordsQty) {
            const {word, imageUrls} = sample(wordsData.words.filter(dataWord => complexity === 1
                ? !words.find(({word}) => word.charAt(0).toUpperCase() === dataWord.word.charAt(0).toUpperCase())
                : true)) || {};

            if (word && !words.find((wordData) => wordData.word === word)) {
                words.push({word, id: words.length, image: imageUrls && imageUrls[0]});
            }
        }

        words.sort((x:PlacedWordT, y:PlacedWordT) => x.word.localeCompare(y.word));

        examples.push({
            words: words.map((word, index) => ({
                ...word,
                index
            }))
        });
    }

    return {examples};
};
