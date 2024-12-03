import {ClickItEasy_GamePlayData, handleKeyButtonT, keyActions} from '../type';

export const handleKeyButton:handleKeyButtonT = (props) => {
    const {
        word,
        index,
        action,
        sentences,
        mistakeQty,
        missingWords,
        typedSentence,
        changeGPDOnline,
        isInputFieldFull,
        isMissedFieldFull,
        setInputSelectionCB,
        currentSentenceIndex
    } = props;

    type P = ClickItEasy_GamePlayData;

    if (action === keyActions.add) {
        if (mistakeQty === 2) {
            let firstEmptySlotIndex:number | null;

            for (let i = 0; i < missingWords.length; i++) {
                if (missingWords[i].word === '  ') {
                    firstEmptySlotIndex = i;
                    break;
                }
            }

            changeGPDOnline<P>({
                missingWords: !isMissedFieldFull
                    ? missingWords.map((curWord, curIndex) =>
                        curIndex === firstEmptySlotIndex ? {id: index, word} : {word: curWord.word, id: curWord.id}
                    ) : missingWords
            });
        } else {
            changeGPDOnline<P>({typedSentence: !isInputFieldFull ? [...typedSentence, {id: index, word}] : typedSentence});
        }
    } else if (action === keyActions.delete) {
        mistakeQty === 2
            ? changeGPDOnline<P>( {
                missingWords: missingWords.map(curWord => curWord.id === index
                    ? {id: undefined, word: '  '}
                    : {id: curWord.id, word: curWord.word}
                )
            })
            : changeGPDOnline<P>({typedSentence: typedSentence.filter(curWord => curWord.id !== index)});
    } else if (action === keyActions.compare) {
        const candidate = typedSentence.map(word => word.word).join(' ');
        const pattern = sentences[currentSentenceIndex].sentence;
        const isCorrectAnswer = candidate === pattern;

        setInputSelectionCB(isCorrectAnswer ? 'success' : 'error');
    }
};