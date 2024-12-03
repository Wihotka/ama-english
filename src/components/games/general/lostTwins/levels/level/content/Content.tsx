import React from 'react';

import {InfoBtn} from '@components/common/game/components';
import {CardList} from './parts';

import {ContentP} from './../type';

import styles from './styles.scss';

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, handlerSelectCard, handlerFlipAllCard, gameSettings} = props;
    const {isStartFlip, isAllFlipCard} = gamePlayData;
    const {hint} = gameSettings;

    const isDisabledHelp = isStartFlip || isAllFlipCard;

    return (
        <div className={styles.content}>

            {!!hint &&
                <InfoBtn
                    type={'help'}
                    sizeShadow={'big'}
                    handler={handlerFlipAllCard}
                    isPressed={isAllFlipCard}
                    classNameBtn={styles.btnHelp}
                    disabled={isDisabledHelp}
                />}

            <CardList gameData={gameData} gamePlayData={gamePlayData} handlerSelectCard={handlerSelectCard} />
        </div>
    );
};
