import React from 'react';

import {classNames} from 'js-data-utils';

import {GameBtn} from '@components/common/game/components';
import {Word} from '../';

import {AnswerItemLevel1_3P} from '../../../type';

import styles from './style.scss';

export const AnswerItemType1_3:React.FC<AnswerItemLevel1_3P> = (props) => {
    const {variant, gamePlayData, level, handlerSelectAnswer} = props;
    const {selectedVariant, isAnimated} = gamePlayData;

    const statueAnimated = selectedVariant?.answer === variant.selectedTranscription && isAnimated;
    const statusDisabledBtn = selectedVariant && selectedVariant?.answer !== variant.selectedTranscription && isAnimated;

    const typeStyleAnimateAnswer = statueAnimated
        ? selectedVariant.isCorrect ? 'correct' : 'wrong'
        : null;

    const activeBtnLvl = selectedVariant.answer === variant.selectedTranscription ? 'pressed' : '';

    const styleAnswerItem = classNames(styles.answerVariantBlock, activeBtnLvl, statusDisabledBtn && styles.disabled);

    const handlerClick = () => handlerSelectAnswer(variant);
    
    return (
        <GameBtn
            key={variant.word}
            className={styleAnswerItem}
            onClick={handlerClick}
            answer={typeStyleAnimateAnswer}
            disabled={statusDisabledBtn}
        >

            {level === 1 &&
                <span className={styles.textAnswer}>
                    [{variant.selectedTranscription}]
                </span>}

            {level === 3 && <Word studyStage={props.studyStage} variant={variant} field={'answer'}/>}

        </GameBtn>
    );
};