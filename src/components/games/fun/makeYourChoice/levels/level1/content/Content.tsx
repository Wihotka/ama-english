import React, {useRef} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {
    MakeYourChoice_GameData,
    MakeYourChoice_GamePlayData,
} from '../../../type';
import {CheckAnswerT} from '../type';
import {Answers, Points, Word} from './parts';
import styles from './style.scss';

type ContentP = {
    gameData:MakeYourChoice_GameData;
    gamePlayData:MakeYourChoice_GamePlayData;
    showImage:boolean;
    checkAnswer:CheckAnswerT;
};

export const Content = ({
    gameData,
    gamePlayData,
    showImage,
    checkAnswer,
}:ContentP) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    const {wordsData} = gameData;
    const {
        currentQ,
        pointsPerAnswer,
        streak,
        score,
        highlight,
        isCorrectAnswer,
        btnIndex
    } = gamePlayData;
    const {word, answers, img} = wordsData[currentQ];

    return (
        <div className={styles.contentContainer}>
            <Points
                pointsPerAnswer={pointsPerAnswer}
                streak={streak}
                score={score}
            />
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
                    <div ref={nodeRef} className={styles.transitionContainer}>
                        <Word word={word} img={img} showImage={showImage} />
                        <Answers
                            answers={answers}
                            btnIndex={btnIndex}
                            highlight={highlight}
                            isCorrectAnswer={isCorrectAnswer}
                            checkAnswer={checkAnswer}
                        />
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
};
