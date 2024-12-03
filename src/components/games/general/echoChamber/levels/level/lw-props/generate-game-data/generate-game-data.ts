import {shuffle} from 'lodash';

import {loadLocalGameData} from '@lib/game/utils';

import {GenerateGDCB} from '@custom-types';
import {EchoChamberGameT} from '../../type';
import {EchoChamberLocalData, EchoChamberLocalDataItem} from '@lib/game/utils/game-local-data-loader/types';

export const generateGameData:GenerateGDCB<EchoChamberGameT> = async ({gameSettings}) => {
    const {answersQty} = gameSettings;

    const sentences:Array<EchoChamberLocalDataItem> = await loadLocalGameData(EchoChamberLocalData.sentences);
    const sentencesByShuffled = shuffle(sentences);
    const sentencesByLength = sentencesByShuffled.slice(0, answersQty);

    return {
        sentences: sentencesByLength
    };
};