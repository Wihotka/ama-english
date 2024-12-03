import React from 'react';
import styled from 'styled-components';

import {Puzzle} from '../../parts';

import styles from './style.scss';

type TopRowT = {
    rowData:Array<{ letter:string, index:number }>,
    currentIndex:number,
    studyStage:number | undefined,
};

const LetterElem = styled.p`
    color: ${(props) => props.theme.colors.color4};
`;

export const TopRow = ({rowData, currentIndex, studyStage}:TopRowT) => (
    <div className={styles.row}>
        {[...rowData].sort((a, b) => a.index - b.index)
            .map(({letter, index}) => {
                const isEmpty = currentIndex <= index;
                const status = !isEmpty ? 'selected' : 'empty';

                return (
                    <div key={index} className={styles.field}>
                        {studyStage && <Puzzle status={status} row={'top'} studyStage={studyStage} /> }
                        <LetterElem className={styles.letter}>
                            {isEmpty ? null : letter}
                        </LetterElem>
                    </div>
                );
            })}
    </div>
);
