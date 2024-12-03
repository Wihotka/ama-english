import {GenerateGDCB} from '@custom-types/game';
import {loadLocalGameData} from '@lib/game/utils';
import {TextTeaserLocalData} from '@lib/game/utils/game-local-data-loader/types';
import {sample, shuffle} from 'lodash';
import {TextTeaserGameT, TextTeaser_TextPart} from '../../../../type';

export const generateGameData:GenerateGDCB<TextTeaserGameT> = async ({
    gameSettings,
}) => {
    const {hint, level} = gameSettings;
    const localData = await loadLocalGameData(TextTeaserLocalData['texts']);
    const textsData = localData[level];
    const randomText = sample(textsData) as {
        title:string;
        sentences:string[];
    };
    const {title, sentences} = randomText;

    let textParts:TextTeaser_TextPart[] = sentences.map((text, i) => ({
        text,
        isCorrect: false,
        correctPosition: i + 1,
    }));

    while (textParts[0].correctPosition === 1) {
        textParts = shuffle(textParts);
    }

    return {
        maxMistakesQty: 3,
        title,
        textParts,
        isHintEnabled: Boolean(hint),
    };
};
