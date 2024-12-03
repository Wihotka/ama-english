import {GenerateGDCB} from '@custom-types';
import {TimelineGameL1T, TimelineL1_GameData, Variant} from '../../type';

import {generateVariantOptions} from './generate-variant-options';

export const generateGameData:GenerateGDCB<TimelineGameL1T> = async ({gameSettings}):Promise<TimelineL1_GameData> => {
    const {answersQty, level, theme} = gameSettings;

    const arrayOptions:Variant[] = await generateVariantOptions({theme, level, answersQty});
    
    return {
        answersQty, level, arrayOptions
    };
};