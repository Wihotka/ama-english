import React, {CSSProperties} from 'react';
import styled from 'styled-components';

import {Star} from '@components/common/game/components';
import {Block} from '../block';

import styles from './styles.scss';

type Props = {
    progressPercent:number;
    valuesThresholds:Array<number>;
    needHideProgressBar:boolean;
};

const ProgressLink = styled.div`
    background: ${props => props.theme.colors.color6};
    box-shadow: ${props => `inset 0px -4px 6px ${props.theme.colors.color3 + 'B8'}, inset -4px -6px 4px rgba(138, 69, 169, 0.24)`};
`;

export const ProgressBar = ({progressPercent, valuesThresholds, needHideProgressBar}:Props) => {
    const progressStyle:CSSProperties = {
        width: `${progressPercent}%`
    };

    const starsPercents = [
        progressPercent >= valuesThresholds[0],
        progressPercent >= valuesThresholds[1],
        progressPercent >= valuesThresholds[2]
    ];

    return (
        <Block style={{opacity: needHideProgressBar ? 0 : 1}} type={'progress'}>
            <div className={styles.starWrapper}>
                {starsPercents.map((progress, idx) =>
                    <Star key={idx} isFullStar={progress}/>
                )}
            </div>
            <ProgressLink className={styles.line} style={progressStyle} />
        </Block>
    );
};