import {Btn} from '@components/common/elements';
import React, {useRef} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {
    SecretCode_GameData,
    SecretCode_GamePlayData,
    SecretCode_ImagesPaths,
} from '../../../type';
import {
    ChangeActiveInputT,
    ChangeMapVisibilityT,
    ChangeUserAnswersT,
} from '../type';
import {AnswerInputs, Map, Task} from './parts';
import styles from './style.scss';

type ContentP = {
    gameData:SecretCode_GameData;
    gamePlayData:SecretCode_GamePlayData;
    mode:string;
    level:number;
    imagesPaths:SecretCode_ImagesPaths | undefined;
    changeMapVisibility:ChangeMapVisibilityT;
    changeActiveInput:ChangeActiveInputT;
    changeUserAnswers:ChangeUserAnswersT;
    checkAnswer:() => void;
};

export const Content = ({
    gameData,
    gamePlayData,
    mode,
    level,
    imagesPaths,
    changeMapVisibility,
    changeActiveInput,
    changeUserAnswers,
    checkAnswer,
}:ContentP) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    const {words, alphabet} = gameData;
    const {
        iterationCount,
        isMapOpen,
        userAnswers,
        mistakeIndexes,
        mistakesQty,
        highlight,
        activeInputIndex,
    } = gamePlayData;
    const {task} = words[iterationCount];
    const isImage = level > 1;
    const isSmile = level === 2;
    const isHardMode = mode === 'hard';
    const hideTask = isHardMode && isMapOpen;
    const isBtnDisabled = highlight || userAnswers.some((a) => a === '');

    return (
        <div className={styles.gameWrapper}>
            <SwitchTransition>
                <CSSTransition
                    key={iterationCount}
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
                    unmountOnExit
                >
                    <div ref={nodeRef}>
                        <div className={styles.gameMain}>
                            {hideTask ? null : (
                                <Task
                                    task={task}
                                    isImage={isImage}
                                    isSmile={isSmile}
                                />
                            )}
                            <Map
                                alphabet={alphabet}
                                imagesPaths={imagesPaths}
                                isMapOpen={isMapOpen}
                                isHardMode={isHardMode}
                                isImage={isImage}
                                isSmile={isSmile}
                                changeMapVisibility={changeMapVisibility}
                            />  
                        </div>
                        <AnswerInputs
                            alphabet={alphabet}
                            userAnswers={userAnswers}
                            mistakeIndexes={mistakeIndexes}
                            mistakesQty={mistakesQty}
                            highlight={highlight}
                            activeInputIndex={activeInputIndex}
                            isBtnDisabled={isBtnDisabled}
                            changeActiveInput={changeActiveInput}
                            changeUserAnswers={changeUserAnswers}
                            checkAnswer={checkAnswer}
                        />
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <div className={styles.buttonContainer}>
                <Btn
                    handler={checkAnswer}
                    disabled={isBtnDisabled}
                    className={styles.checkBtn}
                    type='primary'
                    textCode='check'
                />
            </div>
        </div>
    );
};
