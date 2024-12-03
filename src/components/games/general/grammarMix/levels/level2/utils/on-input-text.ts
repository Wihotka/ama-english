import {GrammarMix_GamePlayData, OnInputTextT} from './../type';

export const onInputText:OnInputTextT = (params) => {
    const {text, changeGPDOnline} = params;

    const textTransform = text === '' ? text : text[0].toUpperCase() + text.slice(1);

    if (textTransform === '' || RegExp(/^[A-Za-z- ']+$/).test(textTransform)) {
        changeGPDOnline<GrammarMix_GamePlayData>({
            inputText: textTransform
        });
    }
};