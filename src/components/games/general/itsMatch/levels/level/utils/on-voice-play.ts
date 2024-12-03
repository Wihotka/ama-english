import {ItsMatch_GamePlayData, OnVoicePlayT} from './../type';

export const onVoicePlay:OnVoicePlayT = (props) => {
    const {field, variant, speakTexts, changeGPDOnline} = props;

    const transcription = variant.word;

    console.log(variant.word);
    changeGPDOnline<ItsMatch_GamePlayData>({
        isVoicePlay: {
            variant: variant,
            isPlay: true,
            typeCallField: field
        }
    });

    const offPlay = () => {

        changeGPDOnline<ItsMatch_GamePlayData>({
            isVoicePlay: {
                variant: null,
                isPlay: false,
                typeCallField: null
            }
        });
    };

    console.log(transcription);
    speakTexts({
        text: variant.word,
        path: variant.soundUrl,
        onFinishPlaying: offPlay
    });
};