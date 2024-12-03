import {sample} from 'lodash';

export const getUniqueTranslation = (
    translationArray:string[],
    testTranslation:string
) => {
    let uniqueTranslation = testTranslation;

    while (uniqueTranslation === testTranslation) {
        const randomTranslation = sample(translationArray);

        if (randomTranslation) {
            uniqueTranslation = randomTranslation;
        }
    }

    return uniqueTranslation;
};
