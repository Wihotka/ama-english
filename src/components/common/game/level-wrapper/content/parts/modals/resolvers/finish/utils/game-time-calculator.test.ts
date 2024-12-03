import {calculateGameTime} from './game-time-calculator';

describe('calculateGameTime', () => {
    test('equal', () => {
        expect(calculateGameTime({start: 0, end: 10000})).toBe(10);
    });
});