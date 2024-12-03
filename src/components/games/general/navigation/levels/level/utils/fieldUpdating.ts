import {random} from 'lodash';

import {maxMistakeQty} from '../../../config';

import {answerStatuses, FieldUpdatingT, Navigation_GamePlayData, Option} from '../type';
import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

export const fieldUpdating:FieldUpdatingT = (props) => {
    const {
        status,
        options,
        answerQty,
        mistakeQty,
        taskMistakeQty,
        openedItemNames,
        changeGPDOnline,
        availableOptions,
        initFinishPlaying,
        currentOptionIndex,
        currentAvailableOptionIndex
    } = props;

    const updateData = () => {
        options.length === openedItemNames.length + 1 ? initFinishPlaying() : null;
        const updatedAvailableOptions:Array<Option> = [];

        for (let i = 0; i < availableOptions.length; i++) {
            const newOption = options[currentOptionIndex];

            if (i === currentAvailableOptionIndex) {
                if (newOption) updatedAvailableOptions.push(newOption);
            } else {
                updatedAvailableOptions.push(availableOptions[i]);
            }
        }

        const openedAlreadyItemsHasNewItem = openedItemNames.includes(availableOptions[currentAvailableOptionIndex].item.name);

        const update = () => {
            changeGPDOnline({
                isUpdating: true,
            });

            setGameTimeout(() => {
                changeGPDOnline<Navigation_GamePlayData>({
                    mistakeQty: 0,
                    taskMistakeQty: 0,
                    isUpdating: false,
                    isFieldBlocked: true,
                    isRightCandidate: false,
                    pressedCandidateName: '',
                    availableOptions: updatedAvailableOptions,
                    answerStatus: answerStatuses.none,
                    currentOptionIndex: currentOptionIndex + 1,
                    openedItemNames: openedAlreadyItemsHasNewItem
                        ? openedItemNames
                        : [...openedItemNames, availableOptions[currentAvailableOptionIndex].item.name],
                    hintedItemNames: updatedAvailableOptions.map(option => option.item.name),
                    currentAvailableOptionIndex: random(0, availableOptions.length - 2)
                });
            }, 300);
        };

        update();
    };

    if (status === answerStatuses.success) {
        changeGPDOnline<Navigation_GamePlayData>({
            answerQty: answerQty + 1,
        });

        updateData();
    } else {
        // mistakeQty + 1 === maxMistakeQty || taskMistakeQty === 1
        // ? updateData()
        // : changeGPDOnline<Navigation_GamePlayData>({
        //     mistakeQty: mistakeQty + 1,
        //     answerStatus: answerStatuses.none
        // });

        if (mistakeQty + 1 === maxMistakeQty || taskMistakeQty === 1) {
            changeGPDOnline({
                // answerStatus: answerStatuses.error
            });
            console.log('fsdfdf');
            updateData();
        } else {
            changeGPDOnline<Navigation_GamePlayData>({
                mistakeQty: mistakeQty + 1,
                answerStatus: answerStatuses.none
            });
        }
    }
};