import {Metadata} from '@custom-types';
import {StudyStageLinkT} from '../types';

export const getStudyProgress = (metadataSections:Metadata['sections']):{[key:StudyStageLinkT['name']]:number} => {
    if (!metadataSections.hometask.status || !metadataSections.hometask.data) return {
        textbook: 0,
        challenge: 0,
        vocabulary: 0,
    };

    const {progressPercent} = metadataSections.hometask.data;

    return {
        textbook: 0,
        challenge: progressPercent,
        vocabulary: 0,
    };
};