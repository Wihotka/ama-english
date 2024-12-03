import {concat} from 'lodash';

import {handleInputT} from './../type';

export const handleInput:handleInputT = (props) => {
    const {e, keyboard, changeGPDOnline} = props;

    const currentValue = e.target.value.replace(/\s+/g, ' ').trimStart();
    const lastIndex = currentValue.length - 1;
    const currentLetter = currentValue[lastIndex];

    const specialSymbols = [' ', '.', '\'', '?', '!', '-'];
    const upperKeyboard = keyboard.map(letter => letter.toUpperCase());
    const availableSymbols = concat(keyboard, upperKeyboard, specialSymbols);

    const isAvailableSymbol = availableSymbols.includes(currentLetter);

    const validatedInputValue = currentValue.slice(0, 1).toUpperCase() + currentValue.slice(1, currentValue.length);

    changeGPDOnline({inputValue: isAvailableSymbol ? validatedInputValue : currentValue.slice(0, lastIndex)});
};