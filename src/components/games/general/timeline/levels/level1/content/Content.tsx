import React from 'react';

import {Btn} from '@components/common/elements';
import {AnswerList, QuestionField} from './parts';

import {ContentP} from '../type';

import styles from './styles.scss';

export const Content:React.FC<ContentP> = (props) => {
    const {
        gamePlayData,
        gameData,

        handleSelectOption,
        handleCheckingAnswer
    } = props;

    const {isActiveVerification} = gamePlayData;

    return (
        <div className={styles.content}>
            <QuestionField
                gamePlayData={gamePlayData}
                gameData={gameData}
            />

            <AnswerList
                gamePlayData={gamePlayData}
                gameData={gameData}

                handlerSelectOption={handleSelectOption}
            />

            <Btn
                className={styles.btnVerification}
                textCode={'check'}
                type={'primary'}
                disabled={!isActiveVerification}
                handler={handleCheckingAnswer} />
        </div>
    );
};

