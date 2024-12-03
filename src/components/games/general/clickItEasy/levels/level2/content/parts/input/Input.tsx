import React, {useMemo} from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {InputP} from '../../../type';
import {LocalizedText} from '@components/common';

const Line = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  border: 1px solid ${props => props.theme.colors.opacityColor2};
`;

const SentenceType = styled.div`
  &:first-child, &:nth-child(2) {
    color: #7141B7;
  }
  &:last-child {
    color: #38166D;
  }
`;

export const Input = (props:InputP) => useMemo(() => {
    const {sentences, typedSentence, selectionType, isFieldUpdated, currentSentenceIndex} = props;

    const getInputFieldClasses = ():string =>
        classNames(
            styles.inputField,
            isFieldUpdated ? styles.update : '',
            selectionType === 'success' ? styles.inputField__success : ''
        );

    return (
        <div className={styles.wrapper}>
            <div className={styles.lines}>
                {new Array(2).fill(null).map((_, index) => <Line key={index} className={styles.line}/>)}
            </div>
            <div className={getInputFieldClasses()}>
                <div className={styles.inputSentence}>
                    {typedSentence &&
                        typedSentence.map((word, index) => (
                            <span key={index} className={styles.inputCell}>{word.word}</span>
                        ))
                    }
                </div>

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