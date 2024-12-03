import React, {useRef, useState, useEffect} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {classNames} from 'js-data-utils';

import {Btn} from '@components/common/elements';

import {Cell, Answers, AnswersWithImages, PreviewCell} from './parts';

import styles from './style.scss';

import {ContentP, CardT} from '../type';

export const Content = (p:ContentP) => {
    const {gamePlayData, moveHandler, checkAnswer, changeDragStatus, gameData, level} = p;
    const {cards, iteration} = gamePlayData;
    const {words} = gameData.examples[iteration];

    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [isBtnClicked, setIsBtnClicked] = useState<boolean>(false);

    const sortFoo = (a:CardT, b:CardT) => (a.id - b.id);
    const columnCards = (columnId:number) => [...cards].filter(card => card.columnId === columnId).sort(sortFoo);
    const answers = columnCards(0);

    useEffect(() => {
        !isBtnClicked && setIsDisabled(answers.every(({word}) => word !== null));
    });

    const nodeRef = useRef<any>(null);

    const handleBtnClick = () => {
        checkAnswer();
        setIsDisabled(false);
        setIsBtnClicked(true);

        setTimeout(() => setIsBtnClicked(false), 2000);
    };

    return (
        <>
            <SwitchTransition mode={'out-in'}>
                <CSSTransition
                    key={iteration}
                    addEndListener={(done:any) => nodeRef.current?.addEventListener('transitionend', done, false)}
                    nodeRef={nodeRef}
                    classNames={{
                        enter: styles.fadeEnter,
                        enterActive: styles.fadeEnterActive,
                        exit: styles.fadeExit,
                        exitActive: styles.fadeExitActive,
                    }}>
                    <div
                        className={classNames(styles.game, level === 1 ? styles.gameLevel1 : styles.gameLevel2)}
                        ref={nodeRef}
                    >
                        {level === 1
                            ? <Answers
                                answers={answers}
                                moveHandler={moveHandler}
                                gamePlayData={gamePlayData}
                                changeDragStatus={changeDragStatus}/>
                            : <AnswersWithImages
                                words={words}
                                answers={answers}
                                moveHandler={moveHandler}
                                gamePlayData={gamePlayData}
                                changeDragStatus={changeDragStatus}/>}
                        <div className={classNames(styles.words, styles[`words${level}`])}>
                            <div className={classNames(styles.words__inner, styles[`words__inner${level}`])}>
                                {columnCards(1).map((card) =>
                                    <Cell
                                        key={card.id}
                                        card={card}
                                        gamePlayData={gamePlayData}
                                        moveHandler={moveHandler}
                                        changeDragStatus={changeDragStatus}
                                    />)}
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <Btn
                handler={handleBtnClick}
                className={styles.checkBtn}
                textCode={'check'}
                disabled={!isDisabled}
                type={'primary'}/>
            <PreviewCell />
        </>
    );
};

