import React, {CSSProperties, useEffect, useState} from 'react';

import {CheckBoxRadioBtn, Group} from '@components/common/elements/checkbox-radio-btn';

type P = {
    items:Array<string|number>;
    labels?:Array<string|number|React.ReactNode>;
    onChange:Function;
    defaultValue?:string|number;
    disabled?:boolean;
    boxStyle?:CSSProperties;
};

export const RadioGroup = (p:P) => {
    const {items, labels, defaultValue, disabled = false, boxStyle,
        onChange} = p;
    const [active, changeActive] = useState(defaultValue);

    useEffect(() => {
        changeActive(defaultValue);
    }, [defaultValue]);

    const onClick = (value:string|number) => {

        if (disabled) return;

        changeActive(value);

        onChange(value);
    };

    return (
        <Group style={boxStyle}>
            {items.map((item, index) => {
                const text = labels ? labels[index] : item;

                return <CheckBoxRadioBtn
                    key={item}
                    item={item}
                    disabled={disabled}
                    type={'rd'}
                    text={text}
                    isChecked={item == active}
                    onClick={onClick}
                />;
            })}
        </Group>
    );
};
