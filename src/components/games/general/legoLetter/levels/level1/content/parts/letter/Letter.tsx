import React from 'react';
import styled from 'styled-components';

import styles from './style.scss';

const LetterWrapperElem = styled.div`
  border: 1px solid ${(props) => props.theme.colors.color6};
  background: ${props => props.theme.colors.color4};
`;

type LetterP = {
    letterPaths:Array<string>,
    selectedIndexes:Array<number>,
    height:number
};

export const Letter = ({letterPaths, selectedIndexes, height}:LetterP) => {
    const getPaths = (paths:Array<string>) => paths.map((letterPath:string, index:number) =>
        <path
            key={index}
            fill="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d={letterPath}/>);

    return (
        <LetterWrapperElem className={styles.letter}>
            <svg
                className={styles.svg}
                viewBox={`0 0 112 ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g style={{opacity: 0.32}}>
                    {getPaths(letterPaths)}
                </g>
                {getPaths(letterPaths.filter((letterPaths, index) => selectedIndexes.includes(index)))}
            </svg>
        </LetterWrapperElem>
    );
};
