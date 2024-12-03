import React from 'react';
import styled, {css} from 'styled-components';

import {CardI} from './../../../type';

import styles from './styles.scss';

const Img = styled.img<{ isRotate:boolean }>`
  ${(props) => props.isRotate && css`
    transform: rotate(180deg);
  `}
`;

export const ContentImg = (props:CardI) => {

    const {content, isRotate} = props;

    return (
        <Img isRotate={isRotate} src={content} className={styles.img} />
    );
};