import React from 'react';
import styled from 'styled-components';

import {LocalizedText} from '@components/common';
import {Streak} from './streak';
import styles from './style.scss';

type PointsP = {
    score:number;
    pointsPerAnswer:number;
    streak:number;
};

const CommonContainer = styled.div`
    border: ${({theme}) => `1px solid ${theme.colors.color6}`};
`;

const Text = styled.p`
    color: ${({theme}) => theme.colors.color1};
`;

export const Points = ({pointsPerAnswer, streak, score}:PointsP) => (
    <div className={styles.pointsContainer}>
        <CommonContainer className={styles.commonContainer}>
            <Text className={styles.commonText}>
                <LocalizedText
                    name="pointsPerAnswer"
                    path="games/fun/makeYourChoice/static/translation"
                />:
                {pointsPerAnswer}
            </Text>
            <Streak streak={streak} />
        </CommonContainer>
        <CommonContainer className={styles.commonContainer}>
            <Text className={styles.commonText}>
                <LocalizedText
                    name="score"
                    path="games/fun/makeYourChoice/static/translation"
                />:
            </Text>
            <Text className={styles.scorePoints}>{score}</Text>
        </CommonContainer>
    </div>
);
