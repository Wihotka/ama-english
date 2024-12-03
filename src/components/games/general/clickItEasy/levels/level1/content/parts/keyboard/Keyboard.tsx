import React from 'react';
import styled from 'styled-components';

import {GameBtn} from '@components/common/game/components/game-btn';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {KeyboardP, keyActions} from '../../../type';

const KeyboardWrapper = styled.div`
  background: ${props => props.theme.colors.gradient9}
`;

const Key = styled.div`
  & > .hidden {
    animation: keyPressed .3s .3s forwards;

    box-shadow: 0 0 0 #5B2377;
    transform: translateY(4px);
    background: ${props => props.theme.colors.gradient5} !important;
    pointer-events: none;
  }
`;

const Imprint = styled.span`
    background: ${props => props.theme.colors.opacityColor1};
    border-color: ${props => props.theme.colors.opacityColor2};
`;

export const Keyboard = (props:KeyboardP) => {
    const {handleKey, typedSentence, isFieldUpdated, shuffledSentences, currentSentenceIndex} = props;

    const typedIndexes = typedSentence.map(word => word.id);

    const getKeyClasses = (index:number) =>
        classNames(
            styles.key,
            isFieldUpdated ? styles.update : '',
            typedSentence.map(word => word.id).includes(index) ? 'hidden' : '',
            typedIndexes.includes(index) ? styles.keyHidden : ''
        );

    return (
        <KeyboardWrapper className={styles.keyboard}>
            {shuffledSentences &&
                shuffledSentences[currentSentenceIndex].map((word, index) => (
                    <div
                        className={styles.keyWrapper}
                        key={index}>
                        <Key>
                            <GameBtn
                                disabled={typedSentence.map(word => word.id).includes(index)}
                                className={getKeyClasses(index)}
                                onClick={() => handleKey(word, keyActions.add, index)}>{word}</GameBtn>
                        </Key>
                        <Imprint className={styles.keyBorder}/>
                        {/* <span className={styles.keyBorder}> </span> */}
                    </div>
                ))
            }
        </KeyboardWrapper>
    );
};