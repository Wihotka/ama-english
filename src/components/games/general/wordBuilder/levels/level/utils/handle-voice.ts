import {handleVoiceCBP} from '../type';

// handler of click on the voice button -> return previous unpressed state
export const handleVoiceCB = ({gamePlayData, speakTexts, changeGPDOnline, gameData}:handleVoiceCBP):void => {
    const {words} = gameData;
    const {currentWordIndex} = gamePlayData;

    changeGPDOnline({
        isVoiceButtonPressed: true,
    });

    const returnUnpressedState = () =>
        changeGPDOnline({
            isVoiceButtonPressed: false,
        });

    speakTexts({
        text: words[currentWordIndex].word,
        path: words[currentWordIndex].soundUrl,
        onFinishPlaying: returnUnpressedState
    });
};