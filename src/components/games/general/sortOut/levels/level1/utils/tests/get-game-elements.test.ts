import {getGameElements} from '..';

describe('getGameElements' , () => {
    const {fieldElements, dndElements, answerElement} = getGameElements(5, 15);

    test('field elements to be unique' , () => {
        const isArrayUnique = new Set(fieldElements.map(({index}) => index)).size === fieldElements.length;
    
        expect(isArrayUnique).toBeTruthy();
    });

    test('dnd elements to be unique', () => {
        const isArrayUnique = new Set(dndElements.map(({image}) => image)).size === dndElements.length;

        expect(isArrayUnique).toBeTruthy();
    });

    test('answer element is in dnd elements', () => {
        const isFound = dndElements.find(({image}) => image === answerElement?.image);
    
        expect(isFound).toBeTruthy();
    });
});
