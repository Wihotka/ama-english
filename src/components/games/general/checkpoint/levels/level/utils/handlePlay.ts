import {handlePlayT} from './../type';

export const handlePlay:handlePlayT = (props) => {
    const {options, speakTexts, changeGPDOnline, currentOptionIndex} = props;
    const currentWord = options[currentOptionIndex].word;
    const currentSound = options[currentOptionIndex].sound;

    changeGPDOnline({isPlayButtonPressed: true});
    const returnUnpressedState = () => changeGPDOnline({isPlayButtonPressed: false});

    speakTexts({
        text: currentWord ?? '',
        path: currentSound,
        onFinishPlaying: returnUnpressedState
    });
};