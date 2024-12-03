import React from 'react';
import {useSelector} from 'react-redux';
import {classNames} from 'js-data-utils';
import {setStudyStage} from '@reducers/subject-info/dispatchers';
import {SubTitle} from '@components/common/global-settings/parts/sub-title';

import styles from './styles.scss';

import {subjectInfoSelectors} from '@reducers/subject-info/selectors';
import {availableStudyStages} from '@global-config/study-stages';

export const StudyStageSetter = () => {
    const currentStudyStage = useSelector(subjectInfoSelectors.studyStage);

    return (
        <div>
            <SubTitle name={'studyStage'}/>
            <div className={styles.buttons}>
                {availableStudyStages.map((studyStage) => {
                    const btnCn = classNames(styles.btn, (currentStudyStage === studyStage ? styles.btn_active : ''));

                    return (
                        <button key={studyStage} className={btnCn} onClick={() => setStudyStage(studyStage)}>{studyStage}</button>
                    );
                })}
            </div>
        </div>
    );
};