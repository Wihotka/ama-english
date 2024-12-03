import React from 'react';
// import {isEmpty} from 'lodash';

import {Select} from './select';

import {customStyles} from './select-styles';

import styles from './style.scss';
import {useTranslation} from 'react-i18next';

type P<T extends string|number> = {
    valuesArr:Array<T>;
    defaultValue:T;
    disabled?:boolean;
    setValue:(value:T) => void;
};

type Value = {
    value:string|number;
    label:string;
};

const transformValues = (valuesArr:Array<string|number>, values:any) => valuesArr.map(value => {
    const optionText = typeof value === 'string' && values[value] ? values[value] : value;

    return {value: value.toString(), label: optionText.toString()};
});

export const TemplateSelect = <T extends string|number>(p:P<T>) => {
    const {disabled, defaultValue, valuesArr, setValue} = p;

    const {t} = useTranslation('settings/translation');
    const valuesLocalization:any = t('values', {returnObjects: true});
    const options = transformValues(valuesArr, valuesLocalization);
    const findValue = options.find(option => option.value === defaultValue.toString());

    const onChange = (valueObj:Value) => {
        const {value} = valueObj;

        const resValue = isNaN(+value) ? value : +value;

        // @ts-ignore
        setValue(resValue);
    };

    return (
        <Select
            className={styles.select}
            options={options}
            // @ts-ignore
            value={findValue}
            disabled={disabled}
            styles={customStyles}
            onChange={onChange}/>
    );
};