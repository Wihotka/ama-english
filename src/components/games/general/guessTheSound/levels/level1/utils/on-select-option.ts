import {GuessTheSoundL1_GamePlayData, OnSelectOptionT} from './../type';

export const onSelectOption:OnSelectOptionT = (props) => {
    const {variant, changeGPDOnline} = props;

    if (!variant) return;

    changeGPDOnline<GuessTheSoundL1_GamePlayData>({
        selectedVariant: {
            answer: variant.selectedTranscription,
            isCorrect: null
        },
        isActiveVerification: true
    });
};