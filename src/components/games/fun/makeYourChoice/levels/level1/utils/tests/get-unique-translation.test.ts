import {getWords} from '@lib/game/utils';
import {getUniqueTranslation} from '../get-unique-translation';

describe('get unique translation', () => {
    test('every translation is unique', async () => {
        const {words} = await getWords({wordsQty: 250});
        const translationArray = words.map(({translation}) => translation);

        const arr = words.map(({translation}) =>
            getUniqueTranslation(translationArray, translation)
        );

        expect(arr.every((t, i) => t !== words[i].translation)).toBeTruthy();
    });
});
