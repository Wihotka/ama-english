import React, {useRef} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {
    SortOut_GameData,
    SortOut_GamePlayData,
    SortOut_ImagesPaths,
} from '../../../type';
import {CheckAnswerOnDropT} from '../type';
import {GameDragElements, GameField, GameTask, PreviewItem} from './parts';
import styles from './style.scss';

type ContentP = {
    gameData:SortOut_GameData;
    gamePlayData:SortOut_GamePlayData;
    imagesPaths:SortOut_ImagesPaths | undefined;
    checkAnswer:CheckAnswerOnDropT;
};

export const Content = ({
    gameData,
    gamePlayData,
    imagesPaths,
    checkAnswer,
}:ContentP) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    const {gameFieldData, gameTasks, cols, rows} = gameData;
    const {
        currentTask,
        isCorrect,
        highlight,
        highlightIndex,
        selectedElement,
        isDragDisabled,
    } = gamePlayData;
    const {fieldElements, dndElements} = gameFieldData[currentTask];
    const taskData = gameTasks[currentTask];

    return (
        <div className={styles.content}>
            <img className={styles.image} src={imagesPaths?.phonebg} />
            <SwitchTransition>
                <CSSTransition
                    key={currentTask}
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
                    <div
                        ref={nodeRef}
                        className={styles.main}
                    >
                        <GameTask
                            task={taskData}
                            highlight={highlight}
                            isCorrect={isCorrect}
                        />
                        <GameField
                            fieldElements={fieldElements}
                            rows={rows}
                            cols={cols}
                            highlight={highlight}
                            highlightIndex={highlightIndex}
                            isCorrect={isCorrect}
                            selectedElement={selectedElement}
                            checkAnswer={checkAnswer}
                        />
                        <GameDragElements
                            dndElements={dndElements}
                            selectedElement={selectedElement}
                            isDragDisabled={isDragDisabled}
                        />
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <PreviewItem />
        </div>
    );
};
