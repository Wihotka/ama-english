import React from 'react';
import styles from './style.scss';

type AlphabetImageP = {
    isSmile:boolean;
    i:number;
    style?:React.CSSProperties;
};

export const AlphabetImage = ({isSmile, i, style}:AlphabetImageP) =>
    isSmile ? (
        <img
            src={require(`/assets/img/resources/smiles/${i + 1}.png`)}
            alt=""
            className={styles.image}
        />
    ) : (
        <div className={styles.symbolContainer} style={style}>
            <img
                src={require(`/assets/img/sections/fun/secretCode/symbols/${
                    i + 1
                }.png`)}
                alt=""
                className={styles.image}
            />  
        </div>
    );
