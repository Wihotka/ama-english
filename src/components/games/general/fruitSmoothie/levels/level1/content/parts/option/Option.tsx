import React from 'react';
import styled, {css} from 'styled-components';
import {classNames} from 'js-data-utils';

import {OptionP} from './../../../type';

import styles from './styles.scss';

const Text = styled.p`
  ${(props) => css`
    &:hover {
      color: ${props.theme.colors.color2};
      background: linear-gradient(0deg, ${props.theme.colors.color5 + 'A3'}, ${props.theme.colors.color5 + 'A3'}), #FFFFFF;;
      box-shadow: 0 6px 8px rgba(28, 6, 64, 0.24)
    }
  `}
`;

export const Option = (props:OptionP) => {
    const {optionsRef, variant, generateTransformStyles, handlerSelectOption, isFieldUpdate} = props;

    const {id, text, image, cutImage, isSelect, isCorrect, isDisabled} = variant;
    const getTransformStyles = generateTransformStyles(variant);
    const isVisibleWord = isSelect ? !isCorrect : true;

    const typeImage = isSelect
        ? isCorrect ? cutImage : image
        : image;

    const sizeImage = isSelect
        ? isCorrect ? styles.cut : styles.normal
        : styles.normal;

    const styleDisabled = isDisabled && styles.disabled;

    const styleUpdateField = !isFieldUpdate && styles.view;

    const styleOptionField = classNames(styles.option, styleDisabled, sizeImage, styleUpdateField);

    const styleIsCorrectWord = isSelect
        ? isCorrect ? styles.wordSuccess : styles.wordError
        : null;

    const styleWord = classNames(styles.word, styleIsCorrectWord);
    const styleImage = classNames(styles.image, sizeImage);

    const onSelect = () => !isSelect && !isDisabled && handlerSelectOption(variant);

    return (
        <div
            key={id}
            className={styleOptionField}
            style={getTransformStyles}
            ref={optionsRef}
            onClick={onSelect}
        >
            <img
                className={styleImage}
                src={require(`/assets/img/sections/general/fruitSmoothie${typeImage}.png`)} alt="#"/>

            {isVisibleWord &&
                <Text className={styleWord}>
                    {text}
                </Text>}
        </div>
    );
};

