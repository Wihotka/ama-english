import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import {classNames} from 'js-data-utils';

import {InputFieldP} from './../../../type';

import styles from './styles.scss';

const TextArea = styled.textarea`
  border: 2px solid ${props => props.theme.colors.color5};
`;

const StyledMark = styled.p`
    border-color: ${({theme}) => theme.colors.color5};
`;

export const InputField:React.FC<InputFieldP> = (props) => {
    const {inputText, punctuationMark, isCorrectAnswer, handleCheckingAnswer, handlerInputText, isBtnDisabled} = props;

    const handlerClick = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (inputText.length <= 0 || isBtnDisabled) return;

        if (e.key === 'Enter') {
            handleCheckingAnswer();
        }
    };
    const isCorrectStyle = isCorrectAnswer !== null
        ? isCorrectAnswer ? styles.correct : styles.mistake
        : null;

    const styleTextArea = classNames(styles.textArea, isCorrectStyle);

    return (
        <div className={styles.inputField}>
            <TextArea
                className={styleTextArea}
                value={inputText}

                onChange={(e:ChangeEvent<HTMLTextAreaElement>) => handlerInputText(e.target.value)}
                onKeyDown={(e) => handlerClick(e)}
            />
            <StyledMark className={styles.mark}>
                {punctuationMark}
            </StyledMark>
        </div>
    );
};