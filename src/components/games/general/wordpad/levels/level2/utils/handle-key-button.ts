import {handleKeyButtonT} from '../type';

export const handleKeyButton:handleKeyButtonT = ({letter, setPressedKeyCB}) => {
    // @ts-ignore
    document.activeElement.blur();
    setPressedKeyCB(letter);
};