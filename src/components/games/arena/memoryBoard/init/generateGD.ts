import {random, shuffle} from 'lodash';
import {GenerateAGD} from '@custom-types';
import {MemoryBoardGameT} from '../type';

export const generateGD:GenerateAGD<MemoryBoardGameT> = async (props) => {
    const {gameSettings, getWords} = props;

    const getFieldSize = ([width, height]:Array<number>):number => width * height;
    const getRandThemeIndex = (themeQty:number) => Math.round(Math.random() * themeQty);

    const words = await getWords({
        wordsQty: getFieldSize(gameSettings.fieldSize) / 2,
        studyStage: gameSettings.course,
        hasImg: true,
        theme: gameSettings.theme[getRandThemeIndex(gameSettings.theme.length - 1)]
    }).then(words => words);

    const cards = generateCards(words.words, getFieldSize(gameSettings.fieldSize));

    return {
        ...words,
        cardsData: cards
    };
};

const generateCards = (words:any, cardQty:number) => {

    const result:any = [];

    for (let i = 0; i < cardQty; i += 2) {
        const variantsWord = words.filter((word:any) => !result?.find((elem:any) => elem.word === word.word));

        const selectedWord = variantsWord[random(variantsWord.length - 1)];

        const {word, imageUrls} = selectedWord;

        const cardImage = {
            id: i,
            word: word,
            content: imageUrls[0],
            type: 'image',

            inSelect: false,
            isHidden: false,
            isDisabled: true,
            isCorrect: null,
            isFlipped: true,
        };

        const cardWord = {
            id: i + 1,
            word: word,
            content: word,
            type: 'word',

            inSelect: false,
            isHidden: false,
            isDisabled: true,
            isCorrect: null,
            isFlipped: true,
        };

        result.push(cardImage, cardWord);
    }

    return shuffle(result);
};