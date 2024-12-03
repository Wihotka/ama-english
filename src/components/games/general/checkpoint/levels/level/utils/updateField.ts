import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {updateFieldT} from './../type';

export const updateField:updateFieldT = (props) => {
    const {options, answerQty, changeGPDOnline, initFinishPlaying} = props;

    changeGPDOnline({
        mistakeQty: 0,
        isModalShowed: false,
        answerQty: answerQty + 1
    });

    setGameTimeout(() => {
        answerQty === options.length - 1
            ? initFinishPlaying()
            : changeGPDOnline(
                {inputValue: '', answerStatus: ''
                });
    }, 1000);
};