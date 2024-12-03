import React from 'react';
import {classNames} from 'js-data-utils';

import {InfoBtn} from '@components/common/game/components';
import {Word} from './../';

import {InterfaceQuestionFieldP, TypeField, Variant} from '../../../type';

import styles from './style.scss';

export const QuestionField = React.memo<InterfaceQuestionFieldP>((props) => {
    const {gamePlayData, onVoicePlay, gameData} = props;
    const {isVoicePlay, isFieldUpdate, numberOptions} = gamePlayData;
    const {level, arrayOptions} = gameData;

    const correctVariant:Variant | undefined = arrayOptions[numberOptions].find(option => option.isCorrect);

    if (!correctVariant) return null;

    const isActiveVoicePlay
        = isVoicePlay.transcription === correctVariant.selectedTranscription &&
        isVoicePlay.isPlay &&
        isVoicePlay.typeCallField === TypeField.QUESTION;
    const stylePositionWrapperField = level !== 2 ? styles.fieldRows : styles.fieldColumn;

    const styleTypeAdaptive = level !== 2 ? styles.adaptiveFieldL1_3 : styles.adaptiveFieldL2;

    const styleWrapperField = classNames(styles.field, stylePositionWrapperField, styleTypeAdaptive);

    const handleClickVoiceButton = () => onVoicePlay(correctVariant.selectedTranscription, TypeField.QUESTION);

    return (
        <div className={styleWrapperField}>
            {(level === 1 || level === 3) &&
                <InfoBtn
                    classNameBtn={styles.voiceBtn}
                    sizeShadow={'big'}
                    type={'play'}
                    handler={handleClickVoiceButton}
                    isPressed={isActiveVoicePlay}
                />
            }

            {level === 2 &&
                <Word variant={correctVariant} animation={isFieldUpdate} field={'question'} level={2} />
            }
        </div>
    );
});