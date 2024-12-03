import React from 'react';
import styles from './style.scss';

type WordP = {
    word:string;
    img:string | undefined;
    showImage:boolean;
};

export const Word = ({word, img, showImage}:WordP) => {
    const wordContainerStyle:React.CSSProperties = showImage
        ? {}
        : {justifyContent: 'center'};

    return (
        <div className={styles.wordContainer} style={wordContainerStyle}>
            {showImage && img ? (
                <>
                    <p className={styles.wordTextContainer}>{word}</p>
                    <div className={styles.wordImageContainer}>
                        <img src={img} alt="" className={styles.wordImage} />
                    </div>
                </>
            ) : (
                <p className={styles.wordTextContainer}>{word}</p>
            )}
        </div>
    );
};
