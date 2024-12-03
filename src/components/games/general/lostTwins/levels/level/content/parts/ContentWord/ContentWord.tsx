import React from 'react';
import styled, {css} from 'styled-components';

import {CardI} from './../../../type';

import styles from './styles.scss';

const Text = styled.p<{ isRotate:boolean }>`
  ${(props) => props.isRotate && css`
    transform: rotate(90deg);
  `}
`;

export const ContentWord = (props:CardI) => {

    const {isRotate, content} = props;

    return (
        <Text className={styles.text} isRotate={isRotate}>
            {content[0].toUpperCase() + content.slice(1)}
        </Text>
    );
};