import {handleSwitchT} from './../type';

export const handleSwitch:handleSwitchT = (props) => {
    const {changeGPDOnline, currentSentenceIndex, isTheLastSentence, initFinishPlaying, setIsFieldUpdated} = props;

    const nextSentence = () => {
        setIsFieldUpdated(true);
        setTimeout(() => setIsFieldUpdated(false), 1000);
    };

    nextSentence();

    const updateField = () => {
        changeGPDOnline({currentSentenceIndex: currentSentenceIndex + 1});
        initFinishPlaying();
    };

    const finishGame = () => {
        changeGPDOnline({
            timer: 10,
            isMandatoryTime: true,
            isDetailsShowed: false
        });

        setTimeout(() => {
            changeGPDOnline({currentSentenceIndex: currentSentenceIndex + 1});
        }, 300);
    };

    isTheLastSentence ? updateField() : finishGame();
};