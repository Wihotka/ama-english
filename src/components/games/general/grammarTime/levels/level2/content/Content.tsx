import React from 'react';
import {
    CheckBtn,
    StaticElements,
    VariantElements,
    UserVariant,
    DragPreview,
    TransitionWrapper,
} from '../../../components';

import {
    GrammarTime_ChangeReplacedItem,
    GrammarTime_DropElement,
    GrammarTime_GameData
} from '../../../type';
import {GrammarTimeL2_GamePlayData} from '../type';

import styles from './style.scss';

type ContentP = {
    gameData:GrammarTime_GameData;
    gamePlayData:GrammarTimeL2_GamePlayData;
    isFirstTry:boolean;
    dropElement:GrammarTime_DropElement;
    changeReplacedItem:GrammarTime_ChangeReplacedItem;
    checkAnswer:() => void;
};

export const Content = ({
    gameData,
    gamePlayData,
    isFirstTry,
    dropElement,
    changeReplacedItem,
    checkAnswer,
}:ContentP) => {
    const {gameTasks} = gameData;
    const {
        currentQ,
        userElements,
        isCorrect,
        elementToBeReplaced,
        highlight,
        correctIndexes,
        isDragDisabled
    } = gamePlayData;
    const {staticElements, variantElements} = gameTasks[currentQ];
    const isDropDisabled = (i:number) => !isFirstTry && correctIndexes.includes(i);

    return (
        <div className={styles.contentContainer}>
            <TransitionWrapper currentQ={currentQ}>
                <div className={styles.contentMain}>
                    <div className={styles.mainContainer}>
                        <StaticElements staticElements={staticElements} />
                        <div className={styles.userElementsContainer}>
                            {userElements.map((el, i) => (
                                <UserVariant
                                    key={i}
                                    element={el}
                                    index={i}
                                    elementToBeReplaced={elementToBeReplaced}
                                    highlight={highlight}
                                    isCorrect={isCorrect}
                                    isDragDisabled={isDragDisabled}
                                    correctIndexes={correctIndexes}
                                    isDropDisabled={isDropDisabled(i)}
                                    dropElement={dropElement}
                                    changeReplacedItem={changeReplacedItem}
                                />
                            ))}
                        </div>
                    </div>
                    <VariantElements
                        variantElements={variantElements}
                        userElements={userElements}
                    />
                </div>
            </TransitionWrapper>
            <CheckBtn userElements={userElements} isDragDisabled={isDragDisabled} onClick={checkAnswer} />
            <DragPreview />
        </div>
    );
};
