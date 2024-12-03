import {ApiConnector, SaveGameResp} from '@lib/api-connector';
import {savingData} from '@global-config/game';

import {setIsDisabledStartBtn} from '@reducers/game/dispatchers';

import {runSendingRequest} from '../run-sending-request';
import {SavingGameP} from '../types';

export const classroomAction = (p:SavingGameP) => {
    const {isSubscribed, formData, setDataSavingStatus} = p;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {hometaskId, ...otherFormData} = formData;

    const cb = (data:SaveGameResp) => {
        if (isSubscribed) {
            const savingStatus = data ? savingData.failSave : savingData.successSave;

            setIsDisabledStartBtn(false);
            setDataSavingStatus(savingStatus);
        }
    };

    runSendingRequest(() => ApiConnector.saveGame(otherFormData), cb, setDataSavingStatus);
};