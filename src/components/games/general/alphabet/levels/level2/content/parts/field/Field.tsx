import React, {useRef} from 'react';
import {classNames} from 'js-data-utils';
import {SwitchTransition, CSSTransition} from 'react-transition-group';

import {GameBtn} from '@components/common/game/components';

import styles from './style.scss';

import {AlphabetL2_GamePlayData, LetterT} from '../../../type';

type FieldT = {
    letter:LetterT,
    gamePlayData:AlphabetL2_GamePlayData,
    handleClick:Function,
    index:number,
    birdsQty:number
};

export const Field = ({letter, gamePlayData, handleClick, index, birdsQty}:FieldT) => {
    const {correctLetter, isCorrect, wrongLetter, birdNum, id} = letter;
    const {userAnswers, iteration, isAnimated, currentMistakeId} = gamePlayData;

    const isSelected = userAnswers.includes(id);
    const isInactive = index === 0 && iteration > (birdsQty - 1);

    const letterClass = classNames(styles.letter,
        isAnimated ? '' : styles.staticLetter);
    const fieldClass = classNames(styles.field,
        iteration <= birdsQty ? styles.startField : '',
        index === (birdsQty - 1) ? styles.newField : '',
        isInactive ? styles.oldField : '');

    const nodeRef = useRef<any>(null);
    const display = correctLetter === '' ? 'none' : 'auto';
    const answer = currentMistakeId === id ? 'wrong' : null;
    const handler = () => handleClick({isCorrect: isCorrect || isSelected, id});

    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition
                style={{display}}
                key={iteration > birdsQty ? iteration : 0}
                addEndListener={(done:any) => nodeRef.current?.addEventListener('transitionend', done, false)}
                nodeRef={nodeRef}
                classNames={{
                    enter: styles.fadeEnter,
                    enterActive: styles.fadeEnterActive,
                    exit: styles.fadeExit,
                    exitActive: styles.fadeExitActive,
                }}>
                <div
                    ref={nodeRef}
                    className={fieldClass}>
                    <img
                        className={styles.birdImage}
                        src={require(`/assets/img/sections/general/alphabet/birds/${birdNum}.png`)}
                        alt={''}/>
                    <GameBtn
                        className={letterClass}
                        answer={answer}
                        onClick={handler}>
                        {isCorrect || isSelected
                            ? correctLetter
                            : wrongLetter}
                    </GameBtn>
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
};
