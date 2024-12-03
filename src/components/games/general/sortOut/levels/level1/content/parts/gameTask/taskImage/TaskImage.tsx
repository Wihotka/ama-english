import React from 'react';
import styles from './style.scss';

type TaskImageP = {
    image:number;
};

export const TaskImage = ({image}:TaskImageP) => (
    <img
        className={styles.taskImage}
        src={require(`/assets/img/sections/general/sortOut/icons/${
            image + 1
        }.svg`)}
        draggable="false"
        onDragStart={e => e.preventDefault()}
        alt=""
    />
);
