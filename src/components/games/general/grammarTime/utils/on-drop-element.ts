import {GrammarTime_GamePlayData_Common, OnDropElementP} from '../type';

export const onDropElement = ({
    el,
    index,
    replaceIndex,
    userElements,
    elementToBeReplaced,
    changeGPDOnline,
}:OnDropElementP) => {
    const copy = [...userElements];

    copy[index] = el;

    // any number except -1 is truthy
    if (~replaceIndex) {
        copy[replaceIndex] = elementToBeReplaced;
    }

    changeGPDOnline<GrammarTime_GamePlayData_Common>({
        userElements: copy,
        elementToBeReplaced: null,
    });
};
