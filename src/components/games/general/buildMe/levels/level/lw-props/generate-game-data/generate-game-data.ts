import {GenerateGDCB} from '@custom-types';
import {BuildMeGameT} from '../../type';
import {GetWordsP} from '@lib/game/utils/get-words/types';

export const generateGameData:GenerateGDCB<BuildMeGameT> = async ({gameSettings, staticEngData, getWords}) => {
    const {level, hint, theme, answersQty} = gameSettings;
    const {alphabet} = staticEngData;

    const conditions:GetWordsP = {
        theme: theme === 'random' ? '' : theme,
        wordsQty: answersQty,
        hasImg: level === 1 ? true : undefined,
        studyStage: [1]
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