import React from 'react';

import {LocalizedText} from '@components/common';

import styles from './styles.scss';

export const RootTitle = () => <p className={styles.rootTitle}><LocalizedText name={'english'} /></p>;
