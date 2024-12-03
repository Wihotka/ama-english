import {GameMode} from '@custom-types';

export const globalGameConfig = {
    fieldHeight: 776,
    fieldWidth: 1078,
    valuesThresholds: [50, 70, 90], // >= 50 = одна звезда. >=70 = две. >= 90 три,
    maxStarsQty: 3,
    startAnimationDuration: 500,
    gamesTriesToShowFeedbackWindow: 3 - 1, // счетчик начинается с 0, поэтому если 3 попытки то высчитывается 3-1
    gamesModeToIncrementTriesToShowFeedbackWindow: [GameMode.free],
    platformEntriesToShowFeedbackWindow: 5 - 1, // счетчик начинается с 0, поэтому если 5 попыток то высчитывается 5-1
    feedbackGamesCookieLifeTimeInSec: 1 * 24 * 60 * 60, // Одни сутки
    feedbackPlatformCookieLifeTimeInSec: 10 * 24 * 60 * 60 // 10 суток
};

export enum savingData {
    saving = 'saving',
    failSave = 'failSave',
    successSave = 'successSave'
}

export const bottomPanelButtonsId = 'bottomButton';