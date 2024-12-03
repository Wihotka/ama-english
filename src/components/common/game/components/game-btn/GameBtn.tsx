import React, {CSSProperties, FC} from 'react';
import styled, {css} from 'styled-components';

import {Shake} from '@components/common/game/components';

import {classNames} from 'js-data-utils';

import styles from './styles.scss';

type P = {
    disabled?:boolean;
    className?:string;
    answer?:'correct'|'wrong'|null;
    style?:CSSProperties;
    onClick?:Function;
};

const Btn = styled.button<{answer?:P['answer']}>`
    background: ${(props) => props.theme.colors.gradient5};
  
    transition: .3s;
    
    @media(hover: hover) {
      &:hover {background: ${(props) => props.theme.colors.gradient6}}
    }
    
    &:active{
      background: ${(props) => props.theme.colors.gradient5};
      box-shadow: 0 0 0 ${props => props.theme.colors.color1};
      transform: translateY(8px);
    }

    // todo пока так, позже изменю (онли для Вордпада)
    &.pressed {
      background: ${(props) => props.theme.colors.gradient5};
      box-shadow: 0 0 0 ${props => props.theme.colors.color1};
      transform: translateY(8px);
    }
    
    ${props => {
        switch (props.answer) {
            case 'correct':
                return css`
                  border: 1px solid rgba(0, 255, 25, 0.64) !important;
                  box-shadow: 0 0 0 ${props => props.theme.colors.color8}, 0px 0px 3px #00FF15, 0px 0px 32px #00FF19!important;
                  transform: translateY(4px);
                `;
            case 'wrong':
                return css`
                  border: 1px solid rgba(254, 58, 58, 0.64) !important;
                  box-shadow: 0 0 0 ${props => props.theme.colors.color8}, 0px 0px 4px #FE3A3A, 0px 0px 32px #FE3A3A!important;
                  transform: translateY(4px);
                `;
            default:
                return css`
                  box-shadow: 0 4px 0 ${props => props.theme.colors.color1};
                  border: 1px solid ${props => props.theme.colors.color1 + 'A3'};
                  
                    @media (max-width: 534px) {
                        box-shadow: 0 4px 0 ${props => props.theme.colors.color1};
                    }
                `;
        }
    }};
`;

export const GameBtn:FC<P> = (props) => {
    const {onClick, disabled, children, className = '', answer = undefined, style} = props;

    const btnClasses = classNames(styles.btn, className, (answer && styles[`btn_${answer}`] ));

    const handleClick = () => disabled ? null : onClick && onClick();

    const RenderedBtn = <Btn
        style={style}
        className={btnClasses}
        answer={answer}
        onClick={handleClick}>{children}</Btn>;

    return answer !== undefined
        ? <Shake needShake={answer === 'wrong'}>{RenderedBtn}</Shake>
        : RenderedBtn;
};