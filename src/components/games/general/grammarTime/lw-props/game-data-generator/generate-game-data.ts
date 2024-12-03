import {GenerateGDCB, ThemeGrammarTime} from '@custom-types/game';
import {loadLocalGameData} from '@lib/game/utils';
import {GrammarTimeLocalData, GrammarTimeSimpleItem} from '@lib/game/utils/game-local-data-loader/types';
import {difference, random, sampleSize, shuffle, uniq} from 'lodash';
import {GrammarTimeGameL1T} from '../../levels/level1/type';
import {GrammarTimeGameL2T} from '../../levels/level2/type';
import {GrammarTime_StaticElement, GrammarTime_Task, GrammarTime_VariantElement,} from '../../type';
import {getStaticElements} from './get-static-elements';
import {getVariantElements} from './get-variant-elements';

export const generateGameData = async <
    T extends GrammarTimeGameL1T | GrammarTimeGameL2T
>({
    gameSettings,
    gameConfig,
}:Parameters<GenerateGDCB<T>>[0]):ReturnType<GenerateGDCB<T>> => {
    const {levelResolver, maxMistakesResolver} = gameConfig;
    const {theme, answersQty, level} = gameSettings;
    const qPerAnswer = levelResolver[level];
    const maxMistakesQty = maxMistakesResolver[level];
    const gameTasks:GrammarTime_Task[] = [];
    const seenPlaceholders:string[] = [];

    if (theme === ThemeGrammarTime.grammarConstructions) {
        const localData = await loadLocalGameData(GrammarTimeLocalData[theme]);

        for (let i = 0; i < answersQty; i++) {
            const answers = sampleSize(localData, qPerAnswer);

            const variants = answers.map(({variants, variantsPlaceholders}) => ({variants, variantsPlaceholders}));
            const sentenceEls = answers.map(({sentence, sentencePlaceholders}) => ({sentence, sentencePlaceholders}));

            const variantElements:GrammarTime_VariantElement[] = getVariantElements(variants, seenPlaceholders);
            const staticElements:GrammarTime_StaticElement[] = getStaticElements(sentenceEls, variantElements, seenPlaceholders);

            gameTasks.push({
                staticElements: shuffle(staticElements),
                variantElements: shuffle(variantElements),
            });
        }
    } else {
        const localData = await loadLocalGameData(GrammarTimeLocalData[theme]);

        for (let i = 0; i < answersQty; i++) {
            const answers = [];
            const staticElements:GrammarTime_StaticElement[] = [];
            const variantElements:GrammarTime_VariantElement[] = [];
            const firstParts:Array<string> = shuffle(uniq(localData.map(({firstPart}) => firstPart)));

            for (let i = 0; i < qPerAnswer; i++) {
                const unusedOptions:Array<GrammarTimeSimpleItem> = difference(localData, answers);

                const receivedOption = firstParts[i]
                    ? sampleSize(unusedOptions.filter(el => el.firstPart === firstParts[i]), 1)
                    : sampleSize(unusedOptions.filter(el => el.firstPart === firstParts[random(0, firstParts.length - 1)]), 1);

                answers.push(...receivedOption);
            }

            shuffle(answers).map((el, i) => {
                staticElements.push({variantId: i, text: el.firstPart, indicator: el.firstPart});
                variantElements.push({id: i, text: el.secondPart.replace('____', '_'), indicator: el.firstPart});
            });

            gameTasks.push({
                staticElements: shuffle(staticElements),
                variantElements: shuffle(variantElements)
            });
        }
    }

    return {
        gameTasks,
        qPerAnswer,
        maxMistakesQty,
    };
};
