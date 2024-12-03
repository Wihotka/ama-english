import React from 'react';
import {isNull} from 'lodash';

import {ContentP} from './../type';

import {Btn} from '@components/common/elements';
import {InputField, QuestionField} from './parts';

import styles from './styles.scss';

export const Content:React.FC<ContentP> = (props) => {
    const {
        question,
        inputText,
        correctAnswer,

        handlerInputText,
        handleCheckingAnswer,

        indexVariantsAnswer,
        isCorrectAnswer,
        isFieldUpdate
    } = props;

    const isDisabledCheckBtn = inputText.length <= 0 || !isNull(isCorrectAnswer);
    
    return (
        <div className={styles.content}>

            <QuestionField
                question={question}
                correctAnswer={correctAnswer}
                indexVariantsAnswer={indexVariantsAnswer}

                isCorrectAnswer={isCorrectAnswer}
                isFieldUpdate={isFieldUpdate}
            />

            <InputField
                inputText={inputText}

                handlerInputText={handlerInputText}
                handleCheckingAnswer={handleCheckingAnswer}

                isDisableCheck={isDisabledCheckBtn}
                isCorrectAnswer={isCorrectAnswer}
            />

            <Btn
                className={styles.btnVerification}
                textCode={'check'}
                type={'primary'}
                disabled={isDisabledCheckBtn}
                handler={handleCheckingAnswer}
            />
        </div>
    );
};
