import React from 'react';
import styled from 'styled-components';
import {
    Storyteller_Question,
    Storyteller_UserAnswer,
} from '../../../../../type';
import {ChooseAnswerT} from '../../../type';
import styles from './style.scss';

type GameQuestionP = {
    gameQuestion:Storyteller_Question;
    currentQuestion:number;
    imageBg:string;
    userAnswers:Storyteller_UserAnswer[];
    chooseAnswer:ChooseAnswerT;
};

const AnswerItem = styled.div<{ selected:boolean }>`
    background: ${({selected}) =>
        selected
            ? 'linear-gradient(0deg, rgba(130, 217, 255, 0.4), rgba(130, 217, 255, 0.4)), #FFFFFF'
            : '#fff'};
`;

const ImageContainer = styled.div`
    border-color: ${({theme}) => theme.colors.color6};
`;

export const GameQuestion = ({
    gameQuestion,
    currentQuestion,
    imageBg,
    userAnswers,
    chooseAnswer
}:GameQuestionP) => {
    const {questionText, answers} = gameQuestion;
    const isSelected = (value:string) =>
        value === userAnswers[currentQuestion]?.value;

    return (
        <div className={styles.gameQuestionContainer}>
            <div className={styles.gameQuestionText}>{questionText}</div>
            <div className={styles.gameQuestionAnswers}>
                {answers.map(({value, imgPath}, i) => (
                    <AnswerItem
                        key={i}
                        className={styles.gameQuestionAnswerItem}
                        selected={isSelected(value)}
                        onClick={() =>
                            chooseAnswer(currentQuestion, {value, imgPath})
                        }
                    >
                        <ImageContainer className={styles.imageContainer}>
                            <div style={{background: imageBg}} className={styles.imageBg}>
                                <img
                                    src={require(`/assets/img/sections/fun/storyteller/${imgPath}`)}
                                    alt={value}
                                    className={styles.image}
                                />
                            </div>
                        </ImageContainer>
                        <div className={styles.answerItemText}>{value}</div>
                    </AnswerItem>
                ))}
            </div>
        </div>
    );
};
