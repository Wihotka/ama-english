import React from 'react';

import {Option} from '../';

import {OptionFieldP} from './../../../type';

import styles from './styles.scss';

export const OptionField = (props:OptionFieldP) => {
    const {options, fieldRef, optionsRef, handlerSelectOption, generateTransformStyles, isFieldUpdate} = props;

    return (
        <div className={styles.optionField} ref={fieldRef}>
            {options.map(option =>

                <Option
                    key={option.id}
                    variant={option}
                    optionsRef={optionsRef[option.id]}

                    handlerSelectOption={handlerSelectOption}
                    generateTransformStyles={generateTransformStyles}

                    isFieldUpdate={isFieldUpdate}
                />
            )}

        </div>
    );
};