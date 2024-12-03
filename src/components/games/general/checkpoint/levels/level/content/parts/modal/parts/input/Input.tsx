import React, {useMemo} from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {InputP} from '../../../../../type';

const InputElement = styled.input`color: ${props => props.theme.colors.color2}`;

export const Input = (props:InputP) => useMemo(() => {
    const {inputValue, answerStatus, handleInputCB, compareValuesCB} = props;

    const getInputWrapperClasses = () =>
        classNames(
            styles.inputWrapper,
            answerStatus === 'success' ? styles.inputWrapper__success : '',
            answerStatus === 'error' ? styles.inputWrapper__error : ''
        );

    const handleKeyEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (inputValue.length === 0 || answerStatus !== '') return;

        e.code === 'Enter' ? compareValuesCB() : null;
    };

    return (
        <div className={getInputWrapperClasses()}>
            <InputElement
                type="text"
                value={inputValue}
                spellCheck={false}
                className={styles.input}
                onKeyDown={handleKeyEnter}
                onChange={(e) => handleInputCB(e)}/></div>
    );
}, [props.answerStatus, props.inputValue]);