import {GetFinModalIndicators} from '@custom-types';
import {WordSaladGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<WordSaladGameT> = ({gamePlayData}) => {
    const {selectedWords} = gamePlayData;

    const reducer = (previousValue:number, currentValue:{ word:string, scores:number }) => previousValue + currentValue.scores;

    return {
        rightAnswersQty: selectedWords.length,
        pointsQty: selectedWords.reduce(reducer, 0)
    };
};
