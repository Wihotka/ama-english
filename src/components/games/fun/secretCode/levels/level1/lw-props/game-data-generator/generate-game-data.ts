import {GenerateGDCB} from '@custom-types/game';
import {SecretCodeGameT} from '../../../../type';
import {filterWords, getAlphabet} from './utils';

export const generateGameData:GenerateGDCB<SecretCodeGameT> = async (props) => {
    const {getWords, gameSettings} = props;
    const {complexity} = gameSettings;
    const alphabet = getAlphabet();
    const {words: wordsData} = await getWords({wordsQty: 250, studyStage: [1, 2]});

    const words = filterWords({wordsData, complexity, alphabet});

    return {
        words,
        alphabet,
    };
};
