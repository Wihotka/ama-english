import {InfoBtn} from '@components/common/game/components';
import {classNames} from 'js-data-utils';
import {isEqual} from 'lodash';
import React from 'react';
import styled, {css} from 'styled-components';

import {AnswerItemL2P, TypeField,} from '../../../type';

import styles from './styles.scss';

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

export const AnswerItemL2:React.FC<AnswerItemL2P> = (props) => {

    const {onVoicePlay, gamePlayData, handlerSelectAnswer, children, variant} = props;

    const {
        selectedVariant,
        isAnimated,
        isVoicePlay,
    } = gamePlayData;

    const typeStyleAnimateAnswer = () => {
        if (selectedVariant.isCorrect === null) return '';

        return isEqual(selectedVariant.answer, variant)
            ? selectedVariant.isCorrect ? styles.success : styles.mistake
            : isAnimated ? styles.disabled : '';

    };

    const styleAnswerItem = classNames(styles.answerVariantBlock, typeStyleAnimateAnswer());

    const animatePressBtn = isEqual(isVoicePlay.variant, variant) &&
            isVoicePlay.isPlay &&
            isVoicePlay.typeCallField === TypeField.ANSWER;

    const handleBtnPlay = () => onVoicePlay(variant, TypeField.ANSWER);

    const activeBtn = isEqual(selectedVariant.answer, variant);

    const styleBtnVoice = classNames(styles.btnPlay, isVoicePlay.isPlay && styles.btnOff);

    const onSelectAnswer = () => handlerSelectAnswer(variant);

    return (
        <AnswerItem
            className={styleAnswerItem}>

            <BtnSelectedAnswer
                className={styles.btnSelectAnswer}
                onClick={onSelectAnswer}
                isActive={activeBtn}
            />

            <span className={styles.ordinalNames}>
                {children}
            </span>

            <InfoBtn
                sizeShadow={'small'}
                classNameBtn={styleBtnVoice}
                type={'play'}
                handler={handleBtnPlay}
                isPressed={animatePressBtn}
            />
        </AnswerItem>
    );
}
;