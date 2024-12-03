import React from 'react';
import styled from 'styled-components';

import styles from './style.scss';

import {WordBox_GamePlayData} from '../../../type';
import {WordBox_ImagesPaths} from '../../../../../type';

import {ListInner} from './parts';

export type ListT = {
    gamePlayData:WordBox_GamePlayData;
    placedWords:Array<{ word:string, start?:{ col:number, row:number } }>;
    complexity:number;
    wordsQty:number;
    imagesPaths:WordBox_ImagesPaths | undefined;
    theme:string;
};

const Line = styled.div`
    background: ${(props) => props.theme.colors.color1 + '32'};
`;

const Staple = styled.div`
    background: ${(props) => props.theme.colors.color5};
`;

export const List = ({gamePlayData, placedWords, complexity, wordsQty, imagesPaths, theme}:ListT) =>
    <div className={styles.list}>
        <div className={styles.lines}>
            {new Array(12).fill(null).map((_, index) => <Line key={index}/>)}
        </div>
        <Papers imagesPaths={imagesPaths}/>
        <div className={styles.staples}>
            {new Array(3).fill(null).map((_, index) => <Staple key={index} className={styles.staple}/>)}
        </div>
        <ListInner
            complexity={complexity}
            wordsQty={wordsQty}
            gamePlayData={gamePlayData}
            placedWords={placedWords}
            theme={theme}
        />
    </div>;

const Papers = ({imagesPaths}:{imagesPaths:any}) => {
    const papers = [1, 2, 3, 4];

    return (
        <div className={styles.sheets}>
            {
                papers.map((paper) =>
                    <img
                        key={paper}
                        src={imagesPaths ? imagesPaths['paper'] : ''}
                        style={{left: paper * 2 + 'px', top: paper * 2 + 'px', zIndex: -paper}}
                        alt={''}
                        className={styles.paper}/>)
            }
        </div>
    );
};
