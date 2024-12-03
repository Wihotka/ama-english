import React from 'react';
import styled from 'styled-components';

import styles from './styles.scss';

const Shadow = styled.div`
    background: ${(props) => props?.theme?.colors?.color3 || '#229C8E'
}`;

export const Spinner = () => (
    <div>
        <Loading/>
        <Shadow className={styles.shadow}/>
    </div>
);

const Circle = styled.circle`
    stroke: ${(props) => props?.theme?.colors?.color6 || '#21DBC5'
}`;

const Path = styled.path`
    fill: ${(props) => props?.theme?.colors?.color2 || '#AAEEE2'
}`;

export const Loading = () =>
    <svg
        width={120}
        height={120}
        className={styles.round}
        fill="none">
        <Circle strokeOpacity={0.72} cx={60} cy={60} r={54} strokeWidth={12}/>
        <Path
            d="M105.3 30.6c2.8-1.8 6.5-1 8 2a60 60 0 0 1-12.9 71.8c-2.4 2.2-6.2 1.6-8.2-1-2-2.7-1.4-6.4 1-8.7a48 48 0 0 0 10-55.6c-1.4-3-.7-6.7 2-8.5Z">
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 60 60"
                to="360 60 60"
                dur="1.5s"
                repeatCount="indefinite"/>
        </Path>
    </svg>;