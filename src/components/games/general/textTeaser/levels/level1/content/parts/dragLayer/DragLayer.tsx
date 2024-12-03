import React from 'react';
import {usePreview} from 'react-dnd-multi-backend';
import {TextPartDragItem} from '../textPartDragItem';

import {TextPartDragItemT} from '../../../type';

import styles from './style.scss';

type PreviewT = {
    display:boolean;
    item:TextPartDragItemT;
    style:React.CSSProperties;
};

export const DragLayer = () => {
    const {display, item, style} = usePreview() as PreviewT;

    if (!display) {
        return null;
    }

    return (
        <div style={style}>
            <TextPartDragItem className={styles.layerDragitem}>
                {item.text}
            </TextPartDragItem>  
        </div>
    );
};
