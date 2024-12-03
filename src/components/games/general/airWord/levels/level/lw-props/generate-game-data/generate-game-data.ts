import {shuffle, take, values, keys, flatten, remove, random} from 'lodash';

import {GenerateGDCB} from '@custom-types';
import {AirWordGameT} from '../../type';
import {AirWordLocalData, AirWordLocalDataByTheme} from '@lib/game/utils/game-local-data-loader/types';
import {loadLocalGameData} from '@lib/game/utils';

export const generateGameData:GenerateGDCB<AirWordGameT> = async ({gameSettings}) => {
    const {theme, answersQty, planesQty, level} = gameSettings;

    const wordsForTask:any = [];
    const wordsForPlanes:any = [];
    const correctWords:any = [];

    const options:AirWordLocalDataByTheme = await loadLocalGameData(AirWordLocalData.words);

    const optionKeys = keys(options);
    const optionValues = values(options);
    const currentThemeIndex = optionKeys.indexOf(theme);
    const wordsByCurrentTheme = optionValues[currentThemeIndex];
    const wordsByOtherThemes = shuffle(flatten(remove(optionValues, (el, i) => i !== currentThemeIndex)));

    if (level === 1) {
        for (let i = 0; i < answersQty; i++) {
            const wordsOfCurrentThemeForRound = take(shuffle(wordsByCurrentTheme), 4);
            const correctWord = wordsOfCurrentThemeForRound[random(0, wordsOfCurrentThemeForRound.length - 1)];

            correctWords.push(correctWord);
            wordsForTask.push(wordsOfCurrentThemeForRound);

            wordsForPlanes
                .push(
                    shuffle([
                        ...wordsByOtherThemes.slice(i * planesQty, i * planesQty + planesQty - 1),
                        correctWord
                    ])
                );
        }
    }

    if (level === 2) {
        for (let i = 0; i < answersQty; i++) {
            const correctWord = wordsByOtherThemes[i];
            const wordsOfCurrentThemeForRound = take(shuffle(wordsByCurrentTheme), 3);

            const roundSet = shuffle([...wordsOfCurrentThemeForRound, correctWord]);

            wordsForTask.push(roundSet);
            wordsForPlanes.push(roundSet);
            correctWords.push(correctWord);
        }
    }

    return {wordsForTask, wordsForPlanes, correctWords};
};