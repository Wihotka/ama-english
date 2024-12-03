import React, {useState, useEffect} from 'react';
import {isEqual} from 'lodash';
import {classNames} from 'js-data-utils';

import {GameBtn} from '@components/common/game/components';
import {Word} from './../';

import {AnswerListP, Variant} from '../../../type';

import styles from './style.scss';

export const AnswerList:React.FC<AnswerListP> = (props) => {
    const {gamePlayData, gameData, handlerSelectAnswer} = props;

    const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);

    const {level, arrayOptions} = gameData;

    const {
        selectedVariant,
        isAnimated,

        isFieldUpdate,
        numberOptions
    } = gamePlayData;

    const animateHiddenAnswer = isFieldUpdate ? styles.hiding : styles.showing;

    const styleAnswerList = classNames(styles.answerList, animateHiddenAnswer);

    const typeStyleAnimateAnswer = (variant:Variant) => isEqual(selectedVariant.answer, variant) && isAnimated
        ? selectedVariant.isCorrect ? 'correct' : 'wrong'
        : null;

    const styleAnswerItem = (variant:Variant) => {
        const statusDisabledBtn = isAnimated;
        const activeBtnLvl = isEqual(selectedVariant.answer, variant) ? 'pressed' : '';

        const isActiveBtn = (variant:Variant) => isEqual(selectedVariant.answer, variant) ? 'pressed' : '';

        return classNames(styles.answerVariantBlock, styles.answerVariant, isActiveBtn(variant),
            activeBtnLvl, statusDisabledBtn && styles.disabled);
    };

    // Костыль для дополнительной блокировки нажатия ответов
    useEffect(() => {
        if (isAnimated) {
            setIsBtnDisabled(true);
        } else {
            setTimeout(() => {
                setIsBtnDisabled(false);
            }, 1000);
        }
    }, [isAnimated]);

    return (
        <div className={styleAnswerList}>
            {arrayOptions[numberOptions].map((variant) =>

                <GameBtn
                    answer={typeStyleAnimateAnswer(variant)}
                    key={variant.word}
                    className={styleAnswerItem(variant)}
                    onClick={() => handlerSelectAnswer(variant)}
                    disabled={isBtnDisabled}
                >

                    <Word level={level} variant={variant}/>

                </GameBtn>
            )}
        </div>
    );
};