import React, {CSSProperties, memo} from 'react';
import {isEqual, upperFirst} from 'lodash';

import * as resolvers from './resolvers';

import styles from './styles.scss';

export type ICustomIcon = 'copy' | 'chat' | 'faq' | 'material' | 'note' | 'settings'
    | 'left' | 'right' | 'save' | 'loading' | 'saved' | 'send' | 'noMic' | 'noCam'
    | 'mediaSettings' | 'camera' | 'volume' | 'text' | 'pen' | 'eraser' | 'restart'
    | 'error' | 'info'| 'warning' | 'rocket'| 'exit' | 'successSave'| 'gamesMenu'
    | 'finish' | 'homework' | 'clock' | 'like';

type Props = {
    type:ICustomIcon;
    fillColor?:string;
    width?:number;
    style?:CSSProperties
};

/*при додаванні нової ікноки, обов"язково добавити її назву в тип ICustomIcon.
також важливо, що в іконки завжди width='1em' height='1em' були такі
щоб можна було керувати її розмірами з допомогою розміру шрифта
*/

export const CustomIconC = ({type, fillColor, width, style}:Props) => {
    // @ts-ignore
    const resolver = resolvers[upperFirst(type)];

    return <i className={styles.iconWrap} style={style}>
        {resolver({color: fillColor, width})}
    </i>;
};

export const CustomIcon = memo(CustomIconC, isEqual);