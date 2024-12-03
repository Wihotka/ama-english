import React, {useEffect, useState} from 'react';
import Switch from 'react-switch';

import styles from './style.scss';
import {classNames} from 'js-data-utils';

type P = {
    defaultChecked?:boolean;
    size?:'standard' /*'big'*/;
    text?:string;
    disabled?:boolean;
    onColor?:string //only hex #5E72D9
    offColor?:string //only hex #5E72D9
    onHandleColor?:string //only hex #5E72D9
    offHandleColor?:string //only hex #5E72D9
    handler:Function;
};

const sizeResolver = {
    // normal: {
    //     height: 16,
    //     fontSize: '8px',
    //     width: 33,
    //     handleDiameter: 12
    // },
    // big: {
    //     height: 62,
    //     width: 144,
    //     fontSize: '16px',
    //     handleDiameter: 60
    // },
    standard: {
        height: 54,
        width: 104,
        fontSize: '18px',
        handleDiameter: 44
    }
};

export const CustomSwitch = (p:P) => {
    const {defaultChecked = false,
        disabled = false,
        // text,
        size = 'standard',
        onColor = 'linear-gradient(180deg, #69A5FF 0%, #3685FD 100%)',
        offColor = 'linear-gradient(180deg, #69A5FF 0%, #3685FD 100%)',
        onHandleColor = '#21DBC5',
        offHandleColor = '#21DBC5',
        handler} = p;

    const [checked, toggleChecked] = useState(defaultChecked);

    useEffect(() => {
        toggleChecked(defaultChecked);
    }, [defaultChecked]);

    const onChange = (checked:boolean) => {
        handler(checked);

        toggleChecked(checked);
    };

    const {width, handleDiameter, height, /* fontSize */} = sizeResolver[size];

    const cn = classNames(styles.customSwitch, disabled ? styles.customSwitch_disabled : '');
    const boxShadow = disabled
        ? 'inset 0 0 0 2px #E8F1FF'
        : '1px 1px 4px #227BB0, inset 0 0 0 2px #20C2AF, inset 5px 4px 4px #229C8E';

    return (
        <div className={cn}>
            <Switch
                checked={checked}
                disabled={disabled}
                onColor={onColor}
                offColor={offColor}
                onHandleColor={onHandleColor}
                offHandleColor={offHandleColor}
                handleDiameter={handleDiameter}
                uncheckedIcon={<span className={styles.text}>{'Off'}</span>}
                checkedIcon={<span className={styles.text}>{'On'}</span>}
                boxShadow={boxShadow}
                height={height}
                width={width}
                borderRadius={32}
                onChange={onChange}/>
        </div>
    );
};