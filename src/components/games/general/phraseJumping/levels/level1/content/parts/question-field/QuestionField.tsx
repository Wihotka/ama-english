import React from 'react';
import {classNames} from 'js-data-utils';

import {QuestionFieldP} from './../../../type';

import styles from './styles.scss';
import {LocalizedText} from '@components/common';

export const QuestionField:React.FC<QuestionFieldP> = (props) => {
    const {question, isFieldUpdate, theme} = props;
    const styleUpdateField = !isFieldUpdate && styles.view;

    const styleQuestionField = classNames(styles.questionField, styleUpdateField);

    return (
        <div className={styleQuestionField}>
            <h2 className={styles.title}>
                <LocalizedText name={`themeTask.${theme}`} path={'games/general/phraseJumping/static/translation'}/>:</h2>
            <p className={styles.text}>{question}</p>
        </div>
    );
};