import React from 'react';

import {GameBtn} from '@components/common/game/components';

import styles from './style.scss';

import {LegoLetterL1_GamePlayData} from '../../../type';

type CardP = {
    gamePlayData:LegoLetterL1_GamePlayData,
    handleClick:Function,
    index:number | null,
    position:number,
    path:string
};

export const Card = ({handleClick, index, position, path, gamePlayData}:CardP) => {
    const {currentAnswer, selectedIndexes, mistakesPerAnswerQty, correctAnswersQty, iteration} = gamePlayData;

    const isSelected = ((index !== null) && selectedIndexes.includes(index));
    const isVisible = !(isSelected && currentAnswer?.index !== position);
    const isActive = (!isSelected && currentAnswer === null && mistakesPerAnswerQty < 2);

    const style = {opacity: isVisible ? 1 : 0, cursor: isVisible ? 'pointer' : 'auto'};

    const handler = () => {
        (isActive && (correctAnswersQty <= iteration))
            ? handleClick(index, position)
            : null;
    };

    const answer = currentAnswer?.index === position
        ? currentAnswer?.isCorrect
            ? 'correct'
            : 'wrong'
        : null;

    return (
        <GameBtn
            answer={answer}
            style={style}
            className={styles.button}
            onClick={handler}>
            <svg
                className={styles.svg}
                viewBox={'0 0 89 120'}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill={'#FFFFFF'} d={path}/>
            </svg>
        </GameBtn>
    );
};
