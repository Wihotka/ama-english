import {classNames} from 'js-data-utils';
import React from 'react';
import styled from 'styled-components';
import {
    SecretCode_AlphabetLetter,
    SecretCode_ImagesPaths,
} from '../../../../../type';
import {ChangeMapVisibilityT} from '../../../type';
import {Alphabet} from './alphabet';
import styles from './style.scss';

const ButtonInner = styled.div`
    background: ${({theme}) => theme.colors.color5};
`;

const StyledButton = styled.button`
    &:hover ${ButtonInner} {
        background: ${({theme}) =>
        `linear-gradient(0deg, ${theme.colors.color5}cc, ${theme.colors.color5}cc), #FFFFFF`};
    }

    &:active ${ButtonInner} {
        background: ${({theme}) => `${theme.colors.color5}`};
        box-shadow: 0 0 12px #002B53, inset 10px 14px 16px -6px rgba(255, 207, 173, 0.56), inset -10px -14px 16px -6px rgba(220, 79, 0, 0.56);
    }
`;

type MapP = {
    alphabet:SecretCode_AlphabetLetter[];
    isMapOpen:boolean;
    isHardMode:boolean;
    isImage:boolean;
    isSmile:boolean;
    imagesPaths:SecretCode_ImagesPaths | undefined;
    changeMapVisibility:ChangeMapVisibilityT;
};

export const Map = ({
    alphabet,
    isMapOpen,
    isHardMode,
    isImage,
    isSmile,
    imagesPaths,
    changeMapVisibility,
}:MapP) => {
    const mapContainerClassName = classNames(
        styles.mapContainer,
        isHardMode && isMapOpen ? styles.mapContainerHard : ''
    );
    const mapContainerStyle = isHardMode && !isMapOpen
        ? {background: 'none', boxShadow: 'none', opacity: 1}
        : {};

    return (
        <div
            className={mapContainerClassName}
            style={mapContainerStyle}
        >
            {isHardMode && !isMapOpen && (
                <StyledButton
                    type="button"
                    className={styles.openButton}
                    onClick={() => changeMapVisibility(true)}
                >
                    <ButtonInner className={styles.openButtonInner}>
                        <img src={imagesPaths?.open} draggable={false} alt={'ButtonInner'}/>
                    </ButtonInner>
                </StyledButton>
            )}
            {isMapOpen && (
                <Alphabet
                    alphabet={alphabet}
                    imagesPaths={imagesPaths}
                    isHardMode={isHardMode}
                    isImage={isImage}
                    isSmile={isSmile}
                    changeMapVisibility={changeMapVisibility}
                />
            )}
        </div>
    );
};
