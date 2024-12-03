import {Btn} from '@components/common/elements';
import {InfoBtn} from '@components/common/game/components';
import React from 'react';
import styles from './style.scss';

type ButtonsP = {
    isCheckBtnDisabled:boolean;
    isHintUsed:boolean;
    isHintEnabled:boolean;
    isCorrect:boolean;
    checkAnswer:() => void;
    handleHintClick:() => void;
};

export const Buttons = ({
    isCheckBtnDisabled,
    isHintUsed,
    isHintEnabled,
    isCorrect,
    checkAnswer,
    handleHintClick,
}:ButtonsP) => (
    <>
        <div className={styles.checkBtnContainer}>
            <Btn
                handler={checkAnswer}
                disabled={isCheckBtnDisabled}
                className={styles.checkBtn}
                type="primary"
                textCode={isCorrect ? 'next' : 'check'}
            />
        </div>
        {isHintEnabled && (
            <div className={styles.hintContainer}>
                <InfoBtn
                    classNameBtn={styles.hintBtn}
                    sizeShadow="small"
                    type="help"
                    isPressed={isHintUsed}
                    handler={handleHintClick}
                />
            </div>
        )}
    </>
);
