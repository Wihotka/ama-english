import React from 'react';
import {isBoolean} from 'lodash';
import {classNames} from 'js-data-utils';
import styled, {css} from 'styled-components';

import {ContentImg, ContentWord} from './../';

import {CardContainerI, TypeContentCard} from '../../../type';

import styles from './styles.scss';

const CardContainer = styled.div<{ isDisabled:boolean, index:number, timeVisibilityCard:number, isStartFlip:boolean }>`
  pointer-events: ${(props) => props.isDisabled && 'none'};

  ${(props) => props.isStartFlip && css`
    animation-delay: ${props.index * props.timeVisibilityCard}ms;
  `}
`;

const CardFront = styled.div<{studyStage:number | undefined}>`
    border-color: ${({theme, studyStage}) => studyStage === 1 ? '#6C5C8F' : studyStage === 2 ? '#0E3E75' : theme.colors.color1};
    background: ${({theme, studyStage}) => studyStage === 1 ? '#835DDB' : studyStage === 2 ? '#5D80DB' : theme.colors.color2};
`;

const CardBack = styled.div<{inSelect:boolean, studyStage:number | undefined}>`
    border-color: ${({theme, inSelect, studyStage}) => inSelect ? (studyStage === 1 ? '#835DDB' : studyStage === 2 ? '#5D80DB' : theme.colors.color2) : 'rgba(128, 47, 47, 0.2)'};
`;

export const Card:React.FC<CardContainerI> = React.memo<CardContainerI>((props) => {
    const {card, onSelectOption, timeVisibilityCard, isStartFlip} = props;
    const {id, type, isFlipped, isHidden, isDisabled, isCorrect, inSelect, studyStage} = card;

    const handlerSelectCard = () => onSelectOption(card);

    const isCorrectStyle = isBoolean(isCorrect)
        ? isCorrect ? styles.correct : styles.mistake
        : null;

    const styleFlipCard = isFlipped ? styles.flipped : null;

    const styleSelect = inSelect ? styles.select : null;

    const isStartAnimate = isStartFlip ? styles.cardContainerStartAnimation : null;

    const styleVisibility = isHidden ? styles.animateHidden : null;

    const stylesCardElement = classNames(styles.card, isCorrectStyle, styleSelect, styleFlipCard);

    const stylesCardContainer = classNames(styles.cardContainer, styleVisibility, isStartAnimate);

    return (
        <CardContainer
            index={id}
            isDisabled={isDisabled}
            timeVisibilityCard={timeVisibilityCard}
            isStartFlip={isStartFlip}

            className={stylesCardContainer}
            onClick={handlerSelectCard}>

            <div className={stylesCardElement}>

                <CardFront studyStage={studyStage} className={styles.cardFront}>
                    <img className={styles.imgFront}
                        src={require('/assets/img/sections/general/lostTwins/front-card.png')}
                        alt="#"
                    />
                </CardFront>

                <CardBack studyStage={studyStage} inSelect={inSelect} className={styles.cardBack}>
                    {type === TypeContentCard.image && <ContentImg {...card} />}
                    {type === TypeContentCard.word && <ContentWord {...card} />}
                </CardBack>
            </div>
            <div className={styles.shadow}/>
        </CardContainer>
    );
});