import React from 'react';
import styled from 'styled-components';

import {DragItem} from './dragItem';

import styles from './style.scss';

import {SortOut_DndElement, SortOut_FieldElement} from '../../../../../type';

const DragElementsContainer = styled.div`
    background: ${props => props.theme.colors.gradient11};
    border: 1px solid ${props => props.theme.colors.color6};
`;

type GameDragElementsP = {
    dndElements:SortOut_DndElement[];
    selectedElement:SortOut_FieldElement;
    isDragDisabled:boolean;
};

export const GameDragElements = ({
    dndElements,
    selectedElement,
    isDragDisabled
}:GameDragElementsP) => {
    const {image: selectedImage} = selectedElement;

    return (
        <DragElementsContainer className={styles.gameDragElementsContainer}>
            {dndElements.map(({image}, i) => (
                <DragItem
                    image={image}
                    key={i}
                    hide={selectedImage === image}
                    isDragDisabled={isDragDisabled}
                />
            ))}
        </DragElementsContainer>
    );
};
