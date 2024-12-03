import React, {useMemo} from 'react';
import {minBy, maxBy} from 'lodash';
import styled from 'styled-components';

import {Btn} from '@components/common/elements';
import {LocalizedText} from '@components/common';

import {Field, List} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

const SpanElem = styled.span`
    color: ${(props) => props.theme.colors.color3};
    margin-right: 6px;
    font-weight: 500;
    font-size: 20px;
`;

export const Content = (p:ContentP) => {
    const {gameData, gamePlayData, handleClick, checkAnswer, level, theme, complexity, wordsQty, imagesPaths, handleHint} = p;
    const {userAnswers, currentDirection, foundWords, additionalWords, hintIsActive} = gamePlayData;
    const {placedWords} = gameData;

    const arrowsDegrees = {
        1: ['90', '0'],
        2: ['90', '0', '-90', '180'],
        3: ['90', '0', '45'],
        4: ['90', '0', '-90', '180', '45', '135']
    }[level];

    const checkParam = currentDirection === 'horizontal' ? 'col' : 'row';
    const max = maxBy(userAnswers, answer => answer[checkParam]);
    const min = minBy(userAnswers, answer => answer[checkParam]);
    const isSingle = ((max?.[checkParam] || 0) - (min?.[checkParam] || 0)) === userAnswers.length - 1;

    return (
        <div className={styles.gameWrap}>
            <div className={styles.top}>
                <div className={styles.directions}>
                    <SpanElem><LocalizedText name={'direction'} path={'games/general/wordBox/translation'}/>:</SpanElem>
                    {arrowsDegrees?.map((deg, index) =>
                        <img
                            key={index}
                            src={require('/assets/img/sections/general/wordBox/arrows/right.png')}
                            alt={''}
                            style={{transform: `rotate(${deg}deg)`}}
                            className={styles.arrow}/>)}
                </div>
                {complexity === 2
                    ? <Btn
                        className={styles.helpBtn}
                        disabled={!hintIsActive}
                        handler={handleHint}
                    >
                        <span>Help</span>
                    </Btn>
                    : null}
            </div>
            <div className={styles.game}>
                {useMemo(() =>
                    <List
                        gamePlayData={gamePlayData}
                        placedWords={placedWords}
                        wordsQty={wordsQty}
                        complexity={complexity}
                        imagesPaths={imagesPaths}
                        theme={theme}/>, [foundWords, additionalWords])}
                <Field gamePlayData={gamePlayData} gameData={gameData} handleClick={handleClick}/>
            </div>
            <Btn
                disabled={!isSingle}
                handler={checkAnswer}
                className={styles.checkBtn}
                textCode={'check'}
                type={'primary'}/>
        </div>
    );
};
