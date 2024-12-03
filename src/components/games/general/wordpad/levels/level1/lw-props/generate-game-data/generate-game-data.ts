import {GenerateGDCB} from '@custom-types';
import {WordpadGameT} from '../../type';

export const generateGameData:GenerateGDCB<WordpadGameT> = async ({gameSettings, staticEngData, getWords}) => {
    const {theme, answersQty, course} = gameSettings;
    const {keyboard} = staticEngData;

    const words = await getWords({
        theme: theme === 'random' ? '' : theme,
        wordsQty: answersQty,
        studyStage: course - 1 ? [course - 1, course] : [course]
    }
    ).then(data => data.words);
    
    return {words, keyboard};
};