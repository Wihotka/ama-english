import React, {useMemo} from 'react';
import styled from 'styled-components';

import {GameBtn} from '@components/common/game/components/game-btn';
import {LocalizedText} from '@components/common';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {InputP, keyActions} from '../../../type';

const Line = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  border: 1px solid ${props => props.theme.colors.opacityColor2};
`;

const SentenceType = styled.div`
  & > :first-child, & > :nth-child(2) {
    color: #7141B7;
  }
  & > :last-child {
    color: #38166D;
  }
`;

export const Input = (props:InputP) => useMemo(() => {
    const {sentences, handleKey, typedSentence, selectionType, isFieldUpdated, currentSentenceIndex} = props;

    const getInputFieldClasses = ():string =>
        classNames(
            styles.inputField,
            isFieldUpdated ? styles.update : '',
            styles[`inputField__${selectionType}`]
        );

    const getKeyClasses = (word:string):string =>
        classNames(
            styles.inputCell,
            word === '  ' || selectionType === 'success' || selectionType === 'error' ? styles.inputCell__hidden : ''
        );

    const getNaturalSentenceClasses = () =>
        classNames(
            styles.naturalSentence,
            selectionType === 'success' ? styles.naturalSentence__showed : ''
        );

    return (
        <div className={styles.wrapper}>
            <div className={styles.lines}>
                {new Array(2).fill(null).map((_, index) => <Line key={index} className={styles.line}/>)}
            </div>
            <div className={getInputFieldClasses()}>
                <div className={styles.inputCells}>
                    {typedSentence &&
                        typedSentence.map((word, index) => (
                            <GameBtn
                                key={index}
                                className={getKeyClasses(word.word)}
                                onClick={() => handleKey(word.word, keyActions.delete, word.id)}>
                                {word.word}
                            </GameBtn>
                        ))
                    }
                </div>
                <p className={getNaturalSentenceClasses()}>{sentences[currentSentenceIndex].sentence}</p>

                <SentenceType className={styles.type}>
                    <LocalizedText
                        name={'type'}
                        path={'games/general/clickItEasy/static/translation'}> </LocalizedText>
                    <span>:</span>
                    <LocalizedText
                        name={sentences[currentSentenceIndex].type}
                        path={'games/general/clickItEasy/static/translation'}> </LocalizedText>
                </SentenceType>
            </div>
        </div>
    );
}, [props.typedSentence, props.selectionType, props.isFieldUpdated]);