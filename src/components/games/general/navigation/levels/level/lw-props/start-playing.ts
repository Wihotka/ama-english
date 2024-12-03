import {random} from 'lodash';

import {availableOptionsQty} from '../../../config';

import {StartPlayingCB} from '@custom-types';
import {answerStatuses, NavigationGameT} from '../type';

export const startPlaying:StartPlayingCB<NavigationGameT> = ({gameData}) => {
    const {options} = gameData;

    const availableOptions = options.slice(0, availableOptionsQty);

    return {
        answerQty: 0,
        mistakeQty: 0,
        taskMistakeQty: 0,
        currentOptionIndex: availableOptionsQty,
        currentAvailableOptionIndex: random(0, availableOptions.length - 1),

        pressedItemName: '',
        pressedCandidateName: '',
        answerStatus: answerStatuses.none,

        isFieldBlocked: true,
        isHintShowed: false,
        isRightCandidate: false,
        isUpdating: false,

        openedItemNames: [],
        hintedItemNames: availableOptions.map(option => option.item.name),
        availableOptions
    };
};