import React from 'react';
import {classNames} from 'js-data-utils';

import {AnswerItemType1_3, AnswerItemType2} from './../';

import {AnswerListP} from '../../../type';

import styles from './style.scss';

export const AnswerList:React.FC<AnswerListP> = (props) => {
    const {gamePlayData, gameData, handlerSelectAnswer, onVoicePlay} = props;
    const {isFieldUpdate, numberOptions} = gamePlayData;
    const {level, arrayOptions} = gameData;

    const ordinalNamesAnswers = ['A', 'B', 'C', 'D'] as const;

    const typeItemsField = level === 1 || level === 3;

    const styleTypeAdaptive = level === 1 || level === 3 ? styles.adaptiveL1_3 : styles.adaptiveL2;

    const styleAnswerList = classNames(styles.answerList, isFieldUpdate ? styles.hiding : styles.showing, styleTypeAdaptive);

    return (
        <div className={styleAnswerList}>
            {arrayOptions[numberOptions].map((variant, index) =>

                typeItemsField
                    ? <AnswerItemType1_3
                        key={index}
                        variant={variant}
                        level={level}
                        gamePlayData={gamePlayData}
                        handlerSelectAnswer={handlerSelectAnswer}
                        studyStage={props.gameData.studyStage}
                    />
                    : <AnswerItemType2
                        key={index}
                        handlerSelectAnswer={handlerSelectAnswer}
                        variant={variant}
                        onVoicePlay={onVoicePlay}
                        gamePlayData={gamePlayData}>

                        {ordinalNamesAnswers[index]}

                    </AnswerItemType2>
            )}
        </div>);
};