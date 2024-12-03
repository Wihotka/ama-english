import React from 'react';
import styled from 'styled-components';

import {LocalizedText} from '@components/common';
import {Task, Polygon} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

const Theme = styled.p`
  background: ${props => props.theme.colors.gradient7}
`;

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, gameSettings, handlePlaneCB} = props;
    const {wordsForPlanes, wordsForTask, correctWords} = gameData;
    const {currentWordsIndex, correctWordStatus, isFieldUpdate, candidateWord, isAnimate, mistakeQty} = gamePlayData;
    const {level, speedInSeconds} = gameSettings;

    return (
        <div className={styles.gameWrap}>
            {level === 2 && <Theme className={styles.theme}>
                <LocalizedText name={`values.${gameSettings.theme}`} path={'settings/translation'}/>
            </Theme>}
            <Task
                level={level}
                theme={gameSettings.theme}
                correctWords={correctWords}
                wordsForTask={wordsForTask}
                isFieldUpdate={isFieldUpdate}
                correctWordStatus={correctWordStatus}
                currentWordsIndex={currentWordsIndex}/>
            <Polygon
                isAnimate={isAnimate}
                mistakeQty={mistakeQty}
                candidateWord={candidateWord}
                isFieldUpdate={isFieldUpdate}
                handlePlaneCB={handlePlaneCB}
                speedInSeconds={speedInSeconds}
                wordsForPlanes={wordsForPlanes}
                correctWordStatus={correctWordStatus}
                currentWordsIndex={currentWordsIndex}/>
        </div>
    );
};