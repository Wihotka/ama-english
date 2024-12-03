import {TextTeaser_TextPart} from '../../../../../type';
import React, {useEffect, useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import styles from './style.scss';
import {classNames} from 'js-data-utils';
import {TextPartDragItemT} from '../../../type';
import {TextPartDragItem} from '../textPartDragItem';
import {getEmptyImage} from 'react-dnd-html5-backend';

type TextPartP = {
    index:number;
    element:TextTeaser_TextPart;
    highlight:boolean;
    isDragDisabled:boolean;
    moveTextPart:(where:number, from:number) => void;
};

export const TextPart = ({
    element,
    index,
    highlight,
    isDragDisabled,
    moveTextPart,
}:TextPartP) => {
    const {isCorrect, text, correctPosition} = element;
    const divRef = useRef<HTMLDivElement>(null);

    const [{isOver}, drop] = useDrop<TextPartDragItemT, {}, {isOver:boolean}>({
        accept: 'text',
        hover: (item:TextPartDragItemT) => {
            const {fromIndex} = item;

            if (index === fromIndex || isCorrect) return;

            moveTextPart(index, fromIndex);

            item.fromIndex = index;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        }),
        canDrop: () => !isCorrect,
    });

    const [{isDragging}, drag, preview] = useDrag<
        TextPartDragItemT,
        {},
        { isDragging:boolean }
    >(
        () => ({
            type: 'text',
            item: {fromIndex: index, text},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
            canDrag: () => (isDragDisabled ? false : !isCorrect),
        }),
        [isCorrect, text, correctPosition, isDragDisabled]
    );

    drag(drop(divRef));

    useEffect(() => {
        preview(getEmptyImage());
    }, []);

    const textPartClassName = classNames(
        highlight ? (isCorrect ? styles.correct : styles.wrong) : '',
        isCorrect ? styles.correctPosition : ''
    );

    return (
        <div ref={divRef}>
            <TextPartDragItem
                highlight={highlight || isCorrect}
                isDragging={isDragging}
                isDragDisabled={isDragDisabled}
                disableHover={isOver}
                className={textPartClassName}
            >
                {text}
            </TextPartDragItem>
        </div>
    );
};
