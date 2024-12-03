import {getTimeStrWithTexts, getWordEndFromNumber} from 'js-data-utils';

import {GameModalsLang, StartModalIndicatorsT, StartModalStarItemArrT} from '@custom-types';

export const getStarContent = ([name, val]:StartModalStarItemArrT, gameStartL:GameModalsLang['gameStart']) =>
    objectContentResolver[name](gameStartL, val);

const getTimeStr = (gameStartL:GameModalsLang['gameStart'], gameTime:StartModalStarItemArrT[1]) => {
    const {completeTaskFor, min, sec} = gameStartL;

    return completeTaskFor + ' ' + getTimeStrWithTexts(gameTime, [min, sec], true);
};

// const getStrFromLocalizationFile = (gameStarsTextL, str) => gameStarsTextL[str] ? gameStarsTextL[str] : str;

const objectContentResolver = {
    // 'labelBeforeVal': (gameStarsTextL, gameStartL, item) => {
    //     const {labelBeforeVal, val, labelAfterVal} = item;
    //
    //     const valStr = val ? ` ${val}` : '';
    //
    //     const labelAfterValStr = labelAfterVal
    //         ? ` ${labelAfterVal}`
    //         : '';
    //
    //     return labelBeforeVal + valStr + labelAfterValStr + '.';
    //     // return gameStarsTextL[labelBeforeVal] + valStr + labelAfterValStr + '.';
    //
    //     // return gameStarsTextL[label] + '.';
    // },
    [StartModalIndicatorsT.rightAnswersQty]: (gameStartL:GameModalsLang['gameStart'], rightAnswersQty:StartModalStarItemArrT[1]) => {
        const {give, textAnswers = ['', '', ''], textRight = ['', '', '']} = gameStartL;

        return `${give} ${rightAnswersQty} ${getWordEndFromNumber(rightAnswersQty, textRight)} ${getWordEndFromNumber(rightAnswersQty, textAnswers)}`;
    },
    [StartModalIndicatorsT.maxErrors]: (gameStartL:GameModalsLang['gameStart'], maxErrors:StartModalStarItemArrT[1]) => {
        const {youCanDo, textErrors = ['', '', ''], noErrors} = gameStartL;

        return maxErrors === 0
            ? noErrors
            : `${youCanDo} ${maxErrors} ${getWordEndFromNumber(maxErrors, textErrors)}`;
    },
    [StartModalIndicatorsT.collectItems]: (gameStartL:GameModalsLang['gameStart'], collectItemsQty:StartModalStarItemArrT[1]) => {
        const {collectItems, items = ['', '', '']} = gameStartL;

        return `${collectItems} ${collectItemsQty} ${getWordEndFromNumber(collectItemsQty, items)}`;
    },
    [StartModalIndicatorsT.gameTime]: getTimeStr
};

