import React from 'react';
import styled from 'styled-components';
import {SortOut_FieldElement} from '../../../../../type';
import {CheckAnswerOnDropT} from '../../../type';
import {DropItem} from './dropItem';
import {FieldItem} from './fieldItem';
import styles from './style.scss';

type GameFieldP = {
    fieldElements:SortOut_FieldElement[];
    cols:number;
    rows:number;
    highlight:boolean;
    highlightIndex:number;
    isCorrect:boolean;
    selectedElement:SortOut_FieldElement;
    checkAnswer:CheckAnswerOnDropT;
};

const StyledWrapper = styled.div`
    scrollbar-color: ${({theme}) => `${theme.colors.color5} #FFFFFF`};

    &::-webkit-scrollbar {
        background: ${({theme}) => theme.colors.color5 + 40 };
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.color5};
    }
`;

export const GameField = ({
    fieldElements,
    cols,
    rows,
    highlight,
    highlightIndex,
    isCorrect,
    selectedElement,
    checkAnswer,
}:GameFieldP) => (
    <StyledWrapper className={styles.fieldWrapper}>
        <div
            className={styles.gameFieldContainer}
        >
            {new Array(rows * cols).fill('').map((_, i) => {
                const el = fieldElements.find(({index}) => index === i);

                return el ? (
                    <FieldItem key={i} image={el.image} index={el.index} />
                ) : (
                    <DropItem
                        key={i}
                        index={i}
                        highlight={highlight && highlightIndex === i}
                        isCorrect={isCorrect}
                        selectedElement={selectedElement}
                        checkAnswer={checkAnswer}
                    />
                );
            })}
        </div>
    </StyledWrapper>
);
