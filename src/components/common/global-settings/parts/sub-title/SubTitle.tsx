import React from 'react';

import {LocalizedText} from '@components/common';

import styles from './styles.scss';

type P = {
    name:string;
};

export const SubTitle = ({name}:P) => (
    <p className={styles.subTitle}><LocalizedText name={name} path={'base-interface/translation'} useSuspense={false}/></p>
);
