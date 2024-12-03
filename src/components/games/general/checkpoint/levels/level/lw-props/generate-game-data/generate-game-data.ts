import {random, shuffle, keys} from 'lodash';

import {loadLocalGameData} from '@lib/game/utils';

import {CheckpointLocalData, CheckpointLocalDataItem} from '@lib/game/utils/game-local-data-loader/types';
import {GetWordsP, GetWordsT, WordItem} from '@lib/game/utils/get-words/types';
import {GenerateGDCB, WordsThemes} from '@custom-types';
import {CheckpointGameT, DataItem} from '../../type';

export const generateGameData:GenerateGDCB<CheckpointGameT> = async (props) => {
    const {gameSettings, staticEngData, getWords} = props;
    const {level, course} = gameSettings;
    const {keyboard} = staticEngData;

    const studyStage = course - 1 ? [course - 1, course] : [course];
    const localOptions:Array<CheckpointLocalDataItem> = await loadLocalGameData(CheckpointLocalData[level === 1 ? 'firstLevel' : 'secondLevel']);
    const neededOptions = [];

    const wordsForLocalOptions = await getWordsForLocalOptions({localOptions, studyStage, getWords});

    const casesWithImage = localOptions.filter((localOption) => localOption.case === 'withImg');

    casesWithImage.forEach((currentOption) => {
        const {case: currentCase, theme: currentTheme, id} = currentOption;

        const localOption:DataItem = {id, case: currentCase, answer: ''};

        const fetchOptionIndex = wordsForLocalOptions.findIndex(({theme, imageUrls}) => (theme === currentTheme && imageUrls) );
        const fetchOption = [wordsForLocalOptions[fetchOptionIndex]];

        wordsForLocalOptions.splice(fetchOptionIndex, 1);

        localOption.img = fetchOption[0].imageUrls?.join();
        localOption.answer = fetchOption[0].word;

        neededOptions.push(localOption);
    });

    for (let i = 0; i < localOptions.length; i++) {
        const currentOption = localOptions[i];
        const {case: currentCase, theme: currentTheme, id, wrongTheme, options} = currentOption;

        const localOption:DataItem = {id, case: currentCase, answer: ''};

        if (currentCase === 'withImg') {
            continue;
        }

        if (currentCase === 'withVoice') {
            // @ts-ignore
            // const fetchOption = await getFetchOption({theme: currentTheme, wordsQty: 1});
            // const fetchOptionIndex = requestsRes.findIndex(({theme, imageUrls}) => (theme === currentTheme && !imageUrls));
            const fetchOptionIndex = wordsForLocalOptions.findIndex(({theme}) => theme === currentTheme);
            const fetchOption = [wordsForLocalOptions[fetchOptionIndex]];

            wordsForLocalOptions.splice(fetchOptionIndex, 1);

            localOption.word = fetchOption[0].word;
            localOption.answer = fetchOption[0].word;
            localOption.sound = fetchOption[0].soundUrl;
            localOption.theme = currentTheme;
        }

        if (currentCase === 'withTranscription') {
            // @ts-ignore
            // const fetchOption = await getFetchOption({theme: currentTheme, wordsQty: 1});

            const fetchOptionIndex = wordsForLocalOptions.findIndex(({theme}) => theme === currentTheme);
            const fetchOption = [wordsForLocalOptions[fetchOptionIndex]];

            wordsForLocalOptions.splice(fetchOptionIndex, 1);

            localOption.transcription = fetchOption[0].transcription;
            localOption.answer = fetchOption[0].word;
            localOption.theme = currentTheme;
        }

        if (currentCase === 'withVoiceTranscription') {
            // @ts-ignore
            // const fetchOption = await getFetchOption({theme: currentTheme, wordsQty: 1});

            const fetchOptionIndex = wordsForLocalOptions.findIndex(({theme}) => theme === currentTheme);
            const fetchOption = [wordsForLocalOptions[fetchOptionIndex]];

            wordsForLocalOptions.splice(fetchOptionIndex, 1);

            localOption.transcription = fetchOption[0].transcription;
            localOption.word = fetchOption[0].word;
            localOption.answer = fetchOption[0].word;
            localOption.sound = fetchOption[0].soundUrl;
            localOption.theme = currentTheme;
        }

        if (currentCase === 'withExtraWordSearching') {
            const currentWrongTheme = wrongTheme;

            // @ts-ignore
            // const correctFetchOption = await getFetchOption({theme: currentTheme, wordsQty: 3});

            const correctFetchOption = [];

            for (let i = 0; i < 3; i++) {
                const correctFetchOptionIndex = wordsForLocalOptions.findIndex(({theme}) => theme === currentTheme );

                correctFetchOption.push(wordsForLocalOptions[correctFetchOptionIndex]);
                wordsForLocalOptions.splice(correctFetchOptionIndex, 1);
            }

            // @ts-ignore
            // const incorrectFetchOption = await getFetchOption({theme: currentWrongTheme, wordsQty: 1});

            const incorrectFetchOptionIndex = wordsForLocalOptions.findIndex(({theme}) => theme === currentWrongTheme);
            const incorrectFetchOption = [wordsForLocalOptions[incorrectFetchOptionIndex]];

            wordsForLocalOptions.splice(incorrectFetchOptionIndex, 1);

            localOption.answer = incorrectFetchOption[0].word;
            localOption.words = shuffle(correctFetchOption.map(item => item.word).concat(localOption.answer));
            localOption.theme = currentTheme;
        }

        if (currentCase === 'withSentenceFilling') {
            const getRandomOption = ():any => {
                const randomKey = optionKeys[random(0, optionKeys.length - 1)];
                const optionSentences = options[randomKey];

                return optionSentences.length === 0 ? getRandomOption() : [randomKey, optionSentences];
            };

            const optionKeys = keys(options);
            const [randomKey, optionSentences] = getRandomOption();
            const randomSentence = optionSentences[random(0, optionSentences.length - 1)];

            localOption.words = optionKeys;
            localOption.answer = randomKey;
            localOption.sentence = randomSentence;
        }

        if (currentCase === 'withSentenceMaking') {
            const randomOptionIndex = random(0, options.length - 1);

            localOption.answer = options[randomOptionIndex].answer;
            localOption.words = shuffle(options[randomOptionIndex].words);
            localOption.img = options[randomOptionIndex].imgUrl;
        }

        neededOptions.push(localOption);
    }

    return {
        options: shuffle(neededOptions),
        keyboard
    };
};

