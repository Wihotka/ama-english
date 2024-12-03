import React, {CSSProperties, FC} from 'react';
import styled, {css} from 'styled-components';
import {classNames} from 'js-data-utils';

import styles from './styles.scss';

type P = {
    type:'time' | 'content' | 'progress';
    style?:CSSProperties;
};

const StyledBlock = styled.div<Pick<P, 'type'>>`
  background: ${props => props.theme.colors.color6};
  border-color: ${props => props.theme.colors.color5}!important;
  
  ${props => props.type === 'progress' 
        ? css`box-shadow: 2px 4px 16px rgb(28 6 64 / 24%), inset -1px -2px 4px ${props.theme.colors.color5 + '66'} !important` 
        : css``};
    
  @media screen and (max-width: 412px) and (orientation: portrait) {
    background: ${props => props.theme.colors.color5};
  }
  
  @media screen and (max-width: 732px) and (orientation: landscape) {
    background: ${props => props.theme.colors.color5};
  }
`;

//todo move to amakids-utils
const getTextStrokeWithTextShadow = (size:number, color:string, shadowOffsetX = 0, shadowOffsetY = 0, shadowBlurRadius = 0, shadowColor = '#000000') => {
    const radius = size;
    let stroke = '';

    for (let i = -size; i <= size; i++) {
        for (let k = -size; k <= size; k++) {
            let x = k;
            let y = i;

            if (k > 0) {
                x = k - 0.5;
            } else if (k < 0) {
                x = k + 0.5;
            }

            if (i > 0) {
                y = i - 0.5;
            } else if (i < 0) {
                y = i + 0.5;
            }

            if ((x * x + y * y) <= radius * radius) {
                const strokePart = `${i}px ${k}px 0 ${color}`;

                stroke += stroke ? (`, ${strokePart}`) : `${strokePart}`;
            }
        }
    }

    stroke += `, ${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlurRadius}px ${shadowColor}`;

    return stroke;
};

const StyledBlockInner = styled.div`
    text-shadow: ${props => getTextStrokeWithTextShadow(1, props.theme.colors.color1)};
`;

export const Block:FC<P> = ({type, children, style}) =>
    <StyledBlock
        type={type}
        style={style}
        className={classNames(styles.block, styles[`block_${type}`])}>
        <StyledBlockInner className={styles.inner}>
            {children}
        </StyledBlockInner>
    </StyledBlock>;