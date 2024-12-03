import React, {useEffect} from 'react';
import {useDrag} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';
import styled from 'styled-components';
import {DragItem} from '../../dragItem';

import {
    GrammarTime_DragItem,
    GrammarTime_VariantElement,
} from '../../../type';

import styles from './style.scss';

type VariantP = {
    variantElement:GrammarTime_VariantElement;
    isUsed:boolean;
};

const EmptyVariant = styled.div`
    ${({theme}) => ({
        background: theme.colors.gradient15,
        borderColor: theme.colors.color1 + '52',
        boxShadow: `0px 4px 0px ${theme.colors.color1}52`
    })};
`;

export const Variant = ({variantElement, isUsed}:VariantP) => {
    const {id, text} = variantElement;
    const [{isDragging}, drag, preview] = useDrag<
        GrammarTime_DragItem,
        {},
        { isDragging:boolean }
    >(
        {
            type: 'variant',
            item: {element: variantElement, replaceIndex: -1},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
            canDrag: () => !isUsed,
        },
        [id, text, isUsed]
    );

    useEffect(() => {
        preview(getEmptyImage(), {captureDraggingState: true});
    }, []);

    return isUsed ? (
        <EmptyVariant className={styles.emptyVariant}></EmptyVariant>
    ) : (
        <div ref={drag}>
            <DragItem
                isDragging={isDragging}
            >
                {text}
            </DragItem>
        </div>
    );
};
