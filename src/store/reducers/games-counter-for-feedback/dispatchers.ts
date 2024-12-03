import {bindActions} from '../utils';
import {actions} from './reducer';

export const {
    incrementGamesCounterForFeedback,
    resetGamesCounterForFeedback,
    excludeGameForFeedback,
    incrementPlatformCounterForFeedback,
    resetPlatformCounterForFeedback,
    excludePlatformForFeedback
} = bindActions(actions);
