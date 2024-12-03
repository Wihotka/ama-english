import React from 'react';

import {classNames} from 'js-data-utils';
import {isEqual} from 'lodash';

import {GameBtn} from '@components/common/game/components';
import {Word} from './../';

import {AnswerItemL1P} from '../../../type';

import styles from './styles.scss';

export const AnswerItemL1:React.FC<AnswerItemL1P> = (props) => {
    const {variant, gamePlayData, handlerSelectAnswer} = props;
    const {selectedVariant, isAnimated} = gamePlayData;

    const statueAnimated = isEqual(selectedVariant.answer, variant) && isAnimated;
    const statusDisabledBtn = selectedVariant && isEqual(selectedVariant.answer, variant) && isAnimated;

    const typeStyleAnimateAnswer = statueAnimated
        ? selectedVariant.isCorrect ? 'correct' : 'wrong'
        : null;

    const activeBtnLvl = isEqual(selectedVariant.answer, variant) ? 'pressed' : '';

    const styleAnswerItem = classNames(styles.answerVariantBlock, activeBtnLvl, statusDisabledBtn && styles.disabled);

    const handlerAnswerItem = () => handlerSelectAnswer(variant);

    return (
        <GameBtn
            key={variant.word}
            className={styleAnswerItem}
            onClick={handlerAnswerItem}
            answer={typeStyleAnimateAnswer}
            disabled={statusDisabledBtn}>

            <Word variant={variant} field={'answer'}/>

        </GameBtn>
    );
};