import React, {useMemo} from 'react';

import {LocalizedText} from '@components/common';

import styles from './style.scss';

import {TaskP} from '../../../../../type';

export const Task = ({card, currentOptionIndex}:TaskP) => useMemo(() =>
    <p className={styles.task}>
        <LocalizedText
            useSuspense={false}
            name={card.case}
            path={'games/general/checkpoint/static/translation'}/></p>, [currentOptionIndex]);