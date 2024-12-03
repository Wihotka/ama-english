import {storyTitleResolver} from '../../../../config';
import {GenerateGDCB} from '@custom-types/game';
import {loadLocalGameData} from '@lib/game/utils';
import {StorytellerLocalData} from '@lib/game/utils/game-local-data-loader/types';
import {StorytellerGameT} from '../../../../type';

export const generateGameData:GenerateGDCB<StorytellerGameT> = async ({
    gameSettings,
}) => {
    const {storyType} = gameSettings;
    const storyTitle = storyTitleResolver[storyType];

    const {questions, storyText, imageBg}
        = await loadLocalGameData<StorytellerLocalData>(
            StorytellerLocalData[storyType]
        );

    return {
        gameQuestions: questions,
        gameText: storyText,
        imageBg,
        storyTitle,
    };
};
