import React from 'react';
import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {WordSalad_ImagesPaths, WordSalad_GamePlayData} from '../../../../../type';

type InputP = {
    imagesPaths:WordSalad_ImagesPaths | null;
    gamePlayData:WordSalad_GamePlayData;
    handleClear:Function;
    handleRenew:Function;
};

export const Input = ({imagesPaths, gamePlayData, handleClear, handleRenew}:InputP) => {
    const {answerStatus, inputIndexes, letters} = gamePlayData;

    return (
        <div className={styles.input}>
            <button
                className={styles.button}
                onClick={() => handleRenew()}>
                <img src={imagesPaths ? imagesPaths['renew'] : ''} alt={''} className={styles.renewImg}/>
            </button>
            <div className={classNames(styles.inputValue, answerStatus
                ? styles[`${answerStatus}InputValue`]
                : '')}>
                {inputIndexes.map(i => letters[i]).join('')}
            </div>
            <button className={styles.button} onClick={() => handleClear()}>
                <img src={imagesPaths ? imagesPaths['cancel'] : ''} alt={''} className={styles.cancelImg}/>
            </button>
        </div>
    );
};
