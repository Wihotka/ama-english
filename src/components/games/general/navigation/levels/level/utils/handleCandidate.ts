import {answerStatuses, HandleCandidateT, Navigation_GamePlayData} from '../type';

export const handleCandidate:HandleCandidateT = (props) => {
    const {name, taskMistakeQty, openedItemNames, availableOptions, changeGPDOnline, currentAvailableOptionIndex} = props;

    const isRightCandidate = name === availableOptions[currentAvailableOptionIndex].item.name;

    const isCandidateShouldBeOpened
        = !isRightCandidate &&
        taskMistakeQty === 1 &&
        !openedItemNames.includes(availableOptions[currentAvailableOptionIndex].item.name);

    changeGPDOnline<Navigation_GamePlayData>({
        isRightCandidate,
        pressedCandidateName: name,
        isFieldBlocked: !isRightCandidate,
        taskMistakeQty: isRightCandidate ? taskMistakeQty : taskMistakeQty + 1,
        answerStatus: !isRightCandidate && taskMistakeQty === 1 ? answerStatuses.error : answerStatuses.none,
        openedItemNames: isCandidateShouldBeOpened
            ? [...openedItemNames, availableOptions[currentAvailableOptionIndex].item.name]
            : openedItemNames
    });
};