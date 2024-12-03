import {OnOpenHintT, PhraseJumping_GamePlayData} from './../type';

export const onOpenHint:OnOpenHintT = (params) => {
    const {changeGPDOnline} = params;

    changeGPDOnline<PhraseJumping_GamePlayData>({
        isOpenHint: true,
    });
};