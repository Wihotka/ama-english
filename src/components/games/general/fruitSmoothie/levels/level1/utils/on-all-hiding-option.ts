import {FruitsSmoothie_GamePlayData, OnHidingOptionT} from './../type';

export const onAllHidingOption:OnHidingOptionT = (params) => {
    const {changeGPDOnline} = params;

    changeGPDOnline<FruitsSmoothie_GamePlayData>({
        isHidingOption: true
    });
};