import React, {useMemo} from 'react';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {InfoP} from '../../../type';

export const Info = (props:InfoP) => useMemo(() => {
    const {sentences, isFieldUpdated, currentSentenceIndex} = props;

    const getImgClasses = () => classNames(
        styles.img,
        isFieldUpdated ? styles.update : ''
    );

    return (
        <div className={styles.info}>
            <img
                className={getImgClasses()}
                src={require(`/assets/img/resources/${sentences[currentSentenceIndex].imgUrl}`)}
                alt=""/>
        </div>
    );
}, [props.currentSentenceIndex, props.isFieldUpdated]);