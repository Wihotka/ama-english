import React from 'react';
import {classNames} from 'js-data-utils';

import {LetterChainGPD} from '../../../init/type';
import styles from './styles.scss';

type InputP = {
    gamePlayData:LetterChainGPD;
    handleClear:Function;
    handleRenew:Function;
};

export const Input = ({gamePlayData, handleClear, handleRenew}:InputP) => {
    const {answerStatus, inputIndexes, letters} = gamePlayData;

    return (
        <div className={styles.input}>
            <button
                className={styles.button}
                onClick={() => handleRenew()}
            >
                <img src={require('/assets/img/sections/arena/letterChain/renew.svg')} alt={''} className={styles.renewImg}/>
            </button>
            <div className={classNames(styles.inputValue, answerStatus
                ? styles[`${answerStatus}InputValue`]
                : '')}>
                {inputIndexes.map(i => letters[i]).join('')}
            </div>
            <button
                className={styles.button}
                onClick={() => handleClear()}
            >
                <img src={require('/assets/img/sections/arena/letterChain/clear.svg')} alt={''} className={styles.cancelImg}/>
            </button>
        </div>
    );
};
