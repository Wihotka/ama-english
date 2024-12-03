import {chunk, difference, random, shuffle, take, concat, differenceWith} from 'lodash';

import {GenerateGDCB} from '@custom-types';

import {LevitationGameT} from '../../type';

// @ts-ignore
export const generateGameData:GenerateGDCB<LevitationGameT> = async ({gameSettings, getWords, staticEngData}) => {
    const {level, theme, feathersQty, answersQty, course} = gameSettings;
    const {easySounds, difficultSounds, disabledSoundsWithDividedWords} = staticEngData;

    let words;
    let sounds;
    let rightIndexes;
    const studyStage = course - 1 ? [course - 1, course] : [course];
    
    if (level === 1) {
        const rightWords = await getWords({
            theme,
            wordsQty: answersQty,
            hasImg: true,
            studyStage
        }).then((data:any) => data.words);

        const otherWords = chunk(await getWords({
            theme: '',
            disabledThemes: [theme],
            wordsQty: feathersQty * answersQty - answersQty,
            hasImg: true,
            studyStage
        }).then((data:any) => data.words), feathersQty - 1);

        for (let i = 0; i < answersQty; i++) otherWords[i].unshift(rightWords[i]);

        words = otherWords;
    }

    if (level === 2) {
        const rightWords = await getWords({
            theme,
            wordsQty: answersQty,
            isDividedWord: true,
            studyStage
        }).then((data:any) => data.words);

        const allTranscriptions = easySounds.concat(difficultSounds);

        const rightTranscriptions = [];
        const otherTranscriptions = [];
        const rightSyllablesIndexes = [];

        for (let i = 0; i < answersQty; i++) {
            const randomIndex = random(0, rightWords[i].dividedTranscription.length - 1);

            rightTranscriptions.push(rightWords[i].dividedTranscription[randomIndex]);
            rightSyllablesIndexes.push(randomIndex);
        }

        const otherTranscriptionsByDifference = difference(allTranscriptions, rightTranscriptions);

        const otherTranscriptionsByShuffleAndSplice = [];

        for (let i = 0; i < answersQty; i++)
            otherTranscriptionsByShuffleAndSplice
                .push(take(shuffle(otherTranscriptionsByDifference), feathersQty - 1));

        otherTranscriptions.push(...otherTranscriptionsByShuffleAndSplice);

        for (let i = 0; i < rightTranscriptions.length; i++) otherTranscriptions[i].unshift(rightTranscriptions[i]);

        words = rightWords;
        sounds = otherTranscriptions;
        rightIndexes = rightSyllablesIndexes;
    }

    if (level === 3) {
        const fetchWords = await getWords({
            theme,
            wordsQty: answersQty * feathersQty,
            isDividedWord: true,
            isNeedDisabledSounds: true,
            studyStage
        }).then((data:any) => data.words);

        // Исключаем слова с пробелом из массива
        const filteredFetchWords = fetchWords.filter((word:any) => !word.word.includes(' '));

        const rightWords = take(shuffle(filteredFetchWords), answersQty);

        const rounds:Array<any> = [];
        const indexes = [];

        for (let i = 0; i < answersQty; i++) {
            rounds.push(concat(
                rightWords[i],
                take(shuffle(differenceWith(filteredFetchWords, [rightWords[i]])),feathersQty - 1)
            ));
        }

        for (let i = 0; i < rounds.length; i++) {
            const subIndexes:Array<number> = [];

            for (let j = 0; j < rounds[i].length; j++) {

                const getNewSoundIndex = (i:number, j:number):number => {
                    const currentRandomIndex = random(0, rounds[i][j].dividedWord.length - 1);
                    const currentSound = rounds[i][j].dividedTranscription[currentRandomIndex];
                    const firstSound = rounds[i][0].dividedTranscription[subIndexes[0]];

                    // блокируем ə, у которого нет звука
                    const isAlreadyWas = currentSound === firstSound;
                    const isDisabledSound = disabledSoundsWithDividedWords.includes(currentSound);

                    if (!isAlreadyWas && !isDisabledSound) return currentRandomIndex;

                    return getNewSoundIndex(i, j);
                };

                subIndexes.push(getNewSoundIndex(i, j));
            }

            indexes.push(subIndexes);
        }

        words = rounds;
        rightIndexes = indexes;
    }

    const colorOrder = Array(answersQty).fill(0).map(() => shuffle(Array(feathersQty).fill(0).map((e, i) => i + 1)));

    return {
        words,
        sounds,
        rightIndexes,
        colorOrder
    };
};