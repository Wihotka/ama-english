import React from 'react';
import {upperFirst} from 'lodash';

import {LocalizedText} from '@components/common';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {TaskP} from '../../../type';

export const Task = (props:TaskP) => {
    const {level, theme, correctWords, wordsForTask, isFieldUpdate, correctWordStatus, currentWordsIndex} = props;

    const getWrapperClasses = () =>
        classNames(
            styles.wrapper,
            correctWordStatus === 'success' ? styles.wrapper__success : ''
        );

    const getListClasses = () =>
        classNames(
            styles.list,
            isFieldUpdate ? styles.update : ''
        );

    const getItemClasses = (word:string) =>
        classNames(
            styles.item,
            correctWords[currentWordsIndex] === word
                ? correctWordStatus === 'success'
                    ? styles[`item__success${level}`]
                    : styles[`item__hidden${level}`]
                : styles[`item__default${level}`],
        );

    return (
        <div className={getWrapperClasses()}>
            <p className={styles.task}>
                <LocalizedText name={`task${level}`} path={'games/general/airWord/static/translation'}> </LocalizedText>
            </p>
            {
                level === 1 ? (
                    <div className={styles.theme}>
                        <LocalizedText name={`values.${theme}`} path={'settings/translation'}/>
                    </div>
                ) : (
                    <div className={getListClasses()}>
                        {wordsForTask[currentWordsIndex] &&
                            wordsForTask[currentWordsIndex].map((word, index) =>
                                index === 2 ? (
                                    // Вариант для старого дизайна
                                    <div key={index}>
                                        <span className={styles.brake}/>
                                        <p className={getItemClasses(word)}>{upperFirst(word)}</p>
                                    </div>
                                ) : (
                                    <p key={index} className={getItemClasses(word)}>{upperFirst(word)}</p>
                                )
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};