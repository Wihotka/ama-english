import {setInputSelectionT} from '../type';

export const setInputSelection:setInputSelectionT = (props) => {
    const {type, answerQty, updateFieldCB, changeGPDOnline} = props;

    const userTypedCorrectWord = () => {
        changeGPDOnline({answerQty: answerQty + 1});
        updateFieldCB();
    };

    changeGPDOnline({selectionType: type});

    setTimeout(type === 'success' ? userTypedCorrectWord : () => null, 500);
};