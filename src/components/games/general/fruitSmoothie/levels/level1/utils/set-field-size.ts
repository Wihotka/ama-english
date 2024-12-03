import {FruitsSmoothie_GamePlayData, SetFieldSizeT} from './../type';

export const setFieldSize:SetFieldSizeT = (params) => {
    const {field, changeGPDOnline} = params;

    if (!field.current) return;

    const computedStyle = getComputedStyle(field.current);

    changeGPDOnline<FruitsSmoothie_GamePlayData>({
        fieldSize: {
            widthField: field.current.clientWidth,
            heightField: field.current.clientHeight - parseFloat(computedStyle.paddingTop)
        }
    });
};