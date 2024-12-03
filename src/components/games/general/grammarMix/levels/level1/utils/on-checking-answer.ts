import {GrammarMix_GamePlayData, OnCheckingAnswerT} from './../type';

export const onCheckingAnswer:OnCheckingAnswerT = (params) => {
    const {selectOption, correctAnswer, correctAnswerQty, changeGPDOnline} = params;

    if (!selectOption.option) return;

    if (selectOption.option.content === correctAnswer) {
        changeGPDOnline<GrammarMix_GamePlayData>({
            selectOption: {
                ...selectOption,
                isCorrect: true
            },
            correctAnswerQty: correctAnswerQty + 1
        });
    } else {
        changeGPDOnline<GrammarMix_GamePlayData>({
            selectOption: {
                ...selectOption,
                isCorrect: false
            }
        });
    }
};