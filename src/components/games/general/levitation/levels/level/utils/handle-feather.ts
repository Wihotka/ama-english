import {updateField} from './update-field';
import {getSecondTry} from './get-second-try';

import {handleFeatherP} from '../type';

export const handleFeather = (props:handleFeatherP) => {
    const {index, changeGPDOnline, initFinishPlaying, gameData, gamePlayData, gameSettings} = props;
    const {mistakeQty} = gamePlayData;
    const {speed} = gameSettings;
    const {words} = gameData;

    const isCorrectFeather = !index;
    const isHasMistake = mistakeQty > 0;

    isCorrectFeather || !isCorrectFeather && isHasMistake
        ? updateField({gamePlayData, changeGPDOnline, speed, index, words, isCorrectFeather, isHasMistake, initFinishPlaying})
        : getSecondTry({gamePlayData, changeGPDOnline, index});
};