import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {TextTeaser_GameData, TextTeaser_GamePlayData} from '../../../type';
import {Buttons, DragLayer, TextPart, TextFinal, NumberItem} from './parts';
import styles from './style.scss';

type ContentP = {
    gameData:TextTeaser_GameData;
    gamePlayData:TextTeaser_GamePlayData;
    checkAnswer:() => void;
    handleHintClick:() => void;
    moveTextPart:(where:number, from:number) => void;
};

export const Content = ({
    gameData,
    gamePlayData,
    checkAnswer,
    handleHintClick,
    moveTextPart,
}:ContentP) => {
    const {isHintEnabled, title} = gameData;
    const {
        textParts,
        isCheckBtnDisabled,
        isHintUsed,
        highlight,
        isDragDisabled,
        isCorrect,
    } = gamePlayData;

    return (
        <div className={styles.contentContainer}>
            {!isCorrect && (
                <div className={styles.gridContainer}>
                    <div className={styles.numbers}>
                        {new Array(textParts.length)
                            .fill('')
                            .map((_, i) => (
                                <NumberItem key={i} number={i + 1} />
                            ))}
                    </div>
                    <div className={styles.textPartsContainer}>
                        {textParts.map((textPart, i) => (
                            <TextPart
                                key={i}
                                index={i}
                                element={textPart}
                                highlight={highlight}
                                isDragDisabled={isDragDisabled}
                                moveTextPart={moveTextPart}
                            />
                        ))}
                    </div>
                </div>
            )}
            <CSSTransition
                in={isCorrect}
                timeout={1000}
                unmountOnExit
                classNames={{
                    enter: styles.enter,
                    enterActive: styles.enterActive,
                    exit: styles.exit,
                    exitActive: styles.exitActive,
                }}
            >
                <TextFinal title={title} textParts={textParts} />
            </CSSTransition>
            <Buttons
                isCheckBtnDisabled={isCheckBtnDisabled}
                isHintUsed={isHintUsed}
                isHintEnabled={isHintEnabled}
                isCorrect={isCorrect}
                checkAnswer={checkAnswer}
                handleHintClick={handleHintClick}
            />
            <DragLayer />
        </div>
    );
};
