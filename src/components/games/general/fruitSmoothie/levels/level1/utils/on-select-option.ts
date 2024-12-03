import {FruitsSmoothie_GamePlayData, OnSelectOptionT} from './../type';

export const onSelectOption:OnSelectOptionT = (params) => {
    const {selectOption, options, time, actualAttemptsQty, changeGPDOnline} = params;

    changeGPDOnline<FruitsSmoothie_GamePlayData>({
        selectOptions: selectOption,
        options: options.map(option => (option.id === selectOption.id ? {
            ...option,
            isSelect: true,
            isDisabled: true
        } : selectOption.isCorrect ? {...option, isDisabled: true} : option)),
        timeToClick: time,
        actualAttemptsQty: actualAttemptsQty + 1,
        isCorrect: selectOption.isCorrect
    });
};