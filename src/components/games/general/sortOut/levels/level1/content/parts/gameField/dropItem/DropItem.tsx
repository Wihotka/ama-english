import React from 'react';
import styled from 'styled-components';
import {useDrop} from 'react-dnd';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {SortOut_DndElement, SortOut_FieldElement} from '../../../../../../type';
import {CheckAnswerOnDropT} from '../../../../type';

const DropItemContainer = styled.div`
  background: ${props => props.theme.colors.gradient11};
  border: 2px dashed ${props => props.theme.colors.color5};
`;

type DropItemP = {
    index:number;
    highlight:boolean;
    isCorrect:boolean;
    selectedElement:SortOut_FieldElement;
    checkAnswer:CheckAnswerOnDropT;
};

export const DropItem = ({
    index,
    highlight,
    isCorrect,
    selectedElement,
    checkAnswer,
}:DropItemP) => {
    const {image: selectedImage, index: selectedIndex} = selectedElement;
    const [{isOver, item}, drop] = useDrop({
        accept: 'image',
        drop: (item:SortOut_DndElement) => {
            const {image} = item;

            checkAnswer(index, image);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            item: monitor.getItem<SortOut_DndElement | null>(),
        }),
    });

    return (
        <DropItemContainer
            ref={drop}
            className={classNames(
                styles.dropItemContainer,
                highlight ? (isCorrect ? styles.correct : styles.wrong) : ''
            )}
        >
            {selectedIndex === index ? (
                <img
                    src={require(`/assets/img/sections/general/sortOut/icons/${
                        selectedImage + 1
                    }.svg`)}
                    onDragStart={e => e.preventDefault()}
                    alt=""
                    className={styles.img}
                />
            ) : isOver ? (
                <img
                    src={require(`/assets/img/sections/general/sortOut/icons/${
                        item && item.image + 1
                    }.svg`)}
                    alt=""
                    className={styles.img}
                />
            ) : (
                ''
            )}
        </DropItemContainer>
    );
};
