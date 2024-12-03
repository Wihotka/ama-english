import {classNames} from 'js-data-utils';
import React from 'react';
import {Storyteller_UserAnswer} from '../../../../../type';
import {HandleNextT, HandlePrevT} from '../../../type';
import styles from './style.scss';

type ButtonsP = {
    currentQuestion:number;
    userAnswers:Storyteller_UserAnswer[];
    handleNext:HandleNextT;
    handlePrev:HandlePrevT;
};

export const Buttons = ({
    currentQuestion,
    userAnswers,
    handlePrev,
    handleNext,
}:ButtonsP) => {
    const isNextBtnDisabled = !userAnswers[currentQuestion];
    const prevBtnClassName = classNames(styles.btn, styles.prevBtn);
    const nextBtnClassName = classNames(styles.btn, styles.nextBtn);

    return (
        <>
            <div className={styles.buttonsContainer}>
                {currentQuestion > 0 && (
                    <button className={prevBtnClassName} onClick={handlePrev}>
                        <img
                            src={require('/assets/img/sections/fun/storyteller/prev.png')}
                            alt="previous question"
                        />
                    </button>
                )}
                <button
                    disabled={isNextBtnDisabled}
                    className={nextBtnClassName}
                    onClick={handleNext}
                >
                    <img
                        src={require('/assets/img/sections/fun/storyteller/next.png')}
                        alt="next question"
                    />
                </button>
            </div>
            <div className={styles.smallBtns}>
                {currentQuestion > 0 && (
                    <button className={prevBtnClassName} onClick={handlePrev}>
                        <img
                            src={require('/assets/img/sections/fun/storyteller/prev_small.png')}
                            alt="previous question"
                        />
                    </button>
                )}
                <button
                    disabled={isNextBtnDisabled}
                    className={nextBtnClassName}
                    onClick={handleNext}
                >
                    <img
                        src={require('/assets/img/sections/fun/storyteller/next_small.png')}
                        alt="next question"
                    />
                </button>
            </div>
        </>
    );
};
