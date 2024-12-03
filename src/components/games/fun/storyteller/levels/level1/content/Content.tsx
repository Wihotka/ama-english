import React from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {Storyteller_GameData, Storyteller_GamePlayData} from '../../../type';
import {ChooseAnswerT, HandleNextT, HandlePrevT} from '../type';
import {Buttons, GameQuestion} from './parts';
import {StoryScreen} from './parts/storyScreen';
import styles from './style.scss';

type ContentP = {
    gameData:Storyteller_GameData;
    gamePlayData:Storyteller_GamePlayData;
    chooseAnswer:ChooseAnswerT;
    handleNext:HandleNextT;
    handlePrev:HandlePrevT;
};

export const Content = ({
    gameData,
    gamePlayData,
    chooseAnswer,
    handleNext,
    handlePrev,
}:ContentP) => {
    const {gameQuestions, imageBg, storyTitle} = gameData;
    const {currentQuestion, isCompleted, storyText, userAnswers}
        = gamePlayData;

    return (
        <div className={styles.contentWrapper}>
            {isCompleted ? (
                <StoryScreen
                    storyText={storyText}
                    userAnswers={userAnswers}
                    imageBg={imageBg}
                    storyTitle={storyTitle}
                />
            ) : (
                <>
                    <SwitchTransition>
                        <CSSTransition
                            key={currentQuestion}
                            addEndListener={(node, done) =>
                                node.addEventListener(
                                    'transitionend',
                                    done,
                                    false
                                )
                            }
                            classNames={{
                                enter: styles.enter,
                                enterActive: styles.enterActive,
                                exit: styles.exit,
                                exitActive: styles.exitActive,
                            }}
                        >
                            <GameQuestion
                                gameQuestion={
                                    gameQuestions[currentQuestion]
                                }
                                currentQuestion={currentQuestion}
                                imageBg={imageBg}
                                userAnswers={userAnswers}
                                chooseAnswer={chooseAnswer}
                            />
                        </CSSTransition>
                    </SwitchTransition>
                    <Buttons
                        currentQuestion={currentQuestion}
                        userAnswers={userAnswers}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                </>
            )}
        </div>
    );
};
