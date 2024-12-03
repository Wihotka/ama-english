import React from 'react';
// import {useWindowDimensions} from '@lib/custom-hooks';

import {BottomButtons} from './parts';

import {DefaultGame} from '@custom-types';
import {useNeedShowGameBurger} from '@lib/custom-hooks';

type P = {
    gameStatus:DefaultGame['status'];
    isHomework:boolean;
};

// (ширина <= 534)
// если мы находимся в горизонте и ширина <= 854 и высота <= 600
// показываем бургер

export const BottomNavigation = ({gameStatus, isHomework}:P) => {
    const {isPlaying} = gameStatus;

    const needShowGameBurger = useNeedShowGameBurger();

    // const {width} = useWindowDimensions();
    //
    if (isPlaying && needShowGameBurger) {
        return null;
        // return <Burger/>;
    }

    return <BottomButtons gameStatus={gameStatus} isHomework={isHomework}/>;
};