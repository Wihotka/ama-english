import {handlePlayButtonT} from '../type';

export const handlePlayButton:handlePlayButtonT = (props) => {
    const {words, currentWordIndex, speakTexts, changeGPDOnline} = props;

    const currentWord = words[currentWordIndex].word;
    const currentSound = words[currentWordIndex].soundUrl;

    changeGPDOnline({isPlayButtonPressed: true,});

    const returnUnpressedState = () => changeGPDOnline({isPlayButtonPressed: false});

    speakTexts({text: currentWord, path: currentSound, onFinishPlaying: returnUnpressedState});
};