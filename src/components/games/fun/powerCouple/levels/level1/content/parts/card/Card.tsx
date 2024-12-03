import React, {useMemo} from 'react';
import styled, {css} from 'styled-components';
import {classNames} from 'js-data-utils';

import {CardP} from './../../../type';

import styles from './styles.scss';

const CardContainer = styled.div <{ line:number, cell:number, numberField:number, isDisabled:boolean }>`
  ${(props) => css`
    bottom: ${props.numberField * 6}px;
    grid-area: box${props.line}_${props.cell};
    z-index: ${props.numberField + 10};

    &:hover {
      bottom: ${props.numberField * 6 + 4}px;
    }

    ${props.isDisabled && css`pointer-events: none`}
  `}
`;

export const Card:React.FC<CardP> = (props) => useMemo(() => {
    const {card, positionLine, positionCell, numberField, handlerSelectCard, isCardFlip, isAllDisabledCard} = props;
    const {content, imgPath, isDisabled, isSelect, isCorrect} = card;

    const styleIsDisabled = isDisabled ? styles.disabled : null;
    const styleSelect = isSelect && styles.select;
    const styleIsCorrect = isCorrect !== null ? isCorrect ? styles.correct : styles.error : null;

    const stylesCardContainer = classNames(styles.cardContainer, styleIsDisabled, styleSelect, styleIsCorrect);

    const styleIsFlip = !isCardFlip ? styles.flipped : null;

    const styleCard = classNames(styles.card, styleIsFlip);
    const styleCardBack = classNames(styles.cardBack);

    const handlerClick = () => !isDisabled && handlerSelectCard(card);

    return (
        <CardContainer
            isDisabled={isAllDisabledCard}
            className={stylesCardContainer}
            line={positionLine}
            cell={positionCell}
            numberField={numberField}
            onClick={handlerClick}
            id={card.name}>

            <div className={styleCard} style={{transitionDelay: `${positionLine * 100}ms`}}>
                <div className={styles.cardFront}/>

                <div className={styleCardBack}>
                    <img src={require(`/assets/img/resources${imgPath}`)} alt="#" width="53"/>
                    {content && <p className={styles.content}>{content[0].toUpperCase() + content.slice(1)}</p>}
                </div>
            </div>

        </CardContainer>
    );
}, [props.card, props.isAllDisabledCard, props.isCardFlip]);