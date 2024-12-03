import {getSecondTryP} from '../type';

export const getSecondTry = (props:getSecondTryP) => {
    const {gamePlayData, changeGPDOnline, index} = props;
    const {mistakeQty, errorPressedIndexes} = gamePlayData;

    changeGPDOnline({
        isFeatherPressed: true,
        mistakeQty: mistakeQty + 1,
        errorPressedIndexes: [...errorPressedIndexes, index]
    });

    setTimeout(() => {
        changeGPDOnline({
            isFeatherPressed: false,
            errorPressedIndexes: []
        });
    }, 500);
};