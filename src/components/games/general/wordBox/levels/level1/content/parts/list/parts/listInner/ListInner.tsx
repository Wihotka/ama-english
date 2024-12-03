import React from 'react';
import styled from 'styled-components';

import {LocalizedText} from '@components/common';
import {ListT} from '../../List';

import styles from './style.scss';

const NumberElem = styled.span`
    color: ${(props) => props.theme.colors.color8};
`;

type ListInnerT = {
    complexity:ListT['complexity'],
    wordsQty:ListT['wordsQty'],
    gamePlayData:ListT['gamePlayData'],
    placedWords:ListT['placedWords'],
    theme:string;
};

export const ListInner = ({complexity, gamePlayData, placedWords, wordsQty, theme}:ListInnerT) => {
    const {foundWords, additionalWords} = gamePlayData;

    return complexity === 1
        ? <>
            <div className={styles.title}>
                <LocalizedText name={'leftToFind'} path={'games/general/wordBox/translation'}/>:
            </div>
            <div className={styles.wordsWrap}>
                {placedWords.map(({word}, index) => 
                    <div key={index} className={styles.wordWrap}>
                        <div className={styles.word}>
                            {foundWords.includes(word)
                                ? <div className={styles.crossLine}/>
                                : null}
                            {word.charAt(0).toUpperCase() + word.substring(1)}</div>
                    </div>
                )}
            </div>
            <div className={styles.additionalWord}>
                {additionalWords.length ? <p>Дополнительное слово: +{additionalWords.length}</p> : null}
            </div>
        </>
        : <>
            <div className={styles.title}>
                <LocalizedText name={'moreToFind'} path={'games/general/wordBox/translation'}/>:
                <NumberElem className={styles.number}> {wordsQty - foundWords.length} </NumberElem>
                <LocalizedText
                    name={getName(placedWords.length - foundWords.length)}
                    path={'games/general/wordBox/translation'}/>
            </div>
            <div className={styles.theme}>
                <LocalizedText name={'controls.theme'} path={'settings/translation'}/>: <LocalizedText name={`values.${theme}`} path={'settings/translation'}/>
            </div>
            <div className={styles.subtitle}>
                <LocalizedText name={'found'} path={'games/general/wordBox/translation'}/>:
            </div>
            <div className={styles.wordsWrap}>
                {foundWords.map((word, index) => 
                    <div key={index} className={styles.wordWrap}>
                        <p className={styles.word}>{word.charAt(0).toUpperCase() + word.substring(1)}</p>
                    </div>
                )}
            </div>
            <div className={styles.additionalWord}>
                {additionalWords.length ? <p>Дополнительное слово: +{additionalWords.length}</p> : null}
            </div>
        </>;
};

const getName = (qty:number) => {
    if ([0, 5, 6, 7, 8].includes(qty)) {
        return 'words0';
    } else if (qty === 1) {
        return 'words1';
    }

    return 'words2';
};
