import {StartPlayingCB} from '@custom-types';
import {PhraseJumpingGameT} from '@components/games/general/phraseJumping/levels/level1/type';

export const startPlaying:StartPlayingCB<PhraseJumpingGameT> = ({gameData, gameSettings}) => {
    const {variants} = gameData;
    const {hint} = gameSettings;
    const {question, correctAnswers, punctuationMark, typePrompt} = variants[0];

    return {
        question,
        correctAnswers,
        punctuationMark,

        hintType: typePrompt,

        inputText: '',

        iteration: 0,
        numberAttempts: 0,
        correctAnswerQty: {firstTry: 0, secondTry: 0},

        isFieldUpdate: false,
        isCorrectAnswer: null,
        isHint: !!hint,
        isOpenHint: false,
        isBtnDisabled: true,
    };
};