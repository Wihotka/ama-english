import {StartPlayingCB} from '@custom-types/game';
import {StorytellerGameT, Storyteller_UserAnswer} from '../../../type';

export const startPlaying:StartPlayingCB<StorytellerGameT> = ({
    gameData,
}) => {
    const {gameText} = gameData;
    const userAnswers = new Array<Storyteller_UserAnswer>(6).fill(null);

    return {
        currentQuestion: 0,
        userAnswers: userAnswers,
        storyText: gameText,
        isCompleted: false,
    };
};
