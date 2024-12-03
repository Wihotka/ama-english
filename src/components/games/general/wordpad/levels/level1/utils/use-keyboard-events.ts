import {useEffect} from 'react';

import {useKeyboardEventsT} from '../type';

export const useKeyboardEvents:useKeyboardEventsT = (props) => {
    const {typedWord, setInputValueCB, changeGPDOnline, isInputFieldFull} = props;

    const getListener = (event:KeyboardEvent) => {
        // Разрешаем только англ. раскладку Backspace & Enter
        if (
            event.code.slice(-1).toLowerCase() === event.key.toLowerCase()
            || event.code === event.key
        ) {
            changeGPDOnline({isInputFieldFull});
            setInputValueCB(event.code);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', getListener);

        return () => document.removeEventListener('keydown', getListener);
    }, [typedWord]);
};