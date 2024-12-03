import {random, range, shuffle} from 'lodash';
import {fetchData} from './';
import {cutFruits, fruits} from './image-path';

import {CoordinatesI, GenerateVariantsT, VariantObj, SideFlight, VariantT} from '../../type';

export const generateVariants:GenerateVariantsT = async (params) => {
    const {theme, answersQty, complexity, level, flyDelay, finalHeightPosition, rangeCoordinatesCentralPoint} = params;
    const {leftElements, rightElements} = rangeCoordinatesCentralPoint;

    const data = shuffle(await fetchData({level, complexity, answersQty, theme}));

    const coordinatesCentralPoint:{
        leftElements:{ X:Array<number>, Y:Array<number> },
        rightElements:{ X:Array<number>, Y:Array<number> }
    } = {
        leftElements: {
            X: range(leftElements.X.min, leftElements.X.max, 1),
            Y: range(rangeCoordinatesCentralPoint.leftElements.Y.min, rangeCoordinatesCentralPoint.leftElements.Y.max, 1)
        },
        rightElements: {
            X: range(rightElements.X.min, rightElements.X.max, 1),
            Y: range(rightElements.Y.min, rightElements.Y.max, 1)
        }
    };

    const maxFinalHeightPositionOptions:number[] = range(finalHeightPosition.min, finalHeightPosition.max, 1);

    const variants:VariantT[] = [];

    for (let i = 0; i < answersQty; i++) {
        const {question, correct, incorrectAnswers} = data[i];
        let imagePathFruit = [...fruits];
        let imagePathCutFruit = [...cutFruits];
        const flyDelayArray:number[] = [0]; // Массив с паузами перед запуском анимации
        let optionsArray:VariantObj[] = [];

        for (let i = 0; i <= level; i++) {
            flyDelayArray.push(flyDelay[random(flyDelay.length - 1)]);
            const indexImage = random(imagePathFruit.length - 1);

            // Рандомайзер конечной точки анимации в зависимости от направления
            const heightOfFlight:CoordinatesI = i % 2 === 0
                ? {
                    X: coordinatesCentralPoint.leftElements.X[random(coordinatesCentralPoint.leftElements.X.length - 1)],
                    Y: coordinatesCentralPoint.leftElements.Y[random(coordinatesCentralPoint.leftElements.Y.length - 1)]
                }
                : {
                    X: coordinatesCentralPoint.rightElements.X[random(coordinatesCentralPoint.rightElements.X.length - 1)],
                    Y: coordinatesCentralPoint.rightElements.Y[random(coordinatesCentralPoint.rightElements.Y.length - 1)]
                };

            const selectEndPositionFly = ():number => {
                const selectHeight = maxFinalHeightPositionOptions[random(maxFinalHeightPositionOptions.length - 1)];

                return heightOfFlight.Y > selectHeight ? selectHeight : selectEndPositionFly();
            };

            optionsArray.push({
                id: 0,
                text: i === level ? correct : incorrectAnswers[i],
                image: imagePathFruit[indexImage],
                cutImage: imagePathCutFruit[indexImage],

                startPositionFly: {X: 0, Y: 0},
                coordinatesCentralPoint: heightOfFlight,
                endPositionFly: {X: 0, Y: selectEndPositionFly()},
                currentStep: 0,

                flyDelay: 0,

                startSide: SideFlight.left,

                isCorrect: i === level,
                isSelect: false,
                isDisabled: false
            });

            //Удаляет использованную картинку из вариантов
            imagePathFruit = imagePathFruit.filter((image, index) => index !== indexImage);
            imagePathCutFruit = imagePathCutFruit.filter((image, index) => index !== indexImage);
        }

        // Массив содержит время задержек перед вылетом варианта ответа
        flyDelayArray.forEach((n, i, a) => a[i] += a[i - 1] || 0);

        optionsArray = shuffle(optionsArray).map((option, index) => ({
            ...option,
            id: index,
            startSide: index % 2 === 0 ? SideFlight.left : SideFlight.right,
            flyDelay: flyDelayArray[index]
        }));

        variants.push({
            question,
            options: optionsArray
        });
    }

    return variants;
};