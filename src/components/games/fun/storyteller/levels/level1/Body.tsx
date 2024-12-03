import React from 'react';
import {StorytellerT, Storyteller_GamePlayData} from '../../type';
import {Content} from './content';
import {ChooseAnswerT, HandleNextT, HandlePrevT} from './type';

export const Body = ({game, changeGPD}:StorytellerT) => {
    const {gameData, gamePlayData} = game;
    const {userAnswers, currentQuestion, storyText} = gamePlayData;

    const chooseAnswer:ChooseAnswerT = (questionIndex, answer) => {
        const curUserAnswer = userAnswers[currentQuestion];
        const re = new RegExp(
            curUserAnswer ? `${curUserAnswer.value}` : `a${currentQuestion}`,
            'g'
        );

        changeGPD<Storyteller_GamePlayData>({
            userAnswers: userAnswers.map((a, ndx) =>
                questionIndex === ndx ? answer : a
            ),
            storyText: storyText.replace(re, answer.value),
        });
    };

    const handleNext:HandleNextT = () => {
        changeGPD<Storyteller_GamePlayData>({
            currentQuestion:
                currentQuestion === 5 ? currentQuestion : currentQuestion + 1,
            isCompleted: currentQuestion === 5,
        });
    };

    const handlePrev:HandlePrevT = () => {
        changeGPD<Storyteller_GamePlayData>({
            currentQuestion: currentQuestion - 1,
        });
    };

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            chooseAnswer={chooseAnswer}
            handleNext={handleNext}
            handlePrev={handlePrev}
        />
    );
};
