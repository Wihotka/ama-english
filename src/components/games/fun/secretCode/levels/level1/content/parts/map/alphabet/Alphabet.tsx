import {classNames} from 'js-data-utils';
import React from 'react';
import styled from 'styled-components';
import {
    SecretCode_AlphabetLetter,
    SecretCode_ImagesPaths,
} from '../../../../../../type';
import {ChangeMapVisibilityT} from '../../../../type';
import {AlphabetImage} from '../../alphabetImage';
import styles from './style.scss';

const AlphabetContainer = styled.div`
    scrollbar-color: ${({theme}) => `${theme.colors.color6} #FFFFFF`};
`;

type AlphabetP = {
    alphabet:SecretCode_AlphabetLetter[];
    imagesPaths:SecretCode_ImagesPaths | undefined;
    isHardMode:boolean;
    isImage:boolean;
    isSmile:boolean;
    changeMapVisibility:ChangeMapVisibilityT;
};

export const Alphabet = ({
    alphabet,
    imagesPaths,
    isHardMode,
    isImage,
    isSmile,
    changeMapVisibility,
}:AlphabetP) => {
    const alphabetStyle:React.CSSProperties = isHardMode ? {flexFlow: 'wrap', justifyContent: 'center'} : {};
    const alphabetItemClassName = classNames(
        styles.alphabetItem,
        isImage ? styles.alphabetItemImage : ''
    );
    const alphabetInnerClassName = classNames(
        styles.alphabetItemInner,
        isImage ? styles.alphabetItemInnerImage : ''
    );
    const alphabetItemLetterClassName = classNames(
        styles.alphabetItemLetter,
        isImage ? styles.alphabetItemLetterAlt : ''
    );

    return (
        <AlphabetContainer className={styles.alphabetContainer} style={alphabetStyle}>
            {isHardMode && (
                <button
                    onClick={() => changeMapVisibility(false)}
                    className={styles.closeButton}
                >
                    <img src={imagesPaths?.close} alt="" />
                </button>
            )}
            {alphabet.map(({letter, color}, i) => (
                <div key={i} className={alphabetItemClassName}>
                    <div
                        className={alphabetInnerClassName}
                        style={{background: isImage ? '#fff' : color}}
                    >
                        {isImage ? (
                            <AlphabetImage isSmile={isSmile} i={i} />
                        ) : (
                            i + 1
                        )}
                    </div>
                    <div className={alphabetItemLetterClassName}>
                        {letter.toUpperCase()}
                    </div>
                </div>
            ))}
        </AlphabetContainer>
    );
};
