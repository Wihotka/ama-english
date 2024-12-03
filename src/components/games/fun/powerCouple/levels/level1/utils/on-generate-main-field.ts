import {MainField, OnGenerateMainFieldT} from './../type';

export const onGenerateMainField:OnGenerateMainFieldT = (params) => {
    const {gridSelectMap, cards} = params;
    const variants = [...cards];

    const gridMap:MainField = Array.from({length: gridSelectMap.length},
        () => Array.from({length: 6},
            () => Array.from({length: 12})
        ));

    for (let field = 0; field < gridSelectMap.length; field++) {
        for (let line = 0; line < gridSelectMap[field].length; line++) {
            for (let item = 0; item < gridSelectMap[field][line].length; item++) {
                const cell = gridSelectMap[field][line][item];

                if (!cell) break;

                gridMap[field][line][cell] = variants.shift();
            }
        }
    }

    return gridMap;
};