// import {generateGameData} from '../generate-game-data';
// import {staticEngData} from '@lib/game/static-data';
// import {getWords} from '@lib/game/utils';
// import {isArray, isObject} from 'lodash';
//
// const params = {
//     gameConfig: {
//         mixedPuzzleArrayLongerByFL: {
//             1: 0,
//             2: 40,
//             3: 40
//         }
//     },
//     gameSettings: {
//         level: 1,
//         hint: 1,
//         course: 1,
//         theme: 'coloursShapes',
//         answersQty: 4
//     },
//     langCode: 'ru',
//     getWords: getWords,
//     staticEngData
// };
//
// describe('generateGameData', () => {
//     const gameData = generateGameData(params);
//
//     test('level value', async () => {
//         const {level} = await gameData;
//
//         expect(level).toBe(1);
//     });
//
//     test('typecasting of the hint value', async () => {
//         const {isHintHidden} = await gameData;
//
//         expect(isHintHidden).toBe(false);
//     });
//
//     test('every word of words is object', async () => {
//         const {words} = await gameData;
//
//         expect(words.every(word => isObject(word))).toBeTruthy();
//     });
//
//     test('alphabet is array', async () => {
//         const {alphabet} = await gameData;
//
//         expect(isArray(alphabet)).toBeTruthy();
//     });
//
//     test('answer quantity in the range', async () => {
//         const {answersQty} = await gameData;
//
//         expect(answersQty === 4 ).toBe(true);
//     });
// });
