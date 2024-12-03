import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import {classNames} from 'js-data-utils';

import {InputFieldP} from './../../../type';

import styles from './styles.scss';

const Input = styled.input`
  border: 4px solid ${props => props.theme.colors.color5};
`;

export const InputField:React.FC<InputFieldP> = (props) => {
    const {inputText, isCorrectAnswer, handlerInputText, handleCheckingAnswer,isDisableCheck} = props;

    const handlerClick = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (isDisableCheck) return;

        if (e.key === 'Enter') {
            handleCheckingAnswer();
        }
    };
    const isCorrectStyle = isCorrectAnswer !== null
        ? isCorrectAnswer ? null : styles.mistake
        : null;

    const styleInput = classNames(styles.input);

    const styleLabel = classNames(styles.label, isCorrectStyle);

    return (
        <div className={styles.inputField}>
            <label className={styleLabel}>
                <Input
                    className={styleInput}
                    type="text"
                    value={inputText}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => handlerInputText(e.target.value)}
                    onKeyDown={handlerClick}
                />
            </label>
        </div>
    );
};