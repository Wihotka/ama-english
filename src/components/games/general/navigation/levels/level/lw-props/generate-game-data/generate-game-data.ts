import {shuffle} from 'lodash';

import {optionsQty} from '../../../../config';

import {GenerateGDCB} from '@custom-types';
import {NavigationGameT, Option} from '../../type';
import {NavigationLocalData, NavigationLocalDataItemByLocation} from '@lib/game/utils/game-local-data-loader/types';
import {loadLocalGameData} from '@lib/game/utils';

export const generateGameData:GenerateGDCB<NavigationGameT> = async (props) => {
    const {gameSettings} = props;
    const {location, complexity} = gameSettings;

    const locations:NavigationLocalDataItemByLocation = await loadLocalGameData(NavigationLocalData.options);

    const locationBackground = locations[location].imgUrl;
    const optionsByCurrentLocation = locations[location].options;

    const optionsFilteredByComplexity
        = optionsByCurrentLocation.filter(option => option.complexity === complexity);

    const optionsByItems:Array<Option>
        = optionsFilteredByComplexity.map(option => ({item: option.item, sentence: option.sentence}));

    const optionByShuffledAndSpliced = shuffle(optionsByItems).splice(0, optionsQty);

    return {
        locationBackground,
        options: optionByShuffledAndSpliced
    };
};
