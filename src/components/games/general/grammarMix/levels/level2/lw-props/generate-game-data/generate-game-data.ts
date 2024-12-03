import {fetchData} from './fetch-data';

import {GenerateGDCB} from '@custom-types';
import {GrammarMixGameT2} from '../../type';

export const generateGameData:GenerateGDCB<GrammarMixGameT2> = async ({gameSettings}) => {

    const {theme, answersQty} = gameSettings;

    const variants = await fetchData({theme, answersQty});

    return {
        variants
    };
};