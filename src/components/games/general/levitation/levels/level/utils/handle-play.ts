import {handlePlayP} from '../type';

export const handlePlay = (props:handlePlayP) => {
    const {changeGPDOnline, speakTexts, gameData, gamePlayData, level} = props;
    const {words, rightIndexes} = gameData;
    const {currentWordIndex} = gamePlayData;

    changeGPDOnline({
        isPlayButtonPressed: true,
    });

    const returnUnpressedState = () => {
        changeGPDOnline({
            isPlayButtonPressed: false,
        });
    };

    const currentWord = words[currentWordIndex][0];

    const conditions = {
        text: level === 1
            ? currentWord.word
            : level === 2
                // @ts-ignore
                ? words[currentWordIndex].word
                // @ts-ignore
                : currentWord.dividedTranscription[rightIndexes[currentWordIndex][0]],
        path: level === 1
            ? currentWord.soundUrl
            : level === 2
                // @ts-ignore
                ? words[currentWordIndex].soundUrl
                : '',
        onFinishPlaying: returnUnpressedState
    };

    speakTexts(conditions);
};