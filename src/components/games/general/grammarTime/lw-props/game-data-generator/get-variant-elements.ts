import {GrammarTimeVariant} from '@lib/game/utils/game-local-data-loader/types';
import {sample} from 'lodash';
import {GrammarTime_VariantElement} from '../../type';
import {replacePlaceholders} from '../../utils';

type GetVariantElementsT = {
    variants:GrammarTimeVariant[];
    variantsPlaceholders:string[] | undefined;
};

export const getVariantElements = (
    arr:GetVariantElementsT[],
    seen:string[]
):GrammarTime_VariantElement[] =>
    arr.map(({variants, variantsPlaceholders}, i) => {
        const randomVariant = sample(variants) as GrammarTimeVariant;
        const {text, placeholders} = randomVariant;
        let variantText = text;

        if (variantsPlaceholders) {
            variantText = replacePlaceholders({
                text,
                placeholders: variantsPlaceholders,
                seen
            });
        } else if (placeholders) {
            variantText = replacePlaceholders({text, placeholders, seen});
        }

        return {
            id: i,
            text: variantText,
        };
    });
