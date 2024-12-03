import React from 'react';

import {LocalizedText} from '@components/common';

import styles from './styles.scss';

export const Comment = ({comment}:{comment:string}) => {
    const str = comment.split('<br />');

    return (
        <div>
            <p className={styles.title}><LocalizedText name={'commentToTask'} path={'challenge/translation'}/></p>
            <div className={styles.comment}>{str.map((strItem, idx) => <p key={idx}>{strItem}</p>)}</div>
        </div>
    );
};
