import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import {FruitsSmoothie_GamePlayData, OnAllDisabledOptionT} from '../type';

export const onAllDisabledOption:OnAllDisabledOptionT = (params) => {
    const {options, maxAttemptsQty, actualAttemptsQty, selectOptions, changeGPDOnline} = params;

    if (actualAttemptsQty === maxAttemptsQty) {
        changeGPDOnline<FruitsSmoothie_GamePlayData>({
            options: options.map(option => ({...option, isDisabled: true})),
        });

        if (!selectOptions?.isCorrect) {
            setGameTimeout(() => {
                changeGPDOnline<FruitsSmoothie_GamePlayData>({
                    isHidingOption: true
                });
            }, 500);
        }
    }
};