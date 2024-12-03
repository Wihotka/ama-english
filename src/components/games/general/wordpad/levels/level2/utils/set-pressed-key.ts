import {setPressedKeyT} from '../type';

export const setPressedKey:setPressedKeyT = (props):void => {
    const {code, isKeyPressed, removedKeys, isTimerBegan, changeGPDOnline} = props;
    const typedLetter = code.slice(-1).toLowerCase();

    if (isTimerBegan) {
        !removedKeys.includes(typedLetter) ? changeGPDOnline({pressedKey: typedLetter, isKeyPressed: !isKeyPressed}) : null;

        // return unpressed state
        setTimeout(() => changeGPDOnline({pressedKey: ''}), 100);
    }
};