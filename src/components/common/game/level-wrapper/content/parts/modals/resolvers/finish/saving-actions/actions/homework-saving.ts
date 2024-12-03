import {isEmpty} from 'lodash';

import {ApiConnector, SaveHomeworkGameResp} from '@lib/api-connector';
import {savingData} from '@global-config/game';

import {setIsDisabledStartBtn} from '@reducers/game/dispatchers';
import {setHomeworkGameStatus} from '@reducers/homework-game-status/dispatchers';

import {runSendingRequest} from '../run-sending-request';
import {SavingGameP} from '../types';

import {HomeworkGameStatusE} from '@custom-types';

export const homeworkAction = (p:SavingGameP) => {
    const {isSubscribed, formData, setDataSavingStatus, moveToHomework} = p;
    let isDisableButton = false;

    const cb = (data:SaveHomeworkGameResp) => {
        if (isSubscribed && !isEmpty(data)) {
            const {action = ''} = data.homeworkProgressSaverResponse || {};

            if (action === 'room_done' || action === 'round_done') {
                isDisableButton = true;
                setTimeout(() => moveToHomework(), 2000);
            }
            
            const homeworkGameStatus = action
                ? finBtnStatusResolver[action]
                : HomeworkGameStatusE.levelNotDone;

            setHomeworkGameStatus(homeworkGameStatus);
            setIsDisabledStartBtn(isDisableButton);
            setDataSavingStatus(savingData.successSave);
        }
    };

    runSendingRequest(() => ApiConnector.saveHomeworkGame(formData), cb, setDataSavingStatus);
};

const finBtnStatusResolver = {
    round_done: HomeworkGameStatusE.roundDone,
    unlocked_new_element: HomeworkGameStatusE.levelDone,
    room_done: HomeworkGameStatusE.roundDone
};