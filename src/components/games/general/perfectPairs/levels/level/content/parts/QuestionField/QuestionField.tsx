import React from 'react';

import {InterfaceQuestionFieldP, Variant} from '../../../type';

import styles from './style.scss';

export const QuestionField = React.memo<InterfaceQuestionFieldP>((props) => {
    const {gamePlayData, gameData} = props;
    const {arrayOptions} = gameData;
    const {numberOptions} = gamePlayData;

    const correctVariant:Variant | undefined = arrayOptions[numberOptions].find(option => option.isCorrect);

    if (!correctVariant) return null;
    
    return (
        <div className={styles.field}>
            <img className={styles.image} src={correctVariant.imageUrls[0]} alt="#" />
        </div>
    );
});