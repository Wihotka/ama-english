import React from 'react';

import {Btn} from '@components/common/elements';
import {AnswerList, QuestionField} from './parts';

import {ContentP} from './../type';

import styles from './style.scss';

export const Content = (props:ContentP) => {
    const {gamePlayData, gameData, handleVoice, handleCheckingAnswer, handlerSelectAnswer} = props;
    const {isActiveVerification} = gamePlayData;

    return (
        <div className={styles.content}>
            <QuestionField
                gameData={gameData}
                gamePlayData={gamePlayData}
                onVoicePlay={handleVoice} />

            <AnswerList
                gameData={gameData}
                gamePlayData={gamePlayData}
                onVoicePlay={handleVoice}
                handlerSelectAnswer={handlerSelectAnswer} />

            <Btn
                className={styles.btnVerification}
                textCode={'check'}
                type={'primary'}
                disabled={!isActiveVerification}
                handler={handleCheckingAnswer}  />
        </div>
    );
};

