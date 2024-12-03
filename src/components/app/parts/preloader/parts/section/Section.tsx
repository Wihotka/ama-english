import React from 'react';

import styles from './styles.scss';
import {Spinner} from '@components/app/parts/preloader/parts/spinner';

type P = {
    studyStage:number;
};

export const Section = ({studyStage = 1}:P) => (
    <div>
        <img className={styles.person} src={require(`/assets/img/studyStages/kamiPreloader${studyStage}.png`)} alt={`kamiPreloader${studyStage}`}/>
        <Spinner/>
    </div>
);
