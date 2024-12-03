import {random} from 'lodash';

import {mapCentralPositionCard} from './../lw-props/generate-game-data/maps';

import {onFinalPositionT, PowerCouple_GamePlayData} from './../type';

export const onCentralPositionCards:onFinalPositionT = (params) => {
    const {changeGPDOnline} = params;

    const randomMap = random(1, 4);

    const map = Object.values((mapCentralPositionCard)[randomMap]);

    changeGPDOnline<PowerCouple_GamePlayData>({
        gridSelectMap: map
    });
};