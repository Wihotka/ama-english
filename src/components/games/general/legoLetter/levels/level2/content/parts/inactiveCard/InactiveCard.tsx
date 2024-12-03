import React from 'react';
import styled from 'styled-components';

import styles from './styles.scss';

import {LegoLetterL2_GamePlayData} from '../../../type';

const InactiveCardWrapperElem = styled.div`
  border: 1px solid ${(props) => props.theme.colors.color6};
  background: ${props => props.theme.colors.color4};
`;

type CardT = {
    height:number,
    width:number,
    path:string,
    imgName:string,
    clickHandler?:Function,
    gamePlayData?:LegoLetterL2_GamePlayData
};

export const InactiveCard = ({height, width, path, imgName}:CardT) => (
    <InactiveCardWrapperElem className={styles.card}>
        <div className={styles.letter}>
            <svg
                style={{filter: 'drop-shadow(1px 2px 0px #38166D)'}}
                // viewBox={`0 0 112 ${height}`}
                width={width}
                height={height}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FFFFFF"
                    d={path}/>
            </svg>
        </div>
        <img
            className={styles.cardImage}
            src={require(`_assets/img/sections/general/legoLetter/animals/${imgName}.png`)}
            alt={''}
        />
    </InactiveCardWrapperElem>
);