import {Shake} from '@components/common/game/components';
import React from 'react';
import {MarkerItemP} from '../../../../../type';
import styles from './style.scss';

export const MarkerItem = ({
    color,
    currentColor,
    failedColor,
    changeCurrentColor,
}:MarkerItemP) => {
    const isSelected = color === currentColor;
    const needShake = color === failedColor;
    const svgClassName = needShake ? styles.wrong : '';
    const strokeColor = needShake
        ? '#FE3A3A'
        : isSelected
            ? '#7141B7'
            : '#534F4F';
    const strokeWidth = needShake || isSelected ? '1.5' : '0.5';
    const markerStyle:React.CSSProperties = isSelected ? {transform: 'translateX(-16px)'} : {};

    return (
        <Shake needShake={needShake}>
            <div
                className={styles.marker}
                onClick={() => changeCurrentColor(color)}
                style={markerStyle}
            >
                <svg
                    width="192"
                    height="66"
                    viewBox="0 0 192 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={svgClassName}
                >
                    <g filter="url(#filter0_d_8908_399)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.1105 36.1923L7 21.8116H29L29 19.0156C43.1503 18.371 58 5 58 5L173 5L175.012 5.00001V9L181 9V49H175.012V53L173 53L58 53C58 53 43.1503 39.6307 29 38.9862L29 36.1923H12.1105Z"
                            fill="url(#paint0_linear_8908_399)"
                        />
                        <path
                            d="M11.875 36.276L11.9341 36.4423H12.1105H28.75L28.75 38.9862V39.2251L28.9886 39.2359C35.9984 39.5552 43.2036 43.0307 48.6739 46.4468C51.4054 48.1525 53.6964 49.8384 55.3045 51.0978C56.1084 51.7274 56.7413 52.2501 57.1728 52.6151C57.3886 52.7976 57.554 52.9407 57.6653 53.0379C57.6874 53.0572 57.7074 53.0748 57.7252 53.0904C57.7521 53.1141 57.7741 53.1336 57.791 53.1486L57.8226 53.1767L57.8303 53.1836L57.8322 53.1853L57.8326 53.1857C57.8327 53.1857 57.8327 53.1858 58 53L57.8327 53.1858L57.904 53.25H58L173 53.25L175.012 53.25H175.262V53V49.25H181H181.25V49V9V8.75H181L175.262 8.75V5.00001V4.75001L175.012 4.75001L173 4.75L58 4.75H57.904L57.8327 4.81422L58 5C57.8327 4.81422 57.8327 4.81423 57.8326 4.81429L57.8322 4.81468L57.8303 4.81636L57.8226 4.82332L57.791 4.85139C57.763 4.87631 57.7209 4.91347 57.6652 4.96209C57.554 5.05934 57.3886 5.20241 57.1728 5.38493C56.7413 5.74999 56.1084 6.27281 55.3045 6.90248C53.6964 8.162 51.4053 9.84811 48.6739 11.554C43.2036 14.9706 35.9984 18.4466 28.9886 18.7659L28.75 18.7768V19.0156L28.75 21.5616H7H6.64584L6.76443 21.8953L11.875 36.276Z"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                        />
                    </g>
                    <path
                        d="M34.101 21.8116L34.101 36.1923L12.1105 36.1923L7 21.8116L34.101 21.8116Z"
                        fill={color}
                    />
                    <path d="M58 5L58 53L174 53L174 5L58 5Z" fill={color} />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M181 9V49H175.012V53H58.0022C58.0022 53 43.1514 39.6307 29 38.9862L29 19.0156C43.1514 18.371 58.0022 5 58.0022 5L175.012 5.00001V9L181 9ZM168.99 51C171.199 51 172.99 49.2091 172.99 47V11C172.99 8.79086 171.199 7 168.99 7L63.0023 7C60.7932 7 59.0023 8.79086 59.0023 11V47C59.0023 49.2091 60.7932 51 63.0023 51L168.99 51Z"
                        fill="#707182"
                    />
                    <defs>
                        <filter
                            id="filter0_d_8908_399"
                            x="0.291687"
                            y="0.5"
                            width="191.208"
                            height="65"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />

                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="2" dy="4" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.109804 0 0 0 0 0.0235294 0 0 0 0 0.25098 0 0 0 0.32 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_8908_399"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_8908_399"
                                result="shape"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_8908_399"
                            x1="119.575"
                            y1="5"
                            x2="119.575"
                            y2="53"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#CE8BF0" />
                            <stop offset="1" stopColor="#A227E0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </Shake>
    );
};
