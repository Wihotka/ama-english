import {savingData} from '@global-config/game';
import {SavingGameP} from '@components/common/game/level-wrapper/content/parts/modals/resolvers/finish/saving-actions/types';

export const runSendingRequest = <T>(action:() => Promise<T>, callBack:(data:T) => void, setDataSavingStatus:SavingGameP['setDataSavingStatus'], tryesQty = 0) => {
    action().then((data) => callBack(data)).catch((e) => {
        console.warn(e);

        if (tryesQty < 3) {
            setTimeout(() => {
                runSendingRequest(action, callBack, setDataSavingStatus, tryesQty + 1);
            }, 1000);
        } else {
            setDataSavingStatus(savingData.failSave);
        }
    });
};