import React from 'react';
import {classNames} from 'js-data-utils';

import {GameBtn} from '@components/common/game/components';

import {AnswerListP} from '../../../type';

import styles from './style.scss';

export const AnswerList:React.FC<AnswerListP> = (props) => {
    const {gamePlayData, gameData, handlerSelectOption} = props;
    const {level, arrayOptions} = gameData;
    const {selectedVariant, isAnimated, isFieldUpdate, numberOptions} = gamePlayData;

    const animateHiddenAnswer = isFieldUpdate ? styles.hiding : styles.showing;

    const typeStyleAnimateAnswer = (variant:string) => selectedVariant?.answer === variant && isAnimated
        ? selectedVariant.isCorrect ? 'correct' : 'wrong'
        : null;

    const styleAnswerList = classNames(styles.answerList, styles[`answerList${level}`], animateHiddenAnswer);
    const styleAnswerItem = (variant:string) => {
        const statusDisabledBtn = selectedVariant && selectedVariant?.answer !== variant && isAnimated;
        const activeBtnLvl = selectedVariant.answer === variant ? 'pressed' : '';

        return classNames(styles[`answerBlock${level}`], activeBtnLvl, statusDisabledBtn && styles.disabled);
    };

    const {answers} = arrayOptions[numberOptions];

    return (
        <div className={styleAnswerList}>
            {answers.map((variant) =>

                <GameBtn
                    key={variant}
                    className={styleAnswerItem(variant)}
                    answer={typeStyleAnimateAnswer(variant)}
                    onClick={() => handlerSelectOption(variant)}>

                    {level === 1 && <img className={styles.img} src={require(`/assets/img/resources${variant}`)} alt="#"/>}

                    {level === 2 && <p className={styles.text}>{variant}</p>}

                </GameBtn>

            )}
        </div>
    );
};