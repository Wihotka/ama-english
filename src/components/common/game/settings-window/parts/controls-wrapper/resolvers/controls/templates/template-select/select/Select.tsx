import React from 'react';
import Select, {SingleValue} from 'react-select';

import {PanelIcon} from '@components/common/elements';

import styles from './styles.scss';
import {customStyles} from './select-styles';

export type SelectValue = {
    value:string;
    label:string;
};

type P = {
    value:SelectValue;
    options:Array<SelectValue>;
    onChange:Function;
    disabled?:boolean;
    dropdownIndicator?:React.ReactNode;
    className?:string;
    iconClassName?:string;
    styles?:any;
};

const getDropdownIndicator = (className = styles.icon) => (props:{ selectProps:any; }) => {
    const {selectProps} = props;
    const {menuIsOpen} = selectProps;

    return <span className={className}><PanelIcon rotate={menuIsOpen ? 180 : 0}/></span>;
};

export const CustomSelect = (p:P) => {
    const {options, value, className,
        iconClassName, styles, onChange, disabled} = p;

    const handleChange = (newValue:SingleValue<SelectValue>) => {
        onChange(newValue);
    };

    return (
        <div style={{marginTop: '56px',  marginBottom: '24px'}}>
            <Select
                // defaultMenuIsOpen
                styles={styles ? styles : customStyles}
                value={value}
                components={{DropdownIndicator: getDropdownIndicator(iconClassName)}}
                options={options}
                className={className}
                onChange={handleChange}
                isDisabled={disabled}/>
        </div>
    );
};

