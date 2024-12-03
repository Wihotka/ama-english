import {ItsMatch_GamePlayData, OnSelectOptionT} from './../type';

export const onSelectOption:OnSelectOptionT = (props) => {
    const {variant, changeGPDOnline} = props;

    if (!variant) return;

    changeGPDOnline<ItsMatch_GamePlayData>({
        selectedVariant: {
            answer: variant,
            isCorrect: null
        },
        isActiveVerification: true
    });
};