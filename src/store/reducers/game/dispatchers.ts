import {bindActions} from '../utils';
import {actions} from './reducer';

export const {
    addGameData,
    changeGameSettingsAndConfig,
    deleteAllGameData,
    deleteGameData,
    runGame,
    startPlaying,
    runPlayingGame,
    finishPlaying,
    setIsDisabledStartBtn,
    changeGamePlayData,
    changeGameSettings
} = bindActions(actions);
