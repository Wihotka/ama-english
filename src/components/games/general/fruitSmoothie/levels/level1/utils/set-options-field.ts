import {FruitsSmoothie_GamePlayData, SetOptionFieldT} from './../type';

export const setOptionsField:SetOptionFieldT = (params) => {
    const {optionsRef, changeGPDOnline} = params;

    if (optionsRef.length === 0) return;

    const sizeOptionField = optionsRef.map(option => {
        if (!option.current) return {heightField: 0, widthField: 0};

        return {
            heightField: option.current.clientHeight,
            widthField: option.current.clientWidth
        };
    });

    changeGPDOnline<FruitsSmoothie_GamePlayData>({
        optionsFieldSize: sizeOptionField
    });
};