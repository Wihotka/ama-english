import {GenerateGDCB} from '@custom-types/game';
import {shuffle} from 'lodash';
import {MakeYourChoiceGameT, MakeYourChoice_Word} from '../../../../type';
import {getUniqueTranslation} from '../../utils';

export const generateGameData:GenerateGDCB<MakeYourChoiceGameT> = async ({
    gameSettings,
    getWords,
}) => {
    const {level} = gameSettings;
    const {words} = await getWords({wordsQty: 250, hasImg: level === 1, studyStage: [1, 2]});

    const translationArray = words.map(({translation}) => translation);
    const wordsData:MakeYourChoice_Word[] = shuffle(words.map(
        ({imageUrls, word, translation}) => ({
            word,
            img: imageUrls ? imageUrls[0] : undefined,
            answers: shuffle([
                {answer: translation, isCorrect: true},
                {
                    answer: getUniqueTranslation(translationArray, translation),
                    isCorrect: false,
                },
            ]),
        })
    ));

    return {
        wordsData,
    };
};
