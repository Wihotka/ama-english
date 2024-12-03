import React from 'react';

import {CustomSwitch} from './switch';

type P = {
    defaultValue:number;
    disabled:boolean;
    setValue:(value:number) => void;
};

export const TemplateToggle = (p:P) => {
    const {disabled, defaultValue, setValue} = p;

    const onChange = (inputValue:boolean) => {
        const value = +inputValue;

        setValue(value);
    };

    return <CustomSwitch
        defaultChecked={!!defaultValue}
        disabled={disabled}
        size={'standard'}
        onColor={'#5498FF'}
        // offColor={'#5498FF'}
        offColor={disabled ? '#BBD6FF' : '#5498FF'}
        offHandleColor={disabled ? '#D6E6FF' : '#21DBC5'}
        onHandleColor={'#21DBC5'}
        handler={onChange}/>;
};
