import {PerfectPairs_GamePlayData, OnSelectOptionT} from './../type';

export const onSelectOption:OnSelectOptionT = (props) => {
    const {variant, changeGPDOnline} = props;

    if (!variant) return;

    changeGPDOnline<PerfectPairs_GamePlayData>({
        selectedVariant: {
            answer: variant,
            isCorrect: null
        },
        isActiveVerification: true
    });
};