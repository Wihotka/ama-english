import React from 'react';
import {classNames} from 'js-data-utils';
import styled from 'styled-components';

import {CellInner} from './parts';

import styles from './style.scss';

import {WordBox_GamePlayData, WordBox_GameData, FilledCellT} from '../../../type';

const BorderedElem = styled.div`
    border: 1px solid ${(props) => props.theme.colors.color6};
`;
const ActiveCellElem = styled.div`
    border: 1px solid ${(props) => props.theme.colors.color6};
    background-color: ${(props) => props.theme.colors.color5}
`;

type FieldT = {
    gamePlayData:WordBox_GamePlayData;
    gameData:WordBox_GameData;
    handleClick:Function;
};

export const Field = ({gamePlayData, gameData, handleClick}:FieldT) => {
    const {userAnswers, answerStatus} = gamePlayData;
    const {size, fields} = gameData;

    const onClick = (cell:FilledCellT) => !answerStatus ? handleClick(cell) : null;
    const rows = new Array(size).fill('').map((e, i) => fields.filter(({row}) => row === i));
    const cn = classNames(styles.cell, answerStatus
        ? styles[`${answerStatus}Cell`]
        : styles.selectedCell);

    return <BorderedElem className={styles.field}>
        {rows.map((row, index) => (
            <div className={styles.row} key={index}>
                {row.map((cell, index) => {
                    const {col, row} = cell;
                    const currentAnswer = userAnswers.find(answer => answer.col === col && answer.row === row);

                    return currentAnswer
                        ? <ActiveCellElem
                            className={cn}
                            key={index}
                            onClick={() => onClick(cell)}>
                            <CellInner gamePlayData={gamePlayData} cell={cell} currentAnswer={currentAnswer}/>
                        </ActiveCellElem>
                        : <BorderedElem
                            className={styles.cell}
                            style={{backgroundColor: '#FFF'}}
                            key={index}
                            onClick={() => onClick(cell)}>
                            <CellInner gamePlayData={gamePlayData} cell={cell} currentAnswer={currentAnswer}/>
                        </BorderedElem>;
                })}
            </div>))}
    </BorderedElem>;
};

