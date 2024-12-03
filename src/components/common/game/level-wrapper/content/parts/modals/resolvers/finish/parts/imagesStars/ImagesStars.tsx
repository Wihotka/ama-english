import React from 'react';
import {classNames} from 'js-data-utils';

import styles from './styles.scss';

export const ImagesStars = ({starsQty}:{ starsQty:number }) => {
    const starsArr = [];

    for (let i = 0; i < 3; i++) {
        starsArr.push(starsQty > i ? 'activeStar' : 'inactiveStar');
    }

    return (
        <div className={styles.stars}>
            {starsArr.map((imgName, index) => <img
                key={index}
                className={classNames(styles[imgName], styles[`star${index}`])}
                src={require(`/assets/img/modals/${imgName}.png`)}
                alt={''}/>)}
        </div>
    );
};
