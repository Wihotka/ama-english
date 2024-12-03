import {GenerateGDCB} from '@custom-types/game';
import {loadLocalGameData} from '@lib/game/utils';
import {
    YesntLevel1TaskData,
    YesntLevel2TaskData,
    YesntLocalData,
} from '@lib/game/utils/game-local-data-loader/types';
import {sample, sampleSize, shuffle} from 'lodash';
import {YesntGameT, Yesnt_TaskQuestion} from '../../../../type';

const levelResover:{ [k:number]:keyof typeof YesntLocalData } = {
    1: 'levelOne',
    2: 'levelTwo',
};

export const generateGameData:GenerateGDCB<YesntGameT> = async ({
    gameSettings,
}) => {
    const {level, answersQty} = gameSettings;
    const resolvedLevel = levelResover[level];
    const levelData = await loadLocalGameData<YesntLocalData>(
        YesntLocalData[resolvedLevel]
    );

    if (level === 1) {
        const tasks = levelData as YesntLevel1TaskData[];
        const randomTask = sample(tasks);

        if (randomTask) {
            const {taskQuestions, ...rest} = randomTask;
            const data = {
                ...rest,
                taskQuestions: sampleSize(shuffle(taskQuestions), answersQty),
            };

            return {taskData: data};
        }
    } else if (level === 2) {
        const tasks = levelData as YesntLevel2TaskData[];
        const randomTasks = sampleSize(tasks, answersQty);

        const data = randomTasks.map(({img, taskQuestions}) => ({
            img,
            taskQuestion: sample(taskQuestions) as Yesnt_TaskQuestion,
        }));

        return {taskData: data};
    }

    throw new Error('No task has been found');
};
