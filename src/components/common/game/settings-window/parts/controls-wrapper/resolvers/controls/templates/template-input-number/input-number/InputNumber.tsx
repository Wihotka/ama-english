import React, {CSSProperties} from 'react';
import InputNumber from 'rc-input-number';
import styled from 'styled-components';

import {DataBlock} from '@components/common/game/settings-window/parts/controls-wrapper/resolvers/components';

import styles from './style.scss';

const StyledInputNumber = styled.div`
        color: ${props => props.theme.colors.color2};
    `;

type P = {
    value:number;
    min?:number;
    max?:number;
    disabled?:boolean;
    handler:(value:number) => void;
};

export const CustomInputNumber = (p:P) => {
    const {value, max, min, disabled, handler} = p;

    const onChange = (value:number | null) => {
        if (value) handler(value);
    };

    const upHandlerF = () => {
        onChange(value + 1);
    };
    const downHandlerF = () => {
        onChange(value - 1);
    };

    return (
        <div className={styles.customInputWrapper}>
            <StyledInputNumber>
                <DataBlock>
                    <InputNumber
                        min={min}
                        max={max}
                        disabled={disabled}
                        value={value}
                        controls={false}
                        onChange={onChange}
                    />
                </DataBlock>
            </StyledInputNumber>

            <div className={styles.rowBtn}>
                <Btn
                    disabled={disabled || value === min}
                    onClick={downHandlerF}
                    isPlus={false}
                />

                <Btn
                    disabled={disabled || value === max}
                    onClick={upHandlerF}
                    isPlus={true}

                />
            </div>
        </div>
    );
};

type BtnP = {
    disabled:boolean;
    style?:CSSProperties;
    onClick:() => void;
    isPlus:boolean;
};

const Btn = ({disabled, onClick, style, isPlus}:BtnP) => <button
    className={styles.button}
    disabled={disabled}
    style={style}
    onClick={onClick}>
    {isPlus ? <Plus/> : <Minus/>}
</button>;

const Plus = () => (
    <svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
    >
        <rect x={6} y={18} width={28} height={3} rx={1.5} fill="#fff"/>
        <rect
            x={21.5}
            y={5.5}
            width={28}
            height={3}
            rx={1.5}
            transform="rotate(90 21.5 5.5)"
            fill="#fff"
        />
    </svg>
);

const Minus = () => (
    <svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
    >
        <rect x={6} y={19} width={28} height={3} rx={1.5} fill="#fff"/>
    </svg>
);