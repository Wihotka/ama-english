import React from 'react';
import styled from 'styled-components';
import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {AlphabetL1_GamePlayData} from '../../../type';

type LetterT = {
    handleClick:Function,
    letterData:{
        letter:string,
        index:number,
        imgIndex:number
    }
    gamePlayData:AlphabetL1_GamePlayData
};

const LetterElem = styled.div`text-shadow: ${(props) => {
    const {color1} = props.theme.colors;

    return `-1px 0 ${color1}, 0 1px ${color1}, 1px 0 ${color1}, 0 -1px ${color1}`;
}}`;

export const Letter = ({handleClick, letterData, gamePlayData}:LetterT) => {
    const {currentIndex, mistakeIndex} = gamePlayData;
    const {letter, index, imgIndex} = letterData;

    const isActive = currentIndex <= index;
    const cursor = isActive ? 'pointer' : 'auto';
    const cn = classNames(styles.wrapper,
        !isActive ? styles.inactiveWrapper : '',
        mistakeIndex === index ? styles.mistakeWrapper : '');

    const onClick = () => (isActive && mistakeIndex === null)
        ? handleClick(index)
        : null;

    return (
        <div className={cn} onClick={onClick} style={{cursor}}>
            <img
                src={require(`/assets/img/sections/general/alphabet/fruits/${imgIndex}.svg`)}
                alt={''}
                className={styles.fruitImg}/>
            <LetterElem
                className={styles.letter}
                style={{cursor}}>{letter}</LetterElem>
        </div>
    );
};
