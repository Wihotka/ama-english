import {handlePlaneT} from '../type';

export const handlePlane:handlePlaneT = (props) => {
    const {word, timer, mistakeQty, correctWords, fieldUpdateCB, changeGPDOnline, currentWordsIndex} = props;
    const isCorrectAnswer = correctWords[currentWordsIndex] === word;

    const userChoseWrongAnswer = () => {
        changeGPDOnline({
            timer: Math.floor(+timer * 1.5).toString(),
            candidateWord: '',
            correctWordStatus: '',
            mistakeQty: mistakeQty + 1
        });
    };

    changeGPDOnline({
        candidateWord: word,
        correctWordStatus: isCorrectAnswer ? 'success' : 'error',
    });

    isCorrectAnswer || mistakeQty > 0 && !isCorrectAnswer
        ? setTimeout(() => fieldUpdateCB(isCorrectAnswer), 500)
        : setTimeout(userChoseWrongAnswer, 500);
};