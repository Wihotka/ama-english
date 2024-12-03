import {handleCardT} from './../type';
import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

export const handleCard:handleCardT = (props) => {
    const {id, index, answerQty, changeGPDOnline, currentOptionIndex} = props;

    const isCorrectNextNumber = id === answerQty + 1;

    changeGPDOnline({
        isModalShowed: isCorrectNextNumber,
        currentOptionIndex: isCorrectNextNumber ? index : currentOptionIndex,
        mistakeCardIndex: !isCorrectNextNumber ? index : NaN
    });

    !isCorrectNextNumber ? setGameTimeout(() => changeGPDOnline({mistakeCardIndex: NaN}), 300) : null;
};