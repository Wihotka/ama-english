import React from 'react';
import styles from './style.scss';

type FieldItemP = {
    image:number;
    index:number;
};

export const FieldItem = ({image}:FieldItemP) => (
    <div className={styles.fieldItemContainer}>
        <img
            src={require(`/assets/img/sections/general/sortOut/icons/${
                image + 1
            }.svg`)}
            alt=""
            onDragStart={(e) => e.preventDefault()}
        />
    </div>
);
