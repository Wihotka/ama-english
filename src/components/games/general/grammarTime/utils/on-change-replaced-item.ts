import {GrammarTime_GamePlayData_Common, OnChangeReplacedItemP} from '../type';

export const onChangeReplacedItem = ({
    el,
    changeGPDOnline,
}:OnChangeReplacedItemP) => {
    changeGPDOnline<GrammarTime_GamePlayData_Common>({
        elementToBeReplaced: el,
    });
};
