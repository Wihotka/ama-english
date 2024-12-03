import {isEqual} from 'lodash';

import {generateVariantOptions} from '../generate-variant-options';
import {dataMockL1, dataMockL2} from './data-test';

import {Variant} from './../../../type';
import {ThemeTimeline} from '@custom-types';

describe('Tests generate variant options timeline', () => {
    describe('Test level 1', () => {
        beforeEach(() => {
            global.fetch = ():any => Promise.resolve(dataMockL1);
        });

        afterEach(() => {
            global.fetch = ():any => undefined;
        });

        test('Variant qty', async () => {
            const variantArray = await generateVariantOptions({
                level: 1,
                theme: ThemeTimeline.presentSimple,
                answersQty: 10
            });

            expect(variantArray).toHaveLength(10);
        });

        test('Checking fields variants', async () => {
            const variantArray = await generateVariantOptions({
                level: 1,
                theme: ThemeTimeline.presentSimple,
                answersQty: 10
            });
            const testField:Variant = {
                answers: [],
                question: '',
                correctAnswer: '',
                mistakeAnswer: ''
            };

            variantArray.map(variant => {
                expect(variant.answers).toHaveLength(2);
                expect(isEqual(
                    Object.keys(variant).sort(),
                    Object.keys(testField).sort()))
                    .toBe(true);
            });
        });
    });

    describe('Test  level 2', () => {

        beforeEach(() => {
            global.fetch = ():any => Promise.resolve(dataMockL2);
        });

        afterEach(() => {
            global.fetch = ():any => undefined;
        });

        test('Variant qty', async () => {
            const variantArray = await generateVariantOptions({
                level: 2,
                theme: ThemeTimeline.presentSimple,
                answersQty: 10
            });

            expect(variantArray).toHaveLength(10);
        });

        test('Checking fields variants', async () => {
            const variantArray = await generateVariantOptions({
                level: 2,
                theme: ThemeTimeline.presentSimple,
                answersQty: 10
            });
            const testField:Variant = {
                answers: [],
                question: '',
                correctAnswer: '',
                mistakeAnswer: ''
            };

            variantArray.map(variant => {
                expect(variant.answers).toHaveLength(2);
                expect(isEqual(
                    Object.keys(variant).sort(),
                    Object.keys(testField).sort()))
                    .toBe(true);
            });
        });
    });
});
