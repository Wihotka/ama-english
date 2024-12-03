import {classNames} from 'js-data-utils';
import React, {useEffect, useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {DragItem} from '../dragItem';
import {getEmptyImage} from 'react-dnd-html5-backend';
import styled from 'styled-components';

import {GrammarTime_DragItem, GrammarTime_VariantElement} from '../../type';

import styles from './style.scss';

type UserVariantP = {
    element:GrammarTime_VariantElement | null;
    index:number;
    elementToBeReplaced:GrammarTime_VariantElement | null;
    highlight:boolean;
    isCorrect:boolean;
    isDragDisabled:boolean;
    correctIndexes?:number[];
    isDropDisabled?:boolean;
    dropElement:(
        el:GrammarTime_VariantElement,
        index:number,
        replaceIndex:number
    ) => void;
    changeReplacedItem:(el:GrammarTime_VariantElement | null) => void;
};

const DropArea = styled.div`
    ${({theme}) => ({
        background: theme.colors.gradient14,
        borderColor: theme.colors.color1 + 'A3',
    })}
`;

export const UserVariant = ({
    element,
    index,
    elementToBeReplaced,
    highlight,
    isCorrect,
    isDragDisabled,
    correctIndexes,
    isDropDisabled,
    dropElement,
    changeReplacedItem,
}:UserVariantP) => {
    const divRef = useRef<HTMLDivElement>(null);
    const elementStyle:React.CSSProperties
        = isDropDisabled || isDragDisabled ? {pointerEvents: 'none'} : {};
    const elementClassName = classNames(
        highlight
            ? isCorrect || correctIndexes?.includes(index)
                ? styles.correct
                : styles.wrong
            : '',
        isDropDisabled ? styles.disabled : ''
    );

    const [{isOver, dropItem}, drop] = useDrop({
        accept: 'variant',
        drop: (item:GrammarTime_DragItem) => {
            const {element, replaceIndex} = item;

            dropElement(element, index, replaceIndex);
        },
        hover: () => {
            if (elementToBeReplaced?.id === element?.id) return;

            changeReplacedItem(element);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            dropItem: monitor.getItem<GrammarTime_DragItem | null>(),
        }),
        canDrop: () => Boolean(!element) || Boolean(!isDropDisabled),
    });

    const [{isDragging}, drag, preview] = useDrag(
        () => ({
            type: 'variant',
            item: {element, replaceIndex: index} as GrammarTime_DragItem,
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
                dragItem: monitor.getItem<GrammarTime_DragItem | null>(),
            }),
            canDrag: () =>
                !isDragDisabled &&
                !correctIndexes?.includes(index) &&
                Boolean(element),
        }),
        [element?.id, element?.text, isDropDisabled, isDragDisabled]
    );

    drag(drop(divRef));

    useEffect(() => {
        preview(getEmptyImage(), {captureDraggingState: true});
    }, []);

    const elementText
        = isOver && !isDropDisabled
            ? dropItem?.element.text
            : elementToBeReplaced && isDragging
                ? elementToBeReplaced.text
                : element && element.text;

    return element ? (
        <div ref={divRef} style={elementStyle}>
            <DragItem
                isDragging={isDragging}
                className={elementClassName} 
            >
                {elementText}
            </DragItem>
        </div>
    ) : (
        <DropArea ref={divRef} className={styles.dropArea} />
    );
};
