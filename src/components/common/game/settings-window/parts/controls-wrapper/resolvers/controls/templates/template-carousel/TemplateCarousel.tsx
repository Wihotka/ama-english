import React, {CSSProperties} from 'react';
import {classNames, getTimeStr} from 'js-data-utils';

import {DataBlock} from '../../../components';

import styles from './style.scss';

type P<T> = {
    valuesArr:Array<T>;
    defaultValue:T;
    controlName:string;
    disabled:boolean;
    setValue:(value:T) => void;
};

export const TemplateCarousel = <T extends number | string>(p:P<T>) => {
    const {disabled, defaultValue, controlName, valuesArr, setValue} = p;

    const onChange = (index:number) => {
        const value = valuesArr[index];

        setValue(value);
    };

    const index = valuesArr.indexOf(defaultValue);
    // const fontSize = getFz(valuesArr);
    const content = getContent(controlName, defaultValue);

    // console.log('controlName ' + controlName);
    // console.log('content ' + content);

    const contentType = controlName == 'gameTime'
        ? 'gameTime'
        : isNaN(+content)
            ? 'str'
            : 'number';

    return (
        <div className={styles.sw}>
            <DataBlock text={content} contentType={contentType}/>

            <div className={styles.rowBtn}>
                <Btn
                    disabled={index === 0 || disabled}
                    onClick={() => onChange(index - 1)}
                    isRotate={false}
                />

                <Btn
                    disabled={index === valuesArr.length - 1 || disabled}
                    onClick={() => onChange(index + 1)}
                    isRotate={true}
                />
            </div>
        </div>
    );
};

type BtnP = {
    disabled:boolean;
    isRotate:boolean;
    style?:CSSProperties;
    onClick:() => void;
};

const Btn = ({disabled, onClick,isRotate, style}:BtnP) => <button
    className={classNames(styles.button, (isRotate && styles.button_rotate))}
    disabled={disabled}
    style={style}
    onClick={onClick}>
    <Arrow/>
</button>;

// const getFz = (finalLabels:Array<string | number>) =>
//     (Math.max(...finalLabels.map(label => label.toString().length)) < 5 ? 48 : 16) + 'px';

const getContent = (controlName:string, defaultValue:string | number) => {
    if (controlName === 'gameTime') return getTimeStr(+defaultValue);

    return defaultValue;
};

