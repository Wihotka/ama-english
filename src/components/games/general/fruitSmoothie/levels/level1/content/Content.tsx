import React from 'react';

import {QuestionField, OptionField} from './parts';

import {ContentP} from './../type';

import styles from './styles.scss';

export const Content = (props:ContentP) => {
    const {
        options,
        selectOptions,
        question,
        fieldRef,
        optionsRef,
        isFieldUpdate,
        handlerSelectOption,
        generateTransformStyles
    } = props;

    return (
        <div className={styles.content}>

            <QuestionField
                question={question}
                selectOptions={selectOptions}

                isFieldUpdate={isFieldUpdate}
            />

            <OptionField
                options={options}
                fieldRef={fieldRef}
                optionsRef={optionsRef}

                handlerSelectOption={handlerSelectOption}
                generateTransformStyles={generateTransformStyles}

                isFieldUpdate={isFieldUpdate}
            />
        </div>
    );
};