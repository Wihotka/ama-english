import {handlePlayT, soundMode} from './../type';
import {changeGPDOnline} from '@lib/game/actions';

export const handlePlay:handlePlayT = (props) => {
    const {mode, sentences, speakTexts, playbackRate, currentSentenceIndex} = props;
    const currentSentence = sentences[currentSentenceIndex];

    changeGPDOnline({isSoundPlaying: true, mode});

    speakTexts({
        type: 'sentence',
        text: currentSentence.id,
        playbackRate: mode === soundMode.slowly ? playbackRate : 1,
        onFinishPlaying: () => changeGPDOnline({isSoundPlaying: false, mode: soundMode.empty})
    });
};