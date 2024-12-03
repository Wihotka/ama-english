import {Metadata} from '@custom-types';
import {StudyStageLinkT} from '../types';

export const getMessage = (
    name:StudyStageLinkT['name'],
    nextLessonDate:Metadata['nextLessonDate'],
    messages:{[key:string]:string},
    progress:number) => {
    if (name === 'challenge') {
        if (nextLessonDate && progress < 100) {
            const date = new Date(nextLessonDate);

            console.log(date);

            return `${messages.dueTo} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        }
    }

    return undefined;
};