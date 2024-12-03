import {sample} from 'lodash';
import {
    GrammarTime_StaticElement,
    GrammarTime_VariantElement,
} from '../../type';
import {replacePlaceholders} from '../../utils';

type GetStaticElementsT = {
    sentence:string | string[];
    sentencePlaceholders:string[] | undefined;
};

export const getStaticElements = (
    arr:GetStaticElementsT[],
    variantElements:GrammarTime_VariantElement[],
    seen:string[]
):GrammarTime_StaticElement[] =>
    arr.map(({sentence, sentencePlaceholders}, i) => {
        let text:string;

        if (Array.isArray(sentence)) {
            text = sample(sentence) as string;
        } else {
            text = sentence;
        }

        if (sentencePlaceholders) {
            text = replacePlaceholders({
                text,
                placeholders: sentencePlaceholders,
                seen
            });
        }

        return {
            text,
            variantId: variantElements[i].id,
        };
    });
