import React from 'react';
import {useDrag} from 'react-dnd';
import styles from './style.scss';

type DragItemP = {
    image:number;
    hide:boolean;
    isDragDisabled:boolean;
};

export const DragItem = ({image, hide, isDragDisabled}:DragItemP) => {
    const [{isDragging}, drag, dragPreview] = useDrag(
        () => ({
            type: 'image',
            item: {image},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
            canDrag: () => !isDragDisabled
        }),
        [image, isDragDisabled]
    );

    return (
        <div
            ref={drag}
            className={styles.dragItemContainer}
            style={{
                visibility: hide || isDragging ? 'hidden' : 'visible',
            }}
        >
            <img
                src={require(`/assets/img/sections/general/sortOut/icons/${
                    image + 1
                }.svg`)}
                alt=""
                className={styles.img}
                draggable='false'
                ref={dragPreview}
            />
        </div>
    );
};
