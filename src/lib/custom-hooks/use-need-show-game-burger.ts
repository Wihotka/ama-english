// (ширина <= 534)
// если мы находимся в горизонте и ширина <= 854 и высота <= 600
// показываем бургер

import {useWindowDimensions} from '@lib/custom-hooks/use-window-dimensions';

export const useNeedShowGameBurger = () => {
    const {width, height} = useWindowDimensions();

    // if (width <= 534) {
    if (width <= 600) {
        return true;
    }

    return width <= 854 && height < width && height <= 600;
};