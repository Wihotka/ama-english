import React from 'react';
import {usePreview} from 'react-dnd-multi-backend';
import {DragItem} from '../dragItem';

import {GrammarTime_DragItem} from '../../type';

import styles from '../dragItem/style.scss';

type PreviewT = {
    display:boolean;
    item:GrammarTime_DragItem;
    style:React.CSSProperties;
};

export const DragPreview = () => {
    const {display, item, style} = usePreview() as PreviewT;

    if (!display) {
        return null;
    }

    return (
        <div style={style}>
            <DragItem className={styles.dragItemContainer}>
                {item.element.text}
            </DragItem>  
        </div>
    );
};
