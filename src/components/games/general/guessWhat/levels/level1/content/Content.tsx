import {Btn} from '@components/common/elements';
import {InfoBtn} from '@components/common/game/components';
import React, {useRef} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {GuessWhat_GameData, GuessWhat_GamePlayData} from '../../../type';
import {ImagesField, WordDescription} from './parts';
import styles from './style.scss';

type ContentP = {
    gameData:GuessWhat_GameData;
    gamePlayData:GuessWhat_GamePlayData;
    changeUserAnswer:(userAnswer:string) => void;
    checkAnswer:() => void;
    handleHintClick:() => void;
};

export const Content = ({
    gameData,
    gamePlayData,
    changeUserAnswer,
    checkAnswer,
    handleHintClick,
}:ContentP) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    const {taskData, isHintEnabled} = gameData;
    const {
        currentQ,
        highlight,
        isCorrect,
        isCheckBtnDisabled,
        isHintUsed,
        hiddenAnswers,
        userAnswer,
        isFieldDisabled,
    } = gamePlayData;
    const {answers, taskWord} = taskData[currentQ];
    const {description, word} = taskWord;

    return (
        <div className={styles.contentContainer}>
            <SwitchTransition>
                <CSSTransition
                    key={currentQ}
                    nodeRef={nodeRef}
                    addEndListener={(done) =>
                        nodeRef.current?.addEventListener(
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
                    <div ref={nodeRef} className={styles.main}>
                        <WordDescription
                            description={description}
                            word={word}
                            highlight={highlight}
                            isCorrect={isCorrect}
                        />
                        <ImagesField
                            images={answers}
                            hiddenAnswers={hiddenAnswers}
                            userAnswer={userAnswer}
                            highlight={highlight}
                            isCorrect={isCorrect}
                            isFieldDisabled={isFieldDisabled}
                            changeUserAnswer={changeUserAnswer}
                        />
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <div className={styles.checkBtnContainer}>
                <Btn
                    className={styles.checkBtn}
                    textCode="check"
                    type="primary"
                    disabled={isCheckBtnDisabled}
                    handler={checkAnswer}
                />
            </div>
            {isHintEnabled && (
                <InfoBtn
                    classNameBtn={styles.hintBtn}
                    sizeShadow="small"
                    type="help"
                    isPressed={isHintUsed}
                    handler={handleHintClick}
                />
            )}
        </div>
    );
};
