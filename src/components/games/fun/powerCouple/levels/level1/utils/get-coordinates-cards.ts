import {GetCoordinatesCardsT} from './../type';

export const getCoordinatesCards:GetCoordinatesCardsT = (params) => {
    const {mainField, selectCards} = params;
    const indexCards:Array<[grid:number, line:number, indexCard:number]> = [];

    [...mainField].forEach((field, numberField) =>
        field.forEach((line, indexLine) =>
            line.forEach((card, indexCard) => {
                if (card?.id === selectCards.first?.id || card?.id === selectCards.second?.id) {
                    indexCards.push([numberField, indexLine, indexCard]);
                }
            })
        ));

    return indexCards;
};