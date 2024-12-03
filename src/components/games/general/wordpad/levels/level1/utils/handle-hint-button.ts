import {handleHintButtonT} from '../type';
import {clearAllGameTimeoutInterval, setGameInterval} from 'amakids-games-utils-and-generations/lib/utils';

export const handleHintButton:handleHintButtonT = (props) => {
    const {words, currentWordIndex, speakTexts, changeGPDOnline} = props;
    const currentWord = words[currentWordIndex].word;
    let i = 0;

    clearAllGameTimeoutInterval();

    changeGPDOnline({isHintButtonPressed: true});
    const returnUnpressedState = () => changeGPDOnline({isHintButtonPressed: false});

    setGameInterval( () => {
        if (i < currentWord.length) {
            speakTexts({
                text: currentWord[i],
                type: 'letter'
            });

            i++;
        } else {
            returnUnpressedState();
        }
    }, 1000);
};
