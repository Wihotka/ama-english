import {sample, sampleSize} from 'lodash';

export const getGameElements = (
    n:number,
    maxIndex:number,
    dndElementsQty = 4
) => {
    const randomCoords = sampleSize(
        new Array(maxIndex + 1).fill('').map((_, i) => i),
        n
    );
    const randomImages = sampleSize(
        new Array(20).fill('').map((_, i) => i),
        n + dndElementsQty
    );

    const fieldElements = randomCoords.map((c, i) => ({
        index: c,
        image: randomImages[i],
    }));
    const dndElements = new Array(dndElementsQty)
        .fill('')
        .map((_, i) => ({image: randomImages[i + n]}));
    const answerElement = sample(dndElements);

    return {fieldElements, dndElements, answerElement};
};
