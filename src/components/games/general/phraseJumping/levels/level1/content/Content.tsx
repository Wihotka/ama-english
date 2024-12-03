import React from 'react';
import styled from 'styled-components';
import {classNames} from 'js-data-utils';

import {LocalizedText} from '@components/common';
import {Btn} from '@components/common/elements';
import {InfoBtn} from '@components/common/game/components';
import {InputField, QuestionField, HintField} from './parts';

import {ContentP} from './../type';

import styles from './styles.scss';

const HintFieldWrapper = styled.div`
    background: ${props => props.theme.colors.color6 + '7A'};
    border: 1px solid ${props => props.theme.colors.color6 + 'A3'};
`;

const Theme = styled.p`
    background: ${props => props.theme.colors.gradient7};
`;

export const Content:React.FC<ContentP> = (props) => {
    const {
        question,
        inputText,
        punctuationMark,
        theme,

        hintType,
        hintContent,

        handlerInputText,
        handleCheckingAnswer,
        handlerOnOpenHint,

        isHint,
        isOpenHint,
        isCorrectAnswer,
        isFieldUpdate,
        isBtnDisabled
    } = props;

    const styleContent = classNames(styles.content, isHint ? styles.isTryHint : styles.isNotHint);

    return (
        <div className={styleContent}>
            <Theme className={styles.theme}>
                <LocalizedText name={`values.${theme}`} path={'settings/translation'} />
            </Theme>
            <QuestionField
                theme={theme}
                question={question}
                isFieldUpdate={isFieldUpdate}
            />

            <InputField
                inputText={inputText}
                punctuationMark={punctuationMark}

                handlerInputText={handlerInputText}
                handleCheckingAnswer={handleCheckingAnswer}

                isCorrectAnswer={isCorrectAnswer}
                isBtnDisabled={isBtnDisabled}
            />

            {isHint &&
                <HintFieldWrapper className={styles.hintField}>
                    <InfoBtn
                        classNameBtn={styles.btnHelp}
                        type={'help'}
                        sizeShadow={'small'}
                        disabled={isFieldUpdate}
                        isPressed={isOpenHint}
                        handler={handlerOnOpenHint}
                    />

                    <HintField
                        hintType={hintType}
                        isOpenHint={isOpenHint}
                        hintContent={hintContent}
                    />
                </HintFieldWrapper>}

            <Btn
                className={styles.btnVerification}
                textCode={'check'}
                type={'primary'}
                disabled={!inputText || isBtnDisabled}
                handler={handleCheckingAnswer}
            />
        </div>
    );
};