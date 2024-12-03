import React from 'react';

import {Btn} from '@components/common/elements';
import {AnswerList, QuestionField} from './parts';

import {ContentP} from '../type';

import styles from './styles.scss';

export const Content:React.FC<ContentP> = (props) => {
    const {gamePlayData, gameData, handleVoice, handleSelectAnswer, handleCheckingAnswer} = props;
    const {isActiveVerification} = gamePlayData;

    return (
        <div className={styles.content}>
            <QuestionField
                gamePlayData={gamePlayData}
                gameData={gameData}
                onVoicePlay={handleVoice} />

            <AnswerList
                gamePlayData={gamePlayData}
                gameData={gameData}

                handlerSelectAnswer={handleSelectAnswer}
                onVoicePlay={handleVoice} />

            <Btn
                className={styles.btnVerification}
                textCode={'check'}
                type={'primary'}
                disabled={!isActiveVerification}
                handler={handleCheckingAnswer} />
        </div>
    );
};

