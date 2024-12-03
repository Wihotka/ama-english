import React from 'react';

import {classNames} from 'js-data-utils';

import {AnswerItemL1, AnswerItemL2} from './../';

import {AnswerListP} from '../../../type';

import styles from './style.scss';

export const AnswerList:React.FC<AnswerListP> = (props) => {
    const {gamePlayData, gameData, handlerSelectAnswer, onVoicePlay} = props;
    const {isFieldUpdate, numberOptions} = gamePlayData;
    const {level, arrayOptions} = gameData;

    const ordinalNamesAnswers = ['A', 'B', 'C', 'D'] as const;
    const isTypeRenderField = level === 1 as const;

    const animateHiddenAnswer = isFieldUpdate ? styles.hiding : styles.showing;

    const styleAnswerList = classNames(styles.answerList, animateHiddenAnswer, level === 2 ? styles.answersListL2 : '');

    return (
        <div className={styleAnswerList}>
            {arrayOptions[numberOptions].map((variant, index) =>
                isTypeRenderField
                    ? <AnswerItemL1
                        key={index}
                        variant={variant}
                        handlerSelectAnswer={handlerSelectAnswer}
                        gamePlayData={gamePlayData}
                    />

                    : <AnswerItemL2
                        key={index}
                        variant={variant}
                        handlerSelectAnswer={handlerSelectAnswer}
                        gamePlayData={gamePlayData}
                        onVoicePlay={onVoicePlay}
                    >
                        {ordinalNamesAnswers[index]}
                    </AnswerItemL2>
            )}
        </div>
    );
};