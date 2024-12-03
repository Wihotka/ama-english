import {generateVariants} from './../generate-variants';
import {dataToBe} from './data-test';

import {GenerateVariantsP, SideFlight, VariantObj} from './../../../type';
import {ThemeFruitSmoothie} from '@custom-types';
import {isEqual} from 'lodash';

const params:GenerateVariantsP = {
    level: 3,
    theme: ThemeFruitSmoothie.toBe,
    answersQty: 10,
    complexity: 3,
    finalHeightPosition: {min: 5, max: 10},
    rangeCoordinatesCentralPoint: {
        leftElements: {
            X: {min: 70, max: 80},
            Y: {min: 200, max: 250}
        },

        rightElements: {
            X: {min: 20, max: 30},
            Y: {min: 200, max: 250}
        }

    },
    flyDelay: [0.1, 0.2, 0.3]
};

const variantExample:VariantObj = {
    id: 0,
    text: '',
    image: '',
    cutImage: '',
    startPositionFly: {X: 0, Y: 0},
    coordinatesCentralPoint: {X: 0, Y: 0},
    endPositionFly: {X: 0, Y: 0},
    flyDelay: 0,
    startSide: SideFlight.left,
    isSelect: true,
    isCorrect: true,
    currentStep: 0,
    isDisabled: false
};

describe('Generate variants FruitSmoothie test', () => {

    test('Checking question', async () => {
        global.fetch = ():any => Promise.resolve(dataToBe);
        const result = await generateVariants(params);

        result.forEach(variant => expect(variant.question).not.toBeNull());
    });

    test('Checking options', async () => {
        global.fetch = ():any => Promise.resolve(dataToBe);

        const result = await generateVariants(params);

        result.forEach(variant => {
            const {options} = variant;

            expect(options.filter(option => option.isCorrect)).toHaveLength(1);
            expect(options.filter(option => !option.isCorrect)).toHaveLength(3);

            options.forEach(option => {
                expect(isEqual(
                    Object.keys(variantExample).sort(),
                    Object.keys(option).sort()))
                    .toBe(true);

                for (const content in option) {
                    expect(content).not.toBeNull();
                    expect(content).not.toBeUndefined();
                }
            });
        });
    });
});