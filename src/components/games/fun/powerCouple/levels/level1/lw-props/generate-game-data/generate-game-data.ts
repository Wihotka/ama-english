import {random, shuffle} from 'lodash';
import {loadLocalGameData} from '@lib/game/utils';
import {mapsField} from './maps';

import {GenerateGDCB} from '@custom-types';
import {PowerCoupleLocalDate} from '@lib/game/utils/game-local-data-loader/types';
import {CardI, DataI, FetchDataT, GenerateVariantsT, PowerCoupleL1T} from './../../type';

export const generateGameData:GenerateGDCB<PowerCoupleL1T> = async ({gameSettings}) => {
    const {theme, map} = gameSettings;

    const variants = await generateVariants({theme, map});

    return {
        map: mapsField[map],
        cards: variants,
    };
};

const fetchData:FetchDataT = async (params) => {
    const {theme, cardsQty} = params;

    const data = await loadLocalGameData(PowerCoupleLocalDate[theme]);

    let smiles:Array<DataI> = await loadLocalGameData(PowerCoupleLocalDate.smiles).then(data => data.map(data => ({
        id: 'smile_' + data.id,
        variants: [{content: '', imgPath: data.imagePath}, {content: '', imgPath: data.imagePath}]
    })));

    smiles = shuffle(smiles).slice(0, 15);
    const cards = [...data.slice(0, cardsQty / 4), ...smiles.slice(0, cardsQty / 4)];

    while (cards.length < cardsQty / 2) {
        cards.push(smiles[random(smiles.length - 1)]);
    }

    return shuffle(cards);
};

const onCardsQty = (numberMaps:number) => Object.values(mapsField[numberMaps])
    .flat(1)
    .reduce((acc, line) => acc + line.length, 0);

const generateVariants:GenerateVariantsT = async (params) => {
    const {theme, map} = params;

    const cardsQty = onCardsQty(map);

    const data = await fetchData({theme, cardsQty});

    const cardStatus:Omit<CardI, 'content' | 'imgPath' | 'name' | 'id'> = {
        isSelect: false,
        isDisabled: false,
        isCorrect: null,
    };

    const result:Array<CardI> = data.map(element => [
        {
            name: element.id,
            content: element.variants[0].content,
            imgPath: element.variants[0].imgPath,
            ...cardStatus
        },
        {
            name: element.id,
            content: element.variants[1].content,
            imgPath: element.variants[1].imgPath,
            ...cardStatus
        }
    ]).flat().map((element, index) => ({...element, id: index}));

    return shuffle(result);
};