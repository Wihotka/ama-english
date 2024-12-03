import {answerStatuses, HandleFieldT, Navigation_GamePlayData} from '../type';
import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

export const handleField:HandleFieldT = (props) => {
    const {
        name,
        mistakeQty,
        taskMistakeQty,
        fieldUpdatingCB,
        changeGPDOnline,
        hintedItemNames,
        openedItemNames,
        pressedCandidateName
    } = props;

    const isRightItem = name === pressedCandidateName;

    const update = (status:answerStatuses) => setGameTimeout(() => fieldUpdatingCB(status), 500);

    if (isRightItem) {
        changeGPDOnline<Navigation_GamePlayData>({
            pressedItemName: name,
            answerStatus: answerStatuses.success,
            openedItemNames: [...openedItemNames, name]
        });

        update(answerStatuses.success);
    } else {
        if (taskMistakeQty === 1) {
            changeGPDOnline({
                answerStatus: answerStatuses.error,
            });

            update(answerStatuses.error);
        }

        const hintedItemNamesFilteredByWrongSelectedOne
            = mistakeQty === 0
                ? hintedItemNames
                : hintedItemNames.filter((itemName) => itemName !== name);

        changeGPDOnline<Navigation_GamePlayData>({
            pressedItemName: name,
            answerStatus: answerStatuses.error,
            hintedItemNames: hintedItemNamesFilteredByWrongSelectedOne
        });

        update(answerStatuses.error);
    }
};