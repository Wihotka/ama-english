import {shuffle} from 'lodash';

import {loadLocalGameData} from '@lib/game/utils';
import {getTimerValue} from '../../../../config';

import {ClickItEasyLocalData} from '@lib/game/utils/game-local-data-loader/types';
import {GenerateGDCB, sentenceTypes} from '@custom-types';
import {ClickItEasyGameT} from '../../type';

export const generateGameData:GenerateGDCB<ClickItEasyGameT> = async ({gameSettings}) => {
    const {theme, sentenceType, answersQty, complexity} = gameSettings;

    // common sentences objects

    const sentences = await loadLocalGameData(ClickItEasyLocalData[theme]);

    const sentencesByNeededType = sentenceType !== sentenceTypes.random
        ? sentences.filter(sentence => sentence.type === sentenceType)
        : sentences;

    const sentencesByShuffled = shuffle(sentencesByNeededType);

    const sentencesByNeededLength = sentencesByShuffled.splice(0, answersQty);

    // ready normal and shuffled sentences array for views (exclude multi rendering)

    const normalSentences = [];
    const shuffledSentences = [];

    for (let i = 0; i < answersQty; i++) {
        const sentenceArray = sentencesByNeededLength[i].sentence.split(' ');

        normalSentences.push(sentenceArray);
        shuffledSentences.push(shuffle(sentenceArray));
    }

    return {
        sentences: sentencesByNeededLength,
        normalSentences,
        shuffledSentences,
        startTimer: getTimerValue(complexity) * 10
    };
};