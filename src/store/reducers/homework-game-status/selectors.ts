import {StoreInner} from '@store';

const status = (store:StoreInner) => store.homeworkGameStatus;

export const homeworkGameStatusSelectors = {
    status,
};