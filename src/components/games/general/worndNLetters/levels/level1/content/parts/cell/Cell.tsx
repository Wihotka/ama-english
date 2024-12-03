import React, {useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {classNames} from 'js-data-utils';
import {upperFirst} from 'lodash';
import styled from 'styled-components';

import styles from './style.scss';

import {CardT, WorndNLetters_GamePlayData} from '@components/games/general/worndNLetters/levels/level1/type';

type CellT = {
    card:CardT;
    gamePlayData:WorndNLetters_GamePlayData;
    moveHandler:Function;
    changeDragStatus:Function;
};

const CellElem = styled.div`
  border: ${props => `2px dashed ${props.theme.colors.color5}`};
`;

export const Cell = ({card, gamePlayData, moveHandler, changeDragStatus}:CellT) => {
    const {correctAnswers, dragStatus, gameIsPausing, userAnswers} = gamePlayData;
    const {columnId, id, word} = card;

    const answerIsCorrect = userAnswers.find(answer => answer.id === id)?.isCorrect;
    const isAnswerSaved = correctAnswers.includes(id);
    const isActive = word !== null;

    const ref = useRef<HTMLDivElement>(null);

    interface DragItem {
        id:number,
        columnId:number,
        isActive:boolean
    }

    const [{handlerId}, drop] = useDrop({
        accept: 'card',
        collect: (monitor) => ({
            handlerId: monitor.getHandlerId()
        }),
        hover(item:DragItem) {
            if (!ref.current) return;

            const dragId = item.id;
            const hoverId = id;

            if ((dragId === hoverId) || (isActive && (item.columnId === 1))
                || (columnId === 1) || correctAnswers.includes(hoverId)) {
                return;
            }

            moveHandler({dragId, hoverId, columnId});

            item.id = hoverId;
        }
    });

    const [{isDragging}, drag] = useDrag({
        type: 'card',
        item: () => {
            changeDragStatus(true);

            return ({id, isActive, columnId, word});
        },
        collect: monitor => ({
            isDragging: !ref.current || monitor.isDragging(),
        }),
        end() {
            changeDragStatus(false);
        },
        canDrag: () => (!dragStatus && isActive && !gameIsPausing && !isAnswerSaved)
    });

    drag(drop(ref));

    const cn = classNames(styles.cell,
        columnId === 0 ? styles.cellAnswer : styles.cellWord,
        columnId === 0 && gameIsPausing && (answerIsCorrect ? styles.correct : styles.wrong),
        isAnswerSaved || gameIsPausing || !isActive ? styles.inactiveCell : '',
        columnId === 0 && isActive
            ? styles.selectedAnswer
            : '',
        columnId === 1 && (!isActive || isDragging)
            ? styles.disabledCell
            : ''
    );
    const cellStyle = {border: columnId === 1 && isActive ? 'none' : 'auto'};

    return (
        <CellElem
            className={cn}
            style={cellStyle}
            ref={ref}
            data-handler-id={handlerId}>

            <div className={styles.cellValueWrapper}>
                <p className={styles.cellValue}>{columnId === 0 || !isDragging ? word && upperFirst(word) : ''}</p>
            </div>
        </CellElem>
    );
};
