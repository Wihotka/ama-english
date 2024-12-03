import React, {useMemo} from 'react';
import styled from 'styled-components';

import {GameBtn} from '@components/common/game/components/game-btn';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {KeyboardP} from '../../../type';

const KeyboardWrapper = styled.div`
  background: ${props => props.theme.colors.gradient9}
`;

export const Keyboard = (props:KeyboardP) => useMemo(() => {
    const {handleKey, typedSentence, isFieldUpdated, pressedKeyIndex, shuffledSentences, currentSentenceIndex} = props;

    const typedIndexes = typedSentence.map(word => word.id);

    const getKeyClasses = (index:number) =>
        classNames(
            styles.key,
            isFieldUpdated ? styles.update : '',
            pressedKeyIndex === index && typedIndexes.includes(index) ? styles.key__pressed : '',
            pressedKeyIndex === index && !typedIndexes.includes(index) ? styles.key__wrong : '',
            typedIndexes.includes(index) ? styles.key__hidden : ''
        );

    return (
        <KeyboardWrapper className={styles.keyboard}>
            {shuffledSentences &&
                shuffledSentences[currentSentenceIndex].map((word, index) => (
                    <div
                        className={styles.keyWrapper}
                        key={index}>
                        <GameBtn
                            disabled={typedIndexes.includes(index)}
                            className={getKeyClasses(index)}
                            onClick={() => handleKey(word, index)}>{word}</GameBtn>
                        <span className={styles.keyBorder}> </span>
                    </div>
                ))
            }
        </KeyboardWrapper>
    );
}, [props.pressedKeyIndex, props.isFieldUpdated]);