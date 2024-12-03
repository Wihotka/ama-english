import {StarsRequirementsCb} from '@custom-types/game';
import {SecretCodeGameT} from '../../../type';

export const getStarsRequirements:StarsRequirementsCb<SecretCodeGameT> = ({
    gameData,
}) => {
    const {} = gameData;

    /* Todo: потом поменять */
    return [
        {
            rightAnswersQty: 3,
        },
        {
            rightAnswersQty: 2,
        },
        {
            rightAnswersQty: 1,
        },
    ];
};
