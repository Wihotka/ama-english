import {useEffect} from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import {onActualTime, onAllDisabledOption, onAllHidingOption, setFieldSize, setOptionsField} from './';

import {FruitsSmoothie_GamePlayData, UseGameT} from './../type';

export const useGame:UseGameT = (params) => {
    const {field, optionsRef, gameSettings, gamePlayData, changeGPDOnline, gameData, initFinishPlaying} = params;
    const {
        options,
        isStartFly,
        maxTimeGame,
        iteration,
        selectOptions,
        time,
        correctQty,
        actualAttemptsQty,
        isFieldUpdate,
        optionsFieldSize,
        isHidingOption,
        timeToClick,
        isCorrect
    } = gamePlayData;
    const {timeFly, variantArray, maxAttemptsQty} = gameData;
    const {answersQty} = gameSettings;
    const {first, second} = correctQty;

    // Получение размеров игрового поля
    useEffect(() => {
        setFieldSize({field, changeGPDOnline});
    }, [field]);

    useEffect(() => {
        if (!selectOptions) return;

        const {isCorrect, isSelect, flyDelay} = selectOptions;
        const actualTime = onActualTime({time, isSelect, timeToClick, actualAttemptsQty, flyDelay});

        if (isCorrect && actualTime > 0.85 && !isHidingOption) {
            onAllHidingOption({changeGPDOnline});
        }
    });

    // Получение размеров вариантов ответа
    useEffect(() => {
        if (optionsRef.every(ref => !!ref.current) && optionsFieldSize.length > 0) return;

        setOptionsField({optionsRef, changeGPDOnline});
    }, [optionsRef, optionsFieldSize]);

    // Генерация данных для игры
    useEffect(() => {
        if (!isFieldUpdate) return;

        const {question, options} = variantArray[iteration];

        const maxTimeGame = Math.max(...options.map(option => option.flyDelay)) + 1;

        setGameTimeout(() => {
            changeGPDOnline<FruitsSmoothie_GamePlayData>(
                {options, question, maxTimeGame}
            );
        }, 1000);

    }, [isFieldUpdate]);

    // Обновление поля и запуск анимации перемещение вариантов ответа
    useEffect(() => {
        changeGPDOnline<FruitsSmoothie_GamePlayData>({isFieldUpdate: true});

        setGameTimeout(() => {
            changeGPDOnline<FruitsSmoothie_GamePlayData>({isFieldUpdate: false, selectOptions: null,});
        }, 1500);

        setGameTimeout(() => {
            changeGPDOnline<FruitsSmoothie_GamePlayData>({isStartFly: true, isHidingOption: false});
        }, 1800);
    }, [iteration]);

    // Сброс параметров для нового раунда
    useEffect(() => {
        if (!isStartFly) return;

        if (isCorrect) {
            setGameTimeout(() => {
                changeGPDOnline<FruitsSmoothie_GamePlayData>({
                    time: 0,
                    isStartFly: false,
                    iteration: iteration + 1,
                    actualAttemptsQty: 0,
                    optionsFieldSize: [],
                    isCorrect: false,
                });
            }, 1500);

            return;
        }

        if (maxTimeGame <= time || isHidingOption) {
            changeGPDOnline<FruitsSmoothie_GamePlayData>({
                time: 0,
                isStartFly: false,
                iteration: iteration + 1,
                actualAttemptsQty: 0,
                optionsFieldSize: [],
            });

            return;
        }

        if (!optionsFieldSize) return;

        setGameTimeout(() => {
            changeGPDOnline<FruitsSmoothie_GamePlayData>({
                time: +(time + 0.06).toFixed(4)
            });
            // Время должно быть одинаковым со временем transition в get-transform-styles и соответствовать числу для time
        }, timeFly * 60);

    }, [time, isStartFly, isCorrect]);

    // Подсчет правильных ответов 
    useEffect(() => {
        if (!selectOptions?.isCorrect) return;

        if (actualAttemptsQty <= 1) {
            changeGPDOnline<FruitsSmoothie_GamePlayData>({
                correctQty: {
                    ...correctQty,
                    first: first + 1
                },
            });
        } else {
            changeGPDOnline<FruitsSmoothie_GamePlayData>({
                correctQty: {
                    ...correctQty,
                    second: second + 1
                },
            });
        }
    }, [selectOptions]);

    // Отключение возможности клика для ответов при достижении количество максимального их числа
    useEffect(() => {
        onAllDisabledOption({maxAttemptsQty, actualAttemptsQty, options, selectOptions, changeGPDOnline});
    }, [actualAttemptsQty]);

    useEffect(() => {
        answersQty === iteration && initFinishPlaying();
    }, [iteration]);

    // Отслеживаем изменение разрешения экрана для изменения размеров игрового поля
    useEffect(() => {
        const handleResize = () => {
            setFieldSize({field, changeGPDOnline});
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
};
