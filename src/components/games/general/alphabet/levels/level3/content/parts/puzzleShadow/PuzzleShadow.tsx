import React from 'react';
import styled from 'styled-components';

import styles from '../../parts/bottomRow/style.scss';

const PathElem = styled.path`
  stroke: ${(props) => props.theme.colors.color7};
  fill: ${(props) => props.theme.colors.color7};
`;

export const PuzzleShadow = () => <svg
    viewBox="0 0 112 115"
    fill="none"
    className={styles.shadowSvg}
    xmlns="http://www.w3.org/2000/svg">
    <g>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fillOpacity={0.48}
            d="m91.866 12.86.074 19.742c9.702.119 20.06 3.241 20.06 21.123s-10.351 20.547-20.06 20.673l.08 20.294c0 6.795-6.135 12.308-12.806 12.308H12.73C6.058 107 0 101.487 0 94.692V72.727c9.71-.127 20.06-1.12 20.06-19.002C20.06 35.843 9.702 34.393 0 34.273V12.86C0 6.065 5.941 0 12.62 0h66.704c6.678 0 12.542 6.065 12.542 12.86Z"
            className={styles.path}/>
    </g>
    <PathElem
        d="M91.366 12.86v.002l.074 19.741.001.492.492.007c4.817.059 9.693.866 13.364 3.791 3.646 2.907 6.203 7.989 6.203 16.832s-2.555 13.806-6.194 16.598c-3.667 2.814-8.542 3.512-13.373 3.576l-.495.006.002.495.08 20.292c0 6.491-5.882 11.808-12.306 11.808H12.73C6.31 106.5.5 101.187.5 94.692V73.219c4.694-.077 9.64-.415 13.446-2.917 3.993-2.626 6.614-7.54 6.614-16.577 0-9.038-2.623-14.06-6.609-16.799C10.145 34.31 5.201 33.862.5 33.781V12.86C.5 6.33 6.226.5 12.62.5h66.704c6.39 0 12.042 5.828 12.042 12.36Z"/>
</svg>;
