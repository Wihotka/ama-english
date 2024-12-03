import React from 'react';
import styled, {css} from 'styled-components';
import {classNames} from 'js-data-utils';

import {InfoBtn} from '@components/common/game/components';

import {AnswerItemType2P, TypeField} from '../../../type';

import styles from './style.scss';

const AnswerItem = styled.div`
  color: ${(props) => props.theme.colors.color4};
  border: 1px solid ${(props) => props.theme.colors.color7};
`;

const BtnSelectedAnswer = styled.button<{ isActive:boolean }>`
  ${(props) => props.isActive
        ? css`
            background-color: ${props.theme.colors.color7};
            box-shadow: 0 2px 0 ${props.theme.colors.color8},
              inset -2px -4px 8px rgba(229, 99, 126, 0.4),
            inset 2px 4px 4px rgba(247, 235, 236, 0.4);
          `
        : css`
            background-color: #fff;
            border: 2px solid ${(props) => props.theme.colors.color7};
            box-shadow: 0 2px 0 ${props.theme.colors.color8}, inset -2px -4px 8px rgba(187, 214, 255, 0.64),
            inset 2px 4px 4px rgba(247, 235, 236, 0.4);
          `}
  &:hover {
    background-color: ${(props) => props.theme.colors.color7};
    box-shadow: 0 2px 0 ${(props) => props.theme.colors.color8},
    0 4px 12px ${(props) => props.theme.colors.color7},
      inset -2px -4px 8px rgba(229, 99, 126, 0.4),
    inset 2px 4px 4px rgba(247, 235, 236, 0.4);
  }
`;

export const AnswerItemType2:React.FC<AnswerItemType2P> = (props) => {
    const {gamePlayData, handlerSelectAnswer, onVoicePlay, variant, children} = props;
    const {selectedVariant, isAnimated, isVoicePlay} = gamePlayData;

    const onSelectAnswer = () => handlerSelectAnswer(variant);

    const handleBtnPlay = () => onVoicePlay(variant.selectedTranscription, TypeField.ANSWER);

    const styleAnimateAnswer = () => {
        if (selectedVariant.isCorrect === null) return '';

        const isAnimate = selectedVariant.answer === variant.selectedTranscription;

        return isAnimate
            ? selectedVariant.isCorrect ? styles.success : styles.mistake
            : isAnimated ? styles.disabled : '';
    };

    const styleAnswerItem = classNames(styles.answerVariantBlock, styleAnimateAnswer());

    const styleBtnVoice = classNames(styles.btnPlay, isVoicePlay.isPlay && styles.btnOff);

    const animatePressBtn
        = isVoicePlay.transcription === variant.selectedTranscription &&
        isVoicePlay.isPlay &&
        isVoicePlay.typeCallField === TypeField.ANSWER;

    return (
        <AnswerItem
            className={styleAnswerItem}>

            <BtnSelectedAnswer
                className={styles.btnSelectAnswer}
                onClick={onSelectAnswer}
                isActive={selectedVariant.answer === variant.selectedTranscription}
            />

            <span className={styles.ordinalNames}>
                {children}
            </span>
            <InfoBtn
                sizeShadow={'small'}
                type={'play'}
                classNameBtn={styleBtnVoice}
                handler={handleBtnPlay}
                isPressed={animatePressBtn}
            />
        </AnswerItem>
    );
};