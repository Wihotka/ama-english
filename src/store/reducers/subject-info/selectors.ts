import {StoreInner} from '@store';

const studyStage = (store:StoreInner) => store.subjectInfo.studyStage;

export const subjectInfoSelectors = {
    studyStage
};