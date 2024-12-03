// export type Metadata = {
//     common:{
//         user:string;
//         ID:number;
//         langCode:string;
//     };
// };

import {SubjectPageDataResp} from 'amakids-subjects-api-connector/lib/res-types';

export type Metadata = SubjectPageDataResp & {
    studyStage:number;
    nextLessonDate:string;
    sections:{
        hometask:{
            status:boolean;
            data?:{
                active:boolean;
                progressPercent:number;
            };
        };
        vocabulary:boolean
    };
    canCheckStudyStage:boolean;
    dictionaryLink:string;
};