type GetWordsForLocalOptionsT = {
    localOptions:Array<CheckpointLocalDataItem>;
    studyStage:Array<number>;
    getWords:GetWordsT;
};

const getWordsForLocalOptions = async (p:GetWordsForLocalOptionsT) => {
    const {localOptions, ...otherP} = p;
    const requests = getRequests(localOptions);

    return (await makeRequests(requests, otherP)).flat();
};

type RequestsObgT = {
    [key:string]:number;
};

const getRequests = (localOptions:Array<CheckpointLocalDataItem>) => {
    const requests:RequestsObgT = {};

    localOptions.forEach((localOption) => {
        const {case: currentCase, theme, wordsQty, wrongTheme, wrongWordsQty} = localOption;
        const withImage = currentCase === 'withImg';

        if (theme && typeof wordsQty === 'number') {
            writeRequestsObg(requests, theme, withImage, wordsQty);
        }

        if (wrongTheme && typeof wrongWordsQty === 'number') {
            writeRequestsObg(requests, wrongTheme, withImage, wrongWordsQty);
        }
    });

    return requests;
};

const writeRequestsObg = (requests:RequestsObgT, theme:string, withImage:boolean, wordsQty:number) => {
    if (!requests[`${theme}&${withImage}`]) {
        requests[`${theme}&${withImage}`] = wordsQty;
    } else {
        requests[`${theme}&${withImage}`] += wordsQty;
    }
};

const makeRequests = async (requests:RequestsObgT, p:Omit<GetWordsForLocalOptionsT, 'localOptions'>) => {
    const {studyStage, getWords} = p;
    const resRequests = [];

    for (const requestKey in requests) {
        const wordsQty = requests[requestKey];
        const [theme, hasImg] = requestKey.split('&') as [WordsThemes, string];
        const requestObj = {
            theme,
            ...hasImg === 'true' ? {
                hasImg: true
            } : null,
            wordsQty
        };

        resRequests.push(requestObj);
    }

    const getFetchOption = async (condition:GetWordsP):Promise<Array<WordItem>> =>
        await getWords({...condition, studyStage})
            .then(data => data.words);

    return await Promise.all(resRequests.map((request) => getFetchOption(request)));
};
