import {random} from 'lodash';

import {loadLocalGameData} from '@lib/game/utils';
import {onHintData} from './hint-data';

import {GenerateGDCB} from '@custom-types';
import {PhraseJumpingLocalData} from '@lib/game/utils/game-local-data-loader/types';
import {PhraseJumping_GameData, PhraseJumpingGameT, FetchDataT, VariantT} from './../../type';

export const generateGameData:GenerateGDCB<PhraseJumpingGameT> = async ({gameSettings}):Promise<PhraseJumping_GameData> => {
    const {theme, answersQty} = gameSettings;
    const data = await fetchData({theme, answersQty});

    return {
        variants: [...data],
        hintContent: onHintData(theme)
    };
};

const fetchData:FetchDataT = async ({theme, answersQty}) => {
    const data = await loadLocalGameData(PhraseJumpingLocalData[theme]);
    let variantsAnswer = [...data];
    const result:VariantT[] = [];

    for (let answer = 0; answer <= answersQty; answer++) {

        variantsAnswer = variantsAnswer.filter(variant => !result?.find(resObj => variant.question === resObj.question));

        const {question, correctAnswers, punctuationMark, typePrompt} = variantsAnswer[random(variantsAnswer.length - 1)];

        result.push({
            question: question.replace(/ /g, ' / '),
            correctAnswers,
            punctuationMark,
            typePrompt
        });
    }

    return result;
};