import {GenerateAGPD} from '@custom-types';
import {MemoryBoardGameT} from '../type';

type Data = {
    words:any[];
    cardsData:any[];
};

export const generateGPD:GenerateAGPD<MemoryBoardGameT> = (props) => {
    const {gameData} = props;
    const {cardsData}:Data = gameData.game as any;

    return {
        cards: cardsData,
        isAllFlipCard: false,
        secondsNowGame: 0,
        selectedCard: {
            first: null,
            second: null
        }
    };
};