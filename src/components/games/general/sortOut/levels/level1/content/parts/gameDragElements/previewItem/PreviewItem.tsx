import React from 'react';
import {usePreview} from 'react-dnd-multi-backend';

import styles from '../dragItem/style.scss';

type PreviewT = {
    display:boolean;
    item:{image:number};
    style:React.CSSProperties
};

export const PreviewItem = () => {
    const {display, item, style} = usePreview() as PreviewT;

    if (!display) {
        return null;
    }

    return (
        <div style={style} className={styles.dragItemContainer}>
            <img
                src={require(`/assets/img/sections/general/sortOut/icons/${
                    item.image + 1
                }.svg`)}
                alt=""
                className={styles.img}
            />
        </div>
    );
};
