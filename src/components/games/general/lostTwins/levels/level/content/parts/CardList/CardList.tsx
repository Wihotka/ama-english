import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {upperFirst} from 'lodash';

import {Card} from '../';

import {classNames} from 'js-data-utils';

import {CardListP, TypeContentCard} from './../../../type';
import {LocalizedText} from '@components/common';

import styles from './styles.scss';

const CardListContainer = styled.div<{ column:number }>`
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
`;

export const CardList = (props:CardListP) => {
    const {gamePlayData, gameData, handlerSelectCard} = props;
    const {columnsQty, timeVisibilityCard} = gameData;
    const {cards, isStartFlip, selectedCard} = gamePlayData;

    const candidates = [selectedCard.first, selectedCard.seconds];

    const getCandidateStyles = (type:TypeContentCard | undefined) =>
        classNames(
            styles.candidate,
            type && styles.candidateActive,
            isHidden && styles.candidateHidden
        );

    //Задерживаем значения в полях и плавное скрытие
    const [answers, setAnswers] = useState<any[]>(candidates);
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [isTouched, setIsTouched] = useState<boolean>(false);

    useEffect(() => {
        if (candidates[0] || candidates[1]) {
            setIsTouched(true);
            if (candidates[0] !== candidates[1]) setAnswers(candidates);
        } else {
            setTimeout(() => {
                if (isTouched) setIsHidden(true);
                
                setTimeout(() => {
                    setIsHidden(false);
                    setAnswers(candidates);
                }, 400);
            }, 1000);
        }
    }, [selectedCard.first, selectedCard.seconds]);

    return (
        <>
            <div className={styles.candidates}>
                {answers &&
                    answers.map((candidate, index) =>
                        <span key={index} className={getCandidateStyles(candidate?.type)}>
                            {candidate
                                ? candidate?.type === TypeContentCard.image
                                    ? <img src={candidate?.content} alt='candidate'/>
                                    : <span>{upperFirst(candidate?.content)}</span>
                                : <LocalizedText name={'chooseCard'} path={'games/general/lostTwins/translation'}/>
                            }
                        </span>
                    )
                }
            </div>
            <CardListContainer column={columnsQty} className={styles.cardList}>
                {cards.map(card =>
                    <Card
                        key={card.id}
                        card={card}
                        onSelectOption={handlerSelectCard}
                        isStartFlip={isStartFlip}
                        timeVisibilityCard={timeVisibilityCard} />
                )}
            </CardListContainer>
        </>
    );
};