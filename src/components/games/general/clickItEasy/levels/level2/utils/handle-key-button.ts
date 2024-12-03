import {handleKeyButtonT} from '../type';

export const handleKeyButton:handleKeyButtonT = (props) => {
    const {
        word,
        index,
        sentences,
        typedSentence,
        normalSentences,
        changeGPDOnline,
        setInputSelectionCB,
        currentSentenceIndex,
        mistakeQty
    } = props;

    const isRightWord = word === normalSentences[currentSentenceIndex][typedSentence.length];

    changeGPDOnline({
        typedSentence: isRightWord ? [...typedSentence, {id: index, word}] : typedSentence,
        pressedKeyIndex: index,
        mistakeQty: isRightWord ? mistakeQty : mistakeQty + 1
    });

    !isRightWord ? setInputSelectionCB('error') : null;

    typedSentence.map(word => word.word).concat(word).join(' ') === sentences[currentSentenceIndex].sentence ? setInputSelectionCB('success') : null;
};