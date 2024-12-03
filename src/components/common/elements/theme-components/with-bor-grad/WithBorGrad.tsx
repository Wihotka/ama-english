import React, {CSSProperties, forwardRef} from 'react';
import styled from 'styled-components';
import {classNames} from 'js-data-utils';

import styles from './styles.scss';

const WithBorGradElem = styled.div`
    border-width: ${(props) =>
    // @ts-ignore
        props['data-border-width']};
  &:before {
    background: ${(props) => props.theme.colors.gradient1 || '#fff' };
    opacity: ${(props) =>
    // @ts-ignore
        props['data-border-opacity']};
    margin: ${(props) =>
    // @ts-ignore
        -parseInt(props['data-border-width']) + 'px'
}`;

type P = {
    borderWidth:CSSProperties['borderWidth'];
    style?:CSSProperties;
    className?:string;
    borderOpacity?:CSSProperties['opacity'];
    children?:React.ReactNode;
};

export const WithBorGrad = forwardRef<HTMLDivElement, P>((p, ref) => {
    const {children, borderWidth, style, className = '', borderOpacity = 1} = p;

    return (
        <WithBorGradElem
            className={classNames(styles.withBorGrad, className)}
            style={style}
            data-border-width={borderWidth}
            ref={ref}
            data-border-opacity={borderOpacity}>
            {children}
        </WithBorGradElem>
    );
});
