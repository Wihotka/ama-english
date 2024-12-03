import {OnInputTextT, PhraseJumping_GamePlayData} from './../type';

export const onInputText:OnInputTextT = (params) => {
    const {text, changeGPDOnline} = params;

    const textTransform = text === '' ? text : text[0].toUpperCase() + text.slice(1);

    if (textTransform === '' || !RegExp((/[^a-zA-Z0-9\- ']/)).test(textTransform)) {
        changeGPDOnline<PhraseJumping_GamePlayData>({
            inputText: textTransform,
            isBtnDisabled: false,
        });
    }
};