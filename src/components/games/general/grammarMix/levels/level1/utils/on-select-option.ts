import {GrammarMix_GamePlayData, OnSelectOptionT} from './../type';

export const onSelectOption:OnSelectOptionT = (params) => {
    const {option, changeGPDOnline} = params;

    changeGPDOnline<GrammarMix_GamePlayData>({
        selectOption: {
            option,
            isCorrect: null
        }
    });
};