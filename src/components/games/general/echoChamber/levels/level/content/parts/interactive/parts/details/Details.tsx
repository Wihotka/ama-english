import React, {useMemo} from 'react';
import styled from 'styled-components';

import {LocalizedText} from '@components/common';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {DetailsP} from './../../../../../type';

const Summary = styled.span`
  color: ${props => props.theme.colors.color1};
`;

const Sentence = styled.p`
  color: ${props => props.theme.colors.color1};
`;

export const Details = (props:DetailsP) => useMemo(() => {
    const {sentences, isDetailsShowed, handleDetailsCB, currentSentenceIndex} = props;
    const sentence = sentences[currentSentenceIndex].text;

    const getDetailsClasses = () =>
        classNames(
            styles.details,
            isDetailsShowed ? styles.details__showed : ''
        );

    return (
        <div
            className={getDetailsClasses()}>
            <Summary
                className={styles.summary}
                onClick={handleDetailsCB}>
                <LocalizedText
                    useSuspense={false}
                    name={isDetailsShowed && 'hideText' || 'showText'}
                    path={'games/general/echoChamber/static/translation'}/>
            </Summary>
            <Sentence
                className={styles.sentence}>
                {sentence}</Sentence>
        </div>
    );
}, [props.isDetailsShowed, props.currentSentenceIndex]);