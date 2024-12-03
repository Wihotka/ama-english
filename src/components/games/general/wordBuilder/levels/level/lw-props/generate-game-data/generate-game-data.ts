import {GenerateGDCB} from '@custom-types';
import {WordBuilderGameT} from '../../type';
import {GetWordsP} from '@lib/game/utils/get-words/types';

export const generateGameData:GenerateGDCB<WordBuilderGameT> = async ({gameSettings, staticEngData, getWords}) => {
    const {level, hint, theme, answersQty, course} = gameSettings;
    const {alphabet} = staticEngData;

    const conditions:GetWordsP = {
        theme,
        wordsQty: answersQty,
        studyStage: course - 1 ? [course - 1, course] : [course]
    };

    // Получаем слова и приводим их к нижнему регистру
    const words = await getWords(conditions).then((data) => data.words.map(word => ({
        ...word,
        word: word.word.toLowerCase()
    })));

    return {
        level,
        words,
        answersQty,
        isHintHidden: !hint,
        alphabet
    };
};