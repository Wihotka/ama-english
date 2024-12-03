import React from 'react';

import styles from './styles.scss';
import {Spinner} from '@components/app/parts/preloader/parts/spinner';

export const Main = () => (
    <div>
        <div className={styles.personWrap}>
            <img className={styles.person} src={require('/assets/img/interface/maiPreloader.png')} alt={'main'}/>
        </div>
        <Spinner/>
    </div>
);