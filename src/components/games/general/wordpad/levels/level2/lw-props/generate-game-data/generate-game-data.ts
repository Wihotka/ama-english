import {getWords} from '@lib/game/utils';
import {getTimerValue} from '../../../../config';

import {GenerateGDCB} from '@custom-types';
import {WordpadGameT} from '../../type';

export const generateGameData:GenerateGDCB<WordpadGameT> = async ({gameSettings, staticEngData}) => {
    const {theme, answersQty, complexity, course} = gameSettings;
    const {keyboard} = staticEngData;

    const words = await getWords({
        theme: theme === 'random' ? '' : theme,
        wordsQty: answersQty,
        studyStage: course - 1 ? [course - 1, course] : [course]
    }).then(data => data.words);

    return {
        words,
        keyboard,
        startTimer: getTimerValue(complexity) * 10
    };
};