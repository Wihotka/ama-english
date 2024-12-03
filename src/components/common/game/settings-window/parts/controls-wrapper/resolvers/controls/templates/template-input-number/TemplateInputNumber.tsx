import React from 'react';
import {InputNumber} from './input-number';

type P = {
    control:any;
    defaultValue:number;
    disabled:boolean;
    setValue:(value:number) => void;
};

export const TemplateInputNumber = (p:P) => {
    const {control, disabled, defaultValue, setValue} = p;
    const {min, max} = control;

    // const className = classNames(styles.input, (disabled && styles.input_disabled));
    // const className = classNames( disabled && styles.input_disabled);

    const onChange = (inputValue:number) => {
        if (!inputValue || isNaN(inputValue)) return;

        const value = +(+inputValue).toFixed(1);

        // saveSettingsToRedux(needDisableControls, value, controlName);

        setValue(value);
    };

    return (
        // <div className={className}>
        <InputNumber
            min={min}
            max={max}
            disabled={disabled}
            value={defaultValue}
            handler={onChange}
        />
        // </div>
    );
};