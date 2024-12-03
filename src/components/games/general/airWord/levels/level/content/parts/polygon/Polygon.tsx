import React from 'react';
import {upperFirst} from 'lodash';
import styled, {css, keyframes} from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {PolygonP} from '../../../type';

const planeAnimation = keyframes`
    0%{transform: translateX(calc(0% - 324px))}
    100%{transform: translateX(calc(100% + 224px))}
`;

const BackField = styled.div<{speedInSeconds:string, isAnimate:boolean, isPaused:boolean}>`
    ${props => {
        if (props.isAnimate) {return css`
            animation: ${planeAnimation} ${props.speedInSeconds}s linear;
            animation-play-state: ${props.isPaused ? 'paused' : 'running'};
        `;}
        
        return undefined;
    }};
`;

const FrontField = styled.div<{speedInSeconds:string, isAnimate:boolean, isPaused:boolean}>`
    ${props => {
        if (props.isAnimate) {return css`
            animation: ${planeAnimation} ${props.speedInSeconds}s linear;
            animation-play-state: ${props.isPaused ? 'paused' : 'running'};
        `;}
        
        return undefined;
    }};
`;

const Word = styled.p`
    background-color: #fff;
`;

const Plane = styled.span`
    @media (hover: hover) {
        &:hover {
            ${Word} {background: ${props => props.theme.colors.gradient8}}
            }
    }
`;

export const Polygon = (props:PolygonP) => {
    const {
        isAnimate,
        mistakeQty,
        candidateWord,
        isFieldUpdate,
        handlePlaneCB,
        wordsForPlanes,
        speedInSeconds,
        currentWordsIndex,
        correctWordStatus
    } = props;

    const isBigField = wordsForPlanes[currentWordsIndex].length === 4;

    const getWrapperClasses = () =>
        classNames(
            styles.wrapper,
            isBigField ? styles.wrapper__big : styles.wrapper__small,
            mistakeQty > 0 ? styles.wrapperMove : ''
        );

    const getWordClasses = (word:string) =>
        classNames(
            styles.word,
            candidateWord === word && correctWordStatus === 'success' ? styles.word__success : '',
            candidateWord === word && correctWordStatus === 'error' ? styles.word__error : ''
        );

    const getPlaneClasses = (word:string) =>
        classNames(
            styles.plane,
            isFieldUpdate ? styles.update : '',
            candidateWord === word && correctWordStatus === 'success' ? styles.move : ''
        );

    // Выставляем время для backfield и frontfield
    const backSpeed = (+speedInSeconds * 1.5).toString();
    const frontSpeed = (+speedInSeconds * 3).toString();

    return (
        <div className={getWrapperClasses()}>
            <BackField
                className={styles.backfield}
                speedInSeconds={backSpeed}
                isAnimate={isAnimate}
                isPaused={mistakeQty > 1}
            >
                <FrontField
                    className={styles.frontfield}
                    speedInSeconds={frontSpeed}
                    isAnimate={isAnimate}
                    isPaused={mistakeQty > 0}
                >
                    {wordsForPlanes[currentWordsIndex] &&
                        wordsForPlanes[currentWordsIndex].map((word, index) =>
                            <Plane
                                key={index}
                                className={getPlaneClasses(word)}
                                onClick={() => handlePlaneCB(word)}>
                                <Word className={getWordClasses(word)}>{upperFirst(word)}</Word></Plane>
                        )
                    }
                </FrontField>
            </BackField>
        </div>
    );
};