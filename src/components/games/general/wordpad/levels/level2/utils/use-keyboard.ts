import {useEffect} from 'react';

import {useKeyboardT} from '../type';

export const useKeyboard:useKeyboardT = (props) => {
    const {typedWord, isTimerBegan, setPressedKeyCB} = props;

    const getListener = (event:KeyboardEvent) => {
        // Разрешаем только англ. раскладку Backspace & Enter
        if (
            event.code.slice(-1).toLowerCase() === event.key.toLowerCase()
            || event.code === event.key
        ) {
            event.code.includes('Key') ? setPressedKeyCB(event.code) : null;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', getListener);

        return () => document.removeEventListener('keydown', getListener);
    }, [typedWord, isTimerBegan]);
};