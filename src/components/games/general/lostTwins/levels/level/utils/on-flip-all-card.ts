import {LostTwins_GamePlayData, OnFlipAllCardT} from './../type';

export const onFlipAllCard:OnFlipAllCardT = (params) => {
    const {changeGPDOnline} = params;

    changeGPDOnline<LostTwins_GamePlayData>({
        isAllFlipCard: true
    });
};