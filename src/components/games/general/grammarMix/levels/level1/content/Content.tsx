import React from 'react';
import {ContentP} from './../type';

import {Btn} from '@components/common/elements';
import {OptionsField, QuestionField} from './parts';

import styles from './styles.scss';

export const Content:React.FC<ContentP> = (props) => {
    const {options, question, selectOption, handlerSelectOption, handleCheckingAnswer, isFieldUpdate} = props;

    const isDisabledCheckBtn = !selectOption.option || selectOption.isCorrect !== null;

    return (
        <div className={styles.content}>

            <QuestionField
                question={question}
                selectOption={selectOption}
                isFieldUpdate={isFieldUpdate}
            />

            <OptionsField
                options={options}
                selectOption={selectOption}

                handlerSelectOption={handlerSelectOption}
                isFieldUpdate={isFieldUpdate}
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
