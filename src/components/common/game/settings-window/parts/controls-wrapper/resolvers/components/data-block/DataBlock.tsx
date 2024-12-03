import React, {CSSProperties, FC} from 'react';
import {classNames} from 'js-data-utils';

import {LocalizedText} from '@components/common/localized-text';

import styles from './style.scss';

type P = {
    text?:string | number;
    style?:CSSProperties;
    contentType?:'number' | 'str' | 'gameTime';
};

export const DataBlock:FC<P> = ({text, style, contentType, children}) =>
    <div className={styles.dataBlockWrapper} style={{...style}}>
        {children
            ? children
            : <div className={classNames(styles.dataBlock, styles[`${contentType}`])} style={{...style}}>
                {contentType == 'gameTime' || contentType == 'number'
                    ? text
                    : <LocalizedText name={`values.${text}`} path={'settings/translation'}/>
                }
            </div>}
    </div>;