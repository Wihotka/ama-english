import {updateTypedSentenceT} from '../type';

export const updateTypedSentence:updateTypedSentenceT = (props) => {
    const {normalSentences, currentSentenceIndex, typedSentence, changeGPDOnline} = props;
    const pattern = normalSentences[currentSentenceIndex];

    const emptyPartIndexes:Array<number> = [];
    const partialSentence = typedSentence.map((word, index) =>
        word.word !== pattern[index] ? {word: '  ', id: undefined} : {word: pattern[index], id: word.id});

    for (let i = 0; i < partialSentence.length; i++) partialSentence[i].word === '  ' ? emptyPartIndexes.push(i) : null;

    changeGPDOnline({
        typedSentence: partialSentence,
        emptyPartIndexes,
        missingWords: Array(emptyPartIndexes.length).fill({id: undefined, word: '  '})
    });
};