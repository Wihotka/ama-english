// import {Metadata} from '@custom-types';
import {setMetadata} from '@reducers/metadata/dispatchers';
import {setAppLang} from '@reducers/langCode/dispatchers';
import {ApiConnector} from '@lib/api-connector';
import {Subject} from '@global-config/subject';
import {loadLang} from '../../../../../i18n';
import {Metadata} from '@custom-types';
import {pathConfig} from '@global-config/path-config';
import {setStudyStage} from '@reducers/subject-info/dispatchers';
import {userStatusesWhoCanChangeStudyStage} from '@global-config/study-stages';

export const loadMetadata = (setIsLoadedData:() => void) => {
    ApiConnector.getSubjectPageData(Subject.id).then((data) => {
        const {settings, user: {status}} = data.common;

        const langCode = settings?.langCode;
        // const langCode = 'uk';

        // todo добавить в data.games поле arena

        const newData:Metadata = {
            ...data,
            studyStage: data.studyStage
                ? data.studyStage
                : 1,
            nextLessonDate: data.nextLessonDate
                ? data.nextLessonDate
                : '',
            // тип SubjectPageDataResp не включает в себя sections.vocabulary (временное поле)
            // @ts-ignore
            sections: data.sections
                ? data.sections
                : {
                    hometask: {status: false},
                    vocabulary: false
                },
            // @ts-ignore
            dictionaryLink: data.dictionaryLink ? data.dictionaryLink : pathConfig.dictionaryLink,
            canCheckStudyStage: userStatusesWhoCanChangeStudyStage.includes(status)
        };

        loadLang(langCode).then();
        setStudyStage(newData.studyStage);
        setAppLang(langCode);

        setMetadata(newData);

        setIsLoadedData();
    });
    
};

// const ttt = () => new Promise((res:(metadata:Metadata) => void) => {
//     setTimeout(() => {
//         res(isolatedMetadata);
//     }, 1);
// });
//
// const isolatedMetadata:Metadata = {
//     common: {
//         user: 'Vova',
//         ID: 1,
//         langCode: 'ru'
//     }
// };