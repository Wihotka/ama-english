import {savingData} from '@global-config/game';

import {SaveGameFormDataT} from '@lib/api-connector';

export type SavingGameP = {
    isSubscribed:boolean;
    formData:SaveGameFormDataT;
    moveToHomework:() => void;
    setDataSavingStatus:(status:savingData) => void;
};
