import React from 'react';
import {isEqual} from 'lodash';

import {InfoBtn} from '@components/common/game/components';
import {Word} from './../';

import {InterfaceQuestionFieldP, TypeField, Variant} from '../../../type';

import styles from './style.scss';

export const QuestionField = React.memo<InterfaceQuestionFieldP>((props) => {
    const {gamePlayData, onVoicePlay, gameData} = props;
    const {level, arrayOptions} = gameData;

    const {
        isVoicePlay,
        isFieldUpdate,
        numberOptions
    } = gamePlayData;

    const correctVariant:Variant | undefined = arrayOptions[numberOptions].find(option => option.isCorrect);

    if (!correctVariant) return null;

    const isActiveVoicePlay = isEqual(isVoicePlay.variant, correctVariant) &&
        isVoicePlay.isPlay &&
        isVoicePlay.typeCallField === TypeField.QUESTION;

    const handleClickVoiceButton = () => onVoicePlay(correctVariant, TypeField.QUESTION);

    return (
        <div className={styles.field}>
            {level === 1 &&
                <InfoBtn
                    classNameBtn={styles.btnVoice}
                    sizeShadow={'big'}
                    type={'play'}
                    handler={handleClickVoiceButton}
                    isPressed={isActiveVoicePlay}
                />}

            {level === 2 &&
                <Word variant={correctVariant} animation={isFieldUpdate} field={'question'}/>}
        </div>
    );
});