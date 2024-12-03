import {setInputSelectionT} from '../type';

export const setInputSelection:setInputSelectionT = (props) => {
    const {type, updateFieldCB, changeGPDOnline, answerQty} = props;

    changeGPDOnline({selectionType: type, answerQty: type === 'success' ? answerQty + 1 : answerQty});

    type === 'success' ? setTimeout(updateFieldCB, 500) : null;
};