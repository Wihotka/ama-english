import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {setPageTitle} from '@reducers/page-title/dispatchers';

import {StudyLink} from './parts';
import {FeedbackChecker} from '@components/common/game/level-wrapper/content/parts/modals/resolvers/finish/parts';

import styles from './styles.scss';
import {runHideLoader, showLoader} from '@reducers/preloader/dispatchers';

import {getStudyProgress, getMessage, getStudyStageLinks} from './utils';

import {metadataSelectors} from '@reducers/metadata/selectors';
import {subjectInfoSelectors} from '@reducers/subject-info/selectors';

export default () => {
    const {sections, nextLessonDate} = useSelector(metadataSelectors.metadata);
    const studyStage = useSelector(subjectInfoSelectors.studyStage);
    const nativeLangCode = useSelector(metadataSelectors.nativeLangCode);
    const {t} = useTranslation('games/translation');
    const tStudyStages = useTranslation('study-stages/translation').t;
    const descriptions:any = tStudyStages('descriptions', {returnObjects: true});
    const messages:any = tStudyStages('messages', {returnObjects: true});

    const progressObj = getStudyProgress(sections);
    const SSL = getStudyStageLinks(sections);

    const levelStr = t('level');

    //вынес в отдельный еффект, т.к. язык страницы может меняться динамически
    useEffect(() => {
        setPageTitle(`${levelStr} ${studyStage}`);
    }, [levelStr, studyStage]);

    useEffect(() => {
        // setStudyStage(+studyStage);

        runHideLoader(1000);

        return () => {
            showLoader();
        };
    }, [studyStage]);

    // throw new Error('ssss');

    return (
        <div className={styles.links}>
            <FeedbackChecker/>
            {SSL.map((link) => {
                const {name, disabled} = link;
                const progress = progressObj[name];
                const description = descriptions[name];
                const msg = getMessage(name, nextLessonDate, messages, progress);

                return <StudyLink
                    key={name}
                    link={link}
                    progress={progress}
                    disabled={(name === 'vocabulary' && nativeLangCode === 'uk') ? true : disabled}
                    msg={msg}
                    description={description}
                />;
            })}
        </div>
    );
};