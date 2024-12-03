import React, {useMemo} from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';
import {InfoBtn} from '@components/common/game/components/info-btn';

import styles from './style.scss';

import {InteractiveP} from '../../../type';

const Word = styled.p`
  color: #9066C6;
`;

const Syllable = styled.span<{currentIndex:number, rightIndex:number}>`
  color: ${props => props.currentIndex === props.rightIndex ? '#E07E92' : 'inherit'};
`;

const Sound = styled.p`
  color: #9066C6;
`;

export const Interactive = (props:InteractiveP) => useMemo(() => {
    const {gameData, gamePlayData, handlePlayCB, level} = props;
    const {words, rightIndexes} = gameData;
    const {isFieldUpdating, isPlayButtonPressed, currentWordIndex} = gamePlayData;
    const currentRightWord = words[currentWordIndex][0];

    return (
        <div className={classNames(styles.interactive, level === 1 ? styles.interactiveL1 : '')}>

            {level === 1 &&
                <img
                    className={classNames(styles.img, isFieldUpdating ? styles.updating : '')}
                    src={`${currentRightWord.imageUrls}`}
                    alt={currentRightWord.word}/>
            }

            {level === 2 &&
                <Word
                    className={classNames(styles.word, isFieldUpdating ? styles.updating : '')}>
                    { // @ts-ignore
                        words[currentWordIndex].dividedWord.map((syllable, index) => (
                            <Syllable
                                key={index}
                                currentIndex={index}
                                rightIndex={rightIndexes[currentWordIndex]}
                                className={styles.syllable}>
                                {index === 0 ? syllable[0].toUpperCase() + syllable.slice(1) : syllable}</Syllable>
                        ))
                    }
                </Word>
            }

            {level === 3 &&
                <Sound className={classNames(styles.sound, isFieldUpdating ? styles.updating : '')}>
                    [{// @ts-ignore
                        currentRightWord.dividedTranscription[rightIndexes[currentWordIndex][0]]
                    }]
                </Sound>
            }

            <InfoBtn
                sizeShadow={'small'}
                type={'play'}
                classNameBtn={styles.play}
                isPressed={isPlayButtonPressed}
                handler={handlePlayCB}/>
        </div>
    );
}, [props.gamePlayData.isFieldUpdating, props.gamePlayData.isPlayButtonPressed]);