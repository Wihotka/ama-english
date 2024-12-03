import React from 'react';
import {classNames} from 'js-data-utils';
import styled from 'styled-components';

import styles from '../../style.scss';

import {
    FilledCellT, WordBox_GamePlayData
} from '../../../../../type';

const CellCover = styled.div`
    background-color: ${(props) => props.theme.colors.color6};
`;

type CellInnerT = {
    gamePlayData:WordBox_GamePlayData,
    cell:FilledCellT,
    currentAnswer:FilledCellT | undefined
};

export const CellInner = ({gamePlayData, cell, currentAnswer}:CellInnerT) => {
    const {selectedCells, answerStatus} = gamePlayData;
    const {letter, col, row} = cell;

    const cn = classNames(styles.letter, answerStatus && currentAnswer
        ? styles.activeLetter
        : selectedCells.find(cell => cell.row === row && cell.col === col) && !currentAnswer
            ? styles.selectedLetter
            : '');

    return <>
        <CellCover className={styles.cellCover}/>
        <p className={cn}>
            {letter.toUpperCase()}
        </p>
    </>;
};
