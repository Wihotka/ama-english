import React from 'react';

import {RadioGroup} from '@components/common/elements';
import {SettingsControl, SettingsTemplateValuesArr} from '@custom-types';

export const TemplateRadio = <T extends string|number>(p:SettingsControl<T, SettingsTemplateValuesArr<T>>) => {
    const {valuesArr, disabled, defaultValue, setValue: saveSettings, labels} = p;

    const setValue = (value:T) => {
        saveSettings(value);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <RadioGroup
                disabled={disabled}
                defaultValue={defaultValue}
                items={valuesArr}
                labels={labels}
                onChange={setValue}/>
        </div>
    );
};