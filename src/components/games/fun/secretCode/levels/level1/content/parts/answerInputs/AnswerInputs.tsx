import {Btn} from '@components/common/elements';
import {classNames} from 'js-data-utils';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {ChangeActiveInputT, ChangeUserAnswersT} from '../../../type';
import styles from './style.scss';
import {SecretCode_AlphabetLetter} from '@components/games/fun/secretCode/type';

const InputContainer = styled.div`
    border: ${({theme}) => `2px solid ${theme.colors.color5}`};

    &:hover {
        background: ${({theme}) =>
        `linear-gradient(0deg, ${theme.colors.color6}33 , ${theme.colors.color6}33), #FFFFFF`};
    }
`;

const HLine = styled.div`
  background-color: ${({theme}) => theme.colors.color5};
`;

type AnswerInputsP = {
    userAnswers:string[];
    mistakeIndexes:number[];
    mistakesQty:number;
    highlight:boolean;
    activeInputIndex:number;
    isBtnDisabled:boolean;
    changeActiveInput:ChangeActiveInputT;
    changeUserAnswers:ChangeUserAnswersT;
    alphabet:SecretCode_AlphabetLetter[];
    checkAnswer:() => void;
};

export const AnswerInputs = ({
    alphabet,
    userAnswers,
    mistakeIndexes,
    mistakesQty,
    activeInputIndex,
    highlight,
    isBtnDisabled,
    changeActiveInput,
    changeUserAnswers,
    checkAnswer,
}:AnswerInputsP) => {
    const inputsRef = useRef<HTMLDivElement>(null);
    const inputClassName = (i:number) =>
        classNames(
            styles.inputContainer,
            highlight
                ? mistakeIndexes.includes(i)
                  || (mistakeIndexes.length && mistakesQty === 0)
                    ? styles.wrong
                    : styles.correct
                : ''
        );

    useEffect(() => {
        if (inputsRef.current) {
            const input = inputsRef.current.children[activeInputIndex]
                .firstChild as HTMLInputElement;

            input.focus();
        }
    }, [activeInputIndex]);

    const handleKeyDown
        = (i:number):React.KeyboardEventHandler<HTMLInputElement> =>
            (e) => {
                const answer = userAnswers[activeInputIndex];

                switch (e.key) {
                    case 'Enter': {
                        !highlight &&
                        !userAnswers.some((a) => a === '') &&
                        checkAnswer();

                        return;
                    }
                    case 'Delete':
                    case 'Backspace': {
                        e.preventDefault();
                        answer
                            ? changeUserAnswers('', i)
                            : changeActiveInput('prev');

                        return;
                    }
                    case 'ArrowLeft': {
                        changeActiveInput('prev');

                        return;
                    }
                    case 'ArrowRight': {
                        changeActiveInput('next');

                        return;
                    }
                }
            };

    const handleChange
        = (i:number):React.ChangeEventHandler<HTMLInputElement> =>
            (e) => {
                const {value} = e.target;

                alphabet.map(({letter}) => {
                    if (letter === value.toLowerCase()) {
                        if (value.length > 1 || value.includes(' ')) return;

                        changeUserAnswers(value, i);
                        value.length && changeActiveInput('next');
                    }
                });
            };

    return (
        <div className={styles.inputsWrapper}>
            <div ref={inputsRef} className={styles.answerInputContainer}>
                {userAnswers.map((v, i) => (
                    <InputContainer key={i} className={inputClassName(i)}>
                        <input
                            className={styles.input}
                            type="text"
                            value={v}
                            onFocus={() => changeActiveInput(i)}
                            onKeyDown={handleKeyDown(i)}
                            onChange={handleChange(i)}
                        />
                        <HLine className={styles.hLine} />
                    </InputContainer>
                ))}
            </div>
            <div className={styles.inputsCheckBtnContainer}>
                <Btn
                    handler={checkAnswer}
                    className={styles.checkBtnMini}
                    type="primary"
                    disabled={isBtnDisabled}
                >
                    <svg
                        width="20"
                        height="30"
                        viewBox="0 0 20 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.26119 0.447772C2.40391 -0.248761 1.14431 -0.118457 0.447772 0.738815C-0.248761 1.59609 -0.118457 2.85569 0.738815 3.55223L3.26119 0.447772ZM18 15L19.2612 16.5522C19.7286 16.1724 20 15.6023 20 15C20 14.3977 19.7286 13.8276 19.2612 13.4478L18 15ZM0.738815 26.4478C-0.118457 27.1443 -0.248761 28.4039 0.447772 29.2612C1.14431 30.1185 2.40391 30.2488 3.26119 29.5522L0.738815 26.4478ZM0.738815 3.55223L16.7388 16.5522L19.2612 13.4478L3.26119 0.447772L0.738815 3.55223ZM16.7388 13.4478L0.738815 26.4478L3.26119 29.5522L19.2612 16.5522L16.7388 13.4478Z"
                            fill="white"
                        />
                    </svg>
                </Btn>
            </div>
        </div>
    );
};
