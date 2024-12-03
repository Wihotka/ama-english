import {StartPlayingCB} from '@custom-types';
import {SomeGameNameGameT} from '../type';

export const startPlaying:StartPlayingCB<SomeGameNameGameT> = ({gameData, gameSettings, gameConfig}) => {
    const clicksQty = 0;

    console.log('gameData', gameData, gameConfig, gameSettings);

    return {
        clicksQty,
        counter: 0
    };
};