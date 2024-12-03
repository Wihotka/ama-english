import React from 'react';
import {usePreview} from 'react-dnd-multi-backend';
import {upperFirst} from 'lodash';

import styles from '../cell/style.scss';

type PreviewT = {
    display:boolean;
    item:{word:string};
    style:React.CSSProperties
};

export const PreviewCell = () => {
    const {display, item, style} = usePreview() as PreviewT;

    if (!display) {
        return null;
    }

    return (
        <div style={{height: '72px', ...style}} className={styles.cell}>
            <div className={styles.cellValueWrapper}>
                <p className={styles.cellValue}>
                    {item.word && upperFirst(item.word)}
                </p>
            </div>
        </div>
    );
};
