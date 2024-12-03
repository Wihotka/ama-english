import {GenerateGDCB} from '@custom-types/game';
import {sampleSize, shuffle} from 'lodash';
import {
    GuessWhatGameT,
    GuessWhat_Answer,
    GuessWhat_Task,
    GuessWhat_Word
} from '../../../../type';

export const generateGameData:GenerateGDCB<GuessWhatGameT> = async ({
    gameSettings,
    gameConfig,
    getWords,
}) => {
    const {wordsQtyResolver, maxMistakesResolver, descriptionResolver} = gameConfig;
    const {level, answersQty, theme, complexity, hint, course} = gameSettings;
    const wordsQty = wordsQtyResolver[level];
    const maxMistakesQty = maxMistakesResolver[level];
    const descriptionComplexity = descriptionResolver[complexity];

    const {words} = await getWords({
        wordsQty: 50,
        theme,
        hasImg: true,
        description: descriptionComplexity,
        studyStage: course - 1 ? [course - 1, course] : [course]
    });
    const randomGuessedWords = sampleSize(words, answersQty);

    const taskData:GuessWhat_Task[] = [];

    for (let i = 0; i < answersQty; i++) {
        const guessedWord = randomGuessedWords[i];
        const {imageUrls: img, soundUrl, word, description} = guessedWord;
        const taskWord:GuessWhat_Word = {
            description: description[descriptionComplexity],
            img,
            word,
            soundUrl,
        };

        const filteredWords = words.filter(({word}) => word !== guessedWord.word);
        const answers:GuessWhat_Answer[] = sampleSize(
            filteredWords.map(({imageUrls: img, word}) => ({img, word})),
            wordsQty - 1
        );

        const guessAnswer:GuessWhat_Answer = {
            img,
            word,
        };

        taskData.push({
            taskWord,
            answers: shuffle([...answers, guessAnswer]),
        });
    }

    return {
        taskData,
        maxMistakesQty,
        isHintEnabled: Boolean(hint),
    };
};