const Arrow = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="28"
        fill="none"
        viewBox="0 0 20 28"
        className={styles.arrow}
    >
        <mask
            id="path-1-outside-1_9026_122561"
            width="20"
            height="28"
            x="0"
            y="0"
            fill="#000"
            maskUnits="userSpaceOnUse"
        >
            <path fill="#fff" d="M0 0H20V28H0z"></path>
            <path
                fillRule="evenodd"
                d="M18.4 26.62c-.662.507-1.734.507-2.395 0L1.992 15.877a2.62 2.62 0 01-.734-.838 2.096 2.096 0 01-.258-1c0-.344.087-.684.258-1 .17-.315.42-.6.734-.837L16.107 1.379c.654-.5 1.715-.507 2.38-.013.16.118.288.261.376.42.089.159.135.33.137.504.002.174-.041.346-.127.505-.086.16-.212.304-.37.424L5.585 13.12a1.311 1.311 0 00-.367.419c-.085.158-.13.328-.13.5s.045.342.13.5c.085.158.21.3.367.419L18.4 24.783c.157.118.282.26.368.418.085.158.13.328.13.5s-.045.342-.13.5c-.086.158-.211.3-.368.419"
                clipRule="evenodd"
            ></path>
        </mask>
        <path
            fill="#E4FAF5"
            fillRule="evenodd"
            d="M18.4 26.62c-.662.507-1.734.507-2.395 0L1.992 15.877a2.62 2.62 0 01-.734-.838 2.096 2.096 0 01-.258-1c0-.344.087-.684.258-1 .17-.315.42-.6.734-.837L16.107 1.379c.654-.5 1.715-.507 2.38-.013.16.118.288.261.376.42.089.159.135.33.137.504.002.174-.041.346-.127.505-.086.16-.212.304-.37.424L5.585 13.12a1.311 1.311 0 00-.367.419c-.085.158-.13.328-.13.5s.045.342.13.5c.085.158.21.3.367.419L18.4 24.783c.157.118.282.26.368.418.085.158.13.328.13.5s-.045.342-.13.5c-.086.158-.211.3-.368.419"
            clipRule="evenodd"
        ></path>
        <path
            fill="#fff"
            d="M16.005 26.62l.304-.397-.304.397zM1.992 15.877l.302-.4.003.003-.305.397zM1 14.039h.5H1zm.992-1.837l.305.397-.003.002-.302-.4zM16.107 1.379l-.305-.396.305.396zm2.38-.013l-.296.404-.003-.002.298-.402zm.015 1.853l-.304-.397.003-.002.301.399zM5.586 13.12l.305.397-.003.002-.302-.4zm-.497.919h.5-.5zm.497.919l.302-.4.003.003-.305.397zM18.4 24.783l-.3.4-.004-.003.304-.397zm.305 2.234c-.841.644-2.162.644-3.003 0l.608-.794c.482.37 1.304.37 1.788 0l.607.794zm-3.003 0L1.688 16.274l.609-.794 14.012 10.743-.608.794zM1.69 16.276a3.119 3.119 0 01-.873-1l.88-.475c.133.247.334.479.596.677l-.603.798zm-.873-1A2.595 2.595 0 01.5 14.04h1c0 .258.065.517.198.762l-.88.476zM.5 14.04c0-.43.11-.851.318-1.237l.88.475a1.596 1.596 0 00-.198.762h-1zm.318-1.237c.208-.385.508-.723.873-1l.603.799a2.12 2.12 0 00-.596.676l-.88-.475zm.87-.997L15.802.983l.609.793L2.297 12.598l-.609-.793zM15.803.982c.832-.636 2.139-.643 2.982-.017l-.597.803c-.486-.362-1.301-.356-1.778.009l-.607-.795zm2.979-.019c.213.157.392.353.518.58l-.874.486a.821.821 0 00-.235-.26l.59-.806zm.518.58c.127.227.198.48.2.742l-1 .01a.554.554 0 00-.074-.266l.874-.486zm.2.742c.002.261-.063.515-.186.746l-.882-.472a.548.548 0 00.068-.265l1-.009zm-.186.746c-.124.23-.3.429-.51.587L18.2 2.82a.813.813 0 00.231-.26l.882.471zm-.508.585L5.891 13.518l-.609-.794 12.916-9.902.608.794zM5.888 13.52a.811.811 0 00-.23.258l-.879-.476a1.81 1.81 0 01.506-.58l.603.798zm-.23.258a.548.548 0 00-.069.262h-1c0-.259.067-.51.19-.738l.88.476zm-.069.262c0 .085.022.174.07.262l-.88.476a1.548 1.548 0 01-.19-.738h1zm.07.262a.81.81 0 00.229.258l-.603.798a1.81 1.81 0 01-.506-.58l.88-.476zm.232.26l12.812 9.824-.608.794-12.813-9.824.609-.794zm12.81 9.822c.207.157.383.353.505.58l-.88.475a.809.809 0 00-.228-.257l.602-.798zm.505.58c.123.227.19.479.19.737h-1a.547.547 0 00-.07-.262l.88-.475zm.19.737c0 .259-.067.51-.19.738l-.88-.476a.547.547 0 00.07-.262h1zm-.19.738a1.808 1.808 0 01-.506.58l-.602-.798a.811.811 0 00.229-.258l.88.476z"
            mask="url(#path-1-outside-1_9026_122561)"
        ></path>
    </svg>
);