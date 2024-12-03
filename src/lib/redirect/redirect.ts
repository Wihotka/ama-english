import {pathConfig} from '@global-config/path-config';
import {runMoveAction} from '@lib/redirect/utils';

export const moveToRoot = () => {
    runMoveAction(pathConfig.root);
};

export const moveToHost = () => {
    runMoveAction(pathConfig.host);
};

export const moveToHomework = (force:boolean) => {
    runMoveAction(pathConfig.homework, force);
};

export const moveToBase = () => {
    runMoveAction(pathConfig.base);
};