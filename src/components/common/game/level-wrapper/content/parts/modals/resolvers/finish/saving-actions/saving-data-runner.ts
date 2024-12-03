import {classroomAction, homeworkAction} from './actions';
import {SavingGameP} from './types';

export const runSaveData = (p:SavingGameP) => {
    const {hometaskId} = p.formData;

    if (hometaskId) {
        homeworkAction(p);
    } else {
        classroomAction(p);
    }
};