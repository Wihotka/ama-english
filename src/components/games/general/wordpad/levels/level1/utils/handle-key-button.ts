import {handleKeyButtonT} from '../type';

export const handleKeyButton:handleKeyButtonT = ({letter, setInputValueCB}) => {
    // @ts-ignore
    document.activeElement.blur();
    setInputValueCB(letter);
};