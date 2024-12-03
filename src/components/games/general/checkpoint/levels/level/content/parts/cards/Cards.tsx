import React from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {CardsP} from '../../../type';

const Number = styled.p`
  color: ${props => props.theme.colors.color2};
`;

export const Cards = (props:CardsP) => {
    const {options, handleCardCB, isModalShowed, mistakeCardIndex, errorCardIndexes, hiddenCardIndexes, course} = props;

    const getCellClasses = (index:number) =>
        classNames(
            styles.cell,
            hiddenCardIndexes.includes(index) ? styles.cell__hidden : '',
            errorCardIndexes.includes(index) ? styles.cell__error : '',
            mistakeCardIndex === index ? styles.cell__mistake : ''
        );

    const getWrapperClasses = () =>
        classNames(
            styles.wrapper,
            isModalShowed ? styles.wrapper__hidden : ''
        );

    const getBgClasses = (course:number) =>
        classNames(
            styles.bg,
            course === 1 ? styles.bg1 : '',
            course === 2 ? styles.bg2 : '',
            course === 3 ? styles.bg3 : '',
            course === 4 ? styles.bg4 : ''
        );

    return (
        <div className={getWrapperClasses()}>
            <div className={getBgClasses(course)}>
                {options.map((card, index) => (
                    <div
                        key={index}
                        className={getCellClasses(index)}
                        onClick={() => handleCardCB(index, card.id)}>
                        <Number className={styles.letter}>{card.id}</Number></div>
                ))};
            </div>
        </div>
    );
};