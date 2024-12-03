import {ProgressPercentCB} from '@custom-types';
import {PowerCoupleL1T} from './../type';

export const calcProgressPercent:ProgressPercentCB<PowerCoupleL1T> = ({gamePlayData}) => {
    const {cards, maxCardsQty} = gamePlayData;

    const deleteCardsQty = maxCardsQty - cards.length;

    return deleteCardsQty === 0 ? 0 : (deleteCardsQty / maxCardsQty) * 100;
};