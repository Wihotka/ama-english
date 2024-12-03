import React from 'react';
import {classNames} from 'js-data-utils';

import {GameBtn} from '@components/common/game/components';

import styles from './styles.scss';

import {LegoLetterL2_GamePlayData} from '../../../type';

type ActiveCardT = {
    letter:string,
    height:number,
    width:number,
    path:string,
    imgName:string,
    clickHandler?:Function,
    gamePlayData:LegoLetterL2_GamePlayData
};

export const ActiveCard = ({letter, height, width, path, imgName, clickHandler, gamePlayData}:ActiveCardT) => {
    const {answer, gameIsActive, isAnswerChecked} = gamePlayData;

    const handler = () => {
        if (!!clickHandler && gameIsActive) {
            clickHandler({letter});
        }
    };

    const cn = classNames(styles.card, answer.letter === letter
        ? styles.pressedCard
        : '');
    const answerStatus = (answer.letter === letter && isAnswerChecked)
        ? answer.isCorrect
            ? 'correct'
            : 'wrong'
        : null;

    return (
        <GameBtn
            className={cn}
            answer={answerStatus}
            onClick={handler}>
            <>
                <div className={styles.letter}>
                    <svg
                        style={{filter: 'drop-shadow(1px 2px 0px #38166D)'}}
                        // viewBox={`0 0 ${width} ${height}`}
                        height={height}
                        width={width}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill='#FFFFFF'
                            d={path}
                        />
                    </svg>
                </div>
                <img
                    className={styles.cardImage}
                    src={require(`_assets/img/sections/general/legoLetter/animals/${imgName}.png`)}
                    alt={''}/>
            </>
        </GameBtn>
    );
};
