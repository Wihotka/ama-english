import {fetchData} from './fetch-data';

import {GenerateGDCB} from '@custom-types';
import {GrammarMixGameT} from '../../type';

export const generateGameData:GenerateGDCB<GrammarMixGameT> = async ({gameSettings}) => {

    const {theme, answersQty} = gameSettings;

    const variants = await fetchData({theme, answersQty});

    return {
        variants
    };
};