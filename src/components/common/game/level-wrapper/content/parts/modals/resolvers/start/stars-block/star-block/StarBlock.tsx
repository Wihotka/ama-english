import React from 'react';
import {useTranslation} from 'react-i18next';
import {getStarContent} from './star-content-getter';

import styles from './styles.scss';

import {GameModalsLang, StartModalStarItem, StartModalStarItemArrT} from '@custom-types';

type P = {
    starInfo:StartModalStarItem;
};

export const StarBlock = ({starInfo}:P) => {
    const {t} = useTranslation('modals/translation');

    const itemArr:Array<StartModalStarItemArrT> = Object.entries(starInfo) as Array<StartModalStarItemArrT>;
    const gameStart:GameModalsLang['gameStart'] = t('gameStart', {returnObjects: true});

    return (
        <>{itemArr.map((item, idx) => {
            const strContent = getStarContent(item, gameStart);

            return <p className={styles.starBlock} key={idx}>{strContent}</p>;
        })}</>
    );
};

