import {DefaultGame} from '@custom-types';

export const calculateGameTime = (gameTime:DefaultGame['gameTime'], needCountdown = false) => {
    const {start, end} = gameTime;
    const calculatedGameTime = Math.round((end - start) / 1000);

    return needCountdown
        ? calculatedGameTime - 4
        : calculatedGameTime;
};