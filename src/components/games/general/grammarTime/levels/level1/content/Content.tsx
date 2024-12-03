import React from 'react';
import {
    CheckBtn,
    StaticElements,
    VariantElements,
    UserVariant,
    TransitionWrapper,
    DragPreview
} from '../../../components';

import {GrammarTimeL1_GamePlayData} from '../type';
import {
    GrammarTime_ChangeReplacedItem,
    GrammarTime_DropElement,
    GrammarTime_GameData
} from '../../../type';

import styles from './style.scss';

type ContentP = {
    gameData:GrammarTime_GameData;
    gamePlayData:GrammarTimeL1_GamePlayData;
    dropElement:GrammarTime_DropElement;
    changeReplacedItem:GrammarTime_ChangeReplacedItem;
    checkAnswer:() => void;
};

export const Content = ({
    gameData,
    gamePlayData,
    dropElement,
    changeReplacedItem,
    checkAnswer,
}:ContentP) => {
    const {gameTasks} = gameData;
    const {
        currentQ,
        userElements,
        elementToBeReplaced,
        highlight,
        isCorrect,
        isDragDisabled
    } = gamePlayData;
    const {staticElements, variantElements} = gameTasks[currentQ];

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
            <div className={styles.btnWrapper}>
                <CheckBtn userElements={userElements} isDragDisabled={isDragDisabled} onClick={checkAnswer} />
            </div>
            <DragPreview />
        </div>
    );
};
