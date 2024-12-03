import {StarsRequirementsCb} from '@custom-types';
import {SomeGameNameGameT} from '../type';

export const getStarsRequirements:StarsRequirementsCb<SomeGameNameGameT> = ({gameData}) => {
    const {answersQty} = gameData;

    return [
        {
            rightAnswersQty: answersQty + 2,
            gameTime: 30,
            maxErrors: 4
        },
        {
            rightAnswersQty: answersQty + 3,
            maxErrors: 4
        },
        {
            rightAnswersQty: answersQty,

        }
    ];
};