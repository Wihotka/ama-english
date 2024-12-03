import {classNames} from 'js-data-utils';
import React from 'react';
import styled, {css, keyframes} from 'styled-components';

import {InterfaceQuestionFieldP} from '../../../type';

import styles from './style.scss';

const openKeyframe = keyframes`
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100.5px);
    opacity: 0;
    visibility: hidden;
  }
`;

const optionAnimation = css`
  animation: 300ms linear ${openKeyframe} forwards;
`;

const OptionItem = styled.div<{
    isAnimated:boolean,
    numberOption:number,
    numberElement:number,
}>`
  bottom: ${(props) => (props.numberElement * 8) - (props.numberOption * 8)}px;

  transition: all 500ms;

  ${(props) => (props.numberElement === props.numberOption && props.isAnimated) && optionAnimation}

  opacity: ${(props) => props.numberElement < props.numberOption && 0};

  @media (orientation: landscape) and (max-width: 732px) {
    bottom: ${(props) => (props.numberElement * 4) - (props.numberOption * 4)}px;
  }
  @media (orientation: portrait) and (max-width: 412px) {
    bottom: ${(props) => (props.numberElement * 4) - (props.numberOption * 4)}px;
  }
`;

const Field = styled.div<{ answersQty:number }>`
  margin-top: ${(props) => (props.answersQty * 8)}px;

  @media (orientation: landscape) and (max-width: 732px) {
    margin-top: ${(props) => (props.answersQty * 4)}px;
  }
  @media (orientation: portrait) and (max-width: 412px) {
    margin-top: ${(props) => (props.answersQty * 4)}px;
  }
`;

const WordLetter = styled.p`
  //color: ${(props) => props.theme.colors.color4}
  color: #9066C6;
`;

export const QuestionField = React.memo<InterfaceQuestionFieldP>((props) => {
    const {gameData, gamePlayData} = props;
    const {arrayOptions, level, answersQty} = gameData;
    const {numberOptions, isFieldUpdate} = gamePlayData;

    const fieldSize = level === 1 ? styles.field1 : styles.field2;

    const typeOptions = level === 1 ? styles.option1 : styles.option2;

    const styleField = classNames(styles.field, fieldSize);

    const styleOptions = classNames(styles.option, typeOptions);

    return (
        <Field
            className={classNames(styleField)}
            answersQty={answersQty}>

            {arrayOptions.map((option, index) =>
                <OptionItem
                    className={styleOptions}
                    numberOption={numberOptions}
                    numberElement={index}
                    isAnimated={isFieldUpdate}
                    key={index}>

                    {level === 1 && <WordLetter className={styles.text}>{option.question}</WordLetter>}

                    {level === 2 && <img className={styles.image} src={require(`/assets/img/resources${option.question}`)}
                        alt={index.toString()} />}

                </OptionItem>
            ).reverse()}
        </Field>
    );
});