import React, {CSSProperties} from 'react';
import styled from 'styled-components';
import {classNames} from 'js-data-utils';

import style from './style.scss';

import {NavigationLocalDataItemOfOption} from '@lib/game/utils/game-local-data-loader/types';
import {FiledP} from '../../../type';

const Hint = styled.span<{zIndex:number}>`
  border: 2px dashed ${props => props.theme.colors.color5};
  z-index: ${props => props.zIndex};
`;

export const Field = (props:FiledP) => {
    const {
        options,
        isHintShowed,
        answerStatus,
        handleFieldCB,
        isFieldBlocked,
        pressedItemName,
        hintedItemNames,
        openedItemNames,
        locationBackground
    } = props;

    const getItemStyles = (item:NavigationLocalDataItemOfOption):CSSProperties => ({
        top: `${item.top}%`,
        left: `${item.left}%`,
        width: `${item.size}%`
    });

    const getFieldClasses = () =>
        classNames(
            style.wrapper,
            isFieldBlocked ? style.wrapperBlocked : ''
        );

    const getItemClasses = (itemName:string) =>
        classNames(
            style.item,
            openedItemNames.includes(itemName) ? style.itemOpened : ''
        );

    const getHintClasses = (itemName:string) =>
        classNames(
            style.hint,
            isHintShowed && hintedItemNames.includes(itemName) ? style.hintShowed : style.hintShowedScaled,
            pressedItemName === itemName ? style[`hint${answerStatus}`] : ''
        );

    return (
        <div className={getFieldClasses()}>
            <img
                onClick={() => handleFieldCB('')}
                alt="background"
                className={style.bg}
                src={require(`/assets/img/resources/${locationBackground}`)} />
            {options &&
                options.map(({item}, index) =>
                    <span
                        key={index}
                        className={getItemClasses(item.name)}
                        style={getItemStyles(item)}
                        onClick={() => handleFieldCB(item.name)}>
                        <img
                            alt={item.name}
                            src={require(`/assets/img/resources/${item.imgUrl}`)} />
                        <Hint
                            zIndex={hintedItemNames.includes(item.name) ? 9 - hintedItemNames.indexOf(item.name) : 0}
                            className={getHintClasses(item.name)} />
                    </span>
                )
            }
        </div>
    );
};