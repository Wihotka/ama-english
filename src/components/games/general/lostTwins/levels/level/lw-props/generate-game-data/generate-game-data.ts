import {random, shuffle} from 'lodash';
import {GetWordsT} from '@lib/game/utils/get-words/types';

import {GenerateGDCB} from '@custom-types';

import {CardsData, LostTwins_GameData, LostTwinsGameL1T, TypeContentCard, Word} from '../../type';

export const generateGameData:GenerateGDCB<LostTwinsGameL1T> = async ({
    getWords,
    gameSettings,
    gameConfig
}):Promise<LostTwins_GameData> => {
    const {theme, course, fieldSize, level} = gameSettings;
    const {levelConfigs} = gameConfig;
    const timeVisibilityCard = levelConfigs?.[level].timeVisibilityCard;

    const cardQty:number = fieldSize
        .split('x')
        .map(size => Number(size))
        .reduce((acc, size) => acc * size);

    const words = await fetchWorld(theme, course, getWords);

    const cards = generateCards(words, cardQty, level);

    return {
        words,
        cardsData: cards,

        cardQty,
        columnsQty: Number(fieldSize[0]),
        timeVisibilityCard,

        isFlippedField: level !== 1
    };
};

const fetchWorld = async (theme:LostTwinsGameL1T['gameSettings']['theme'], course:number, getWords:GetWordsT):Promise<Word[]> => {
    const fetchData = await getWords({
        theme: theme === 'random' ? '' : theme,
        wordsQty: 16,
        hasImg: true,
        studyStage: course - 1 ? [course - 1, course] : [course]
    }).then(data => data.words);

    return fetchData.map(wordObject => {
        const {word, imageUrls, soundUrl} = wordObject;

        return {word, imageUrls, soundUrl};
    });
};

const generateCards = (words:Word[], cardQty:number, level:number):CardsData[] => {

    const result:CardsData[] = [];

    for (let i = 0; i < cardQty; i += 2) {
        //30% шанс на переворот карточки
        const isRotate = level > 2 && 3 > Math.floor(Math.random() * 10);

        const variantsWord = words.filter(words => !result?.find(elem => elem.word === words.word));

        const selectedWord = variantsWord[random(variantsWord.length - 1)];

        const {word, imageUrls} = selectedWord;

        const cardImage:CardsData = {
            id: i,
            word: word,
            type: TypeContentCard.image,
            content: imageUrls[0],
            isRotate
        };

        const cardWord:CardsData = {
            id: i + 1,
            word: word,
            type: TypeContentCard.word,
            content: word,
            isRotate
        };

        result.push(cardImage, cardWord);
    }

    return shuffle(result);
};