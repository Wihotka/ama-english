import {TimelineL1_GamePlayData, OnSelectOptionT} from './../type';

export const onSelectOption:OnSelectOptionT = (props) => {
    const {variant, changeGPDOnline} = props;

    if (!variant) return;

    changeGPDOnline<TimelineL1_GamePlayData>({
        selectedVariant: {
            answer: variant,
            isCorrect: null
        },
        isActiveVerification: true
    });
};