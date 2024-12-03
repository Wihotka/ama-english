import {HomeworkData} from '@components/routes/challenge/types';

export type HomeworkProgress = HomeworkData['homeworkData']['progress'];

export type HomeworkGameStatus = {
    status:HomeworkGameStatusE|null;
};

export enum HomeworkGameStatusE {
    levelDone = 'levelDone',
    levelNotDone = 'levelNotDone',
    roundDone = 'roundDone'
}