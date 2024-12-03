import React from 'react';
import {classNames} from 'js-data-utils';

import {OptionsFieldP, OptionT} from './../../../type';
import {GameBtn} from '@components/common/game/components';

import styles from './styles.scss';

export const OptionsField:React.FC<OptionsFieldP> = (props) => {
    const {options, selectOption, handlerSelectOption, isFieldUpdate} = props;

    const isCorrectOption = (option:OptionT) =>
        selectOption.option?.content === option.content && selectOption.isCorrect !== null
            ? !selectOption.isCorrect ? 'wrong' : null
            : null;

    const styleOption = (option:OptionT) => {
        const isPressedOption = selectOption.option?.content === option.content ? 'pressed' : '';
        const isUpdate = !isFieldUpdate && styles.view;

        return classNames(styles.option, isPressedOption, isUpdate);
    };

    return (
        <div className={styles.optionsField}>
            {options.map((option, index) =>
                <div className={styles.optionField} key={index}>
                    <GameBtn
                        className={styleOption(option)}
                        answer={isCorrectOption(option)}
                        onClick={() => handlerSelectOption(option)}
                        key={option.content}
                    >
                        {option.content[0].toUpperCase() + option.content.slice(1)}
                    </GameBtn>
                </div>
            )}
        </div>
    );
};