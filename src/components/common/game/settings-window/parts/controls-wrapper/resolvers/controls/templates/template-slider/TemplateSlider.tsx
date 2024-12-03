import React, {CSSProperties} from 'react';
import Slider from 'rc-slider';

// import {gamesSettingsThemes} from '@global-config/themes';

import styles from './style.scss';
import {SettingsTemplateNumberValueControl} from '@custom-types';
import {DataBlock} from '@components/common/game/settings-window/parts/controls-wrapper/resolvers/components';
import {getTimeStr} from 'js-data-utils';

type P = {
    control:SettingsTemplateNumberValueControl;
    defaultValue:number;
    controlName:string;
    disabled:boolean;
    valuesArr:Array<number>
    setValue:(value:number) => void;
    // input:{
    //     contentInput?:React.ReactNode;
    // } | any;
};

// Трек по якому бігає бігунок
const blockStyles = {
    borderRadius: '8px',
    height: '4px',
    background: '#BCD7FF'
};

export const TemplateSlider = (p:P) => {
    const {disabled, defaultValue, controlName, control, valuesArr, setValue} = p;
    const {min, max, step} = getData(control, valuesArr);

    const onChange = (inputValue:number) => {
        if (!inputValue || defaultValue === inputValue) return;

        setValue(inputValue);
    };

    const isRange = Array.isArray(defaultValue);

    const baseTrack = {
        ...blockStyles,
        borderRadius: '32px',
        height: '6px',
        background: '#69A5FF'
    };

    // бігунок
    const baseHandle = {
        ...blockStyles,
        height: '20px',
        width: '16px',
        background: disabled ? 'rgb(188, 215, 255)' : 'linear-gradient(180deg, #69A5FF 0%, #3685FD 100%)',
        boxShadow: disabled ? 'none' : '0px 4px 0px #0D5CD6',
        borderRadius: '32px',
        zIndex: 1,
        border: 'none',
        marginTop: disabled ? '-8px' : '-9px'
    };

    const dotStyles:CSSProperties = {
        marginTop: '20px',
        height: '12px',
        width: '8px',
        borderRadius: '32px',
        borderColor: 'none',
        background: '#BCD7FF',
        border: 0,
        bottom: '-5px'
    };

    const trackStyle:any = isRange
        ? [baseTrack, baseTrack]
        : baseTrack;

    const handleStyle:any = isRange
        ? [baseHandle, baseHandle]
        : baseHandle;

    const content = getContent(controlName, defaultValue);

    const marks = {
        [min]: <span className={styles.mark}>0</span>,
        [max]: <span className={styles.mark}>1</span>,
    };

    const isDisabled = min === max;

    return (
        <div className={styles.controlSlider}>
            <DataBlock text={content} contentType={'number'}/>

            <Slider
                min={min}
                max={max}
                step={step}
                style={{opacity: isDisabled ? 0 : 1}}
                marks={marks}
                value={defaultValue}
                disabled={disabled}
                railStyle={{...blockStyles}}
                trackStyle={trackStyle}
                handleStyle={handleStyle}
                // dots={true}
                dotStyle={dotStyles}
                activeDotStyle={{background: '#69A5FF'}}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </div>
    );
};

const getContent = (controlName:string, defaultValue:string | number) => {
    if (controlName === 'gameTime') return getTimeStr(+defaultValue);

    return defaultValue;
};

const getData = (control:P['control'], valuesArr:Array<number>) => {
    const {min, max, step} = control;

    if (!max) {
        return {
            min: valuesArr[0],
            step: valuesArr[1] - valuesArr[0],
            max: valuesArr[valuesArr.length - 1]
        };
    }

    return {
        min,
        max,
        step
    };
};
//
// const getMarks = (valuesArr:P['valuesArr']) => {
//     const marks:{
//         [key:number]:ReactNode;
//     } = {};
//
//     valuesArr.forEach((val) => {
//         marks[val] = <span className={styles.mark}>{val}</span>;
//     });
//
//     return marks;
// };