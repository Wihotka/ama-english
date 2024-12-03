import React from 'react';
import {classNames} from 'js-data-utils';

import {Puzzle, PuzzleShadow} from '../../parts';

import styles from './style.scss';

import {AlphabetL3_GamePlayData} from '../../../type';

type BottomRowT = {
    rowData:Array<{ letter:string, index:number }>,
    gamePlayData:AlphabetL3_GamePlayData,
    handleClick:Function,
    studyStage:number | undefined;
};

export const BottomRow = ({rowData, studyStage, gamePlayData, handleClick}:BottomRowT) => {
    const {currentIndex, mistakeIndex} = gamePlayData;

    return (
        <div className={styles.row}>
            {rowData.map(({letter, index}) => {
                const isActive = currentIndex <= index;
                const status = mistakeIndex === index ? 'wrong' : 'default';
                const isDisabled = Object.keys(rowData).includes(`${mistakeIndex}`) && status === 'default';
                const cn = classNames(styles.field,
                    isActive ? styles.activeField : styles.inactiveField,
                    mistakeIndex === index ? styles.mistakeField : '',
                    isDisabled ? styles.disabledField : ''
                );
                const onClick = () => mistakeIndex === null ? handleClick(index) : null;

                return (
                    <div
                        key={index}
                        className={cn}
                        onClick={onClick}>
                        <PuzzleShadow/>
                        {studyStage && <Puzzle status={status} row={'bottom'} studyStage={2}/>}
                        <p className={styles.letter}>
                            {letter}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
