import {GuessTheSoundL1_GamePlayData, OnVoicePlayT} from './../type';

export const onVoicePlay:OnVoicePlayT = (props) => {
    const {field, sound, speakTexts, changeGPDOnline} = props;

    changeGPDOnline<GuessTheSoundL1_GamePlayData>({
        isVoicePlay: {
            transcription: sound,
            isPlay: true,
            typeCallField: field
        }
    });

    const offPlay = () => {
        changeGPDOnline<GuessTheSoundL1_GamePlayData>({
            isVoicePlay: {
                transcription: null,
                isPlay: false,
                typeCallField: null
            }
        });
    };

    speakTexts({
        text: sound,
        onFinishPlaying: offPlay
    });
};