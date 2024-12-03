import {useEffect, useRef} from 'react';

import {clearAllGameTimeoutInterval, setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import {setRandomCoords, setSizes} from './index';

import {useStartParamsP} from '../type';

export const useStartParams = (props:useStartParamsP) => {
    const {fps, field, feather, speed, changeGPDOnline, gamePlayData, startMove} = props;
    const {sizes} = gamePlayData;

    const firstUpdate = useRef(true);

    const resizeHandler = () => {
        setSizes({changeGPDOnline, feather, field});
    };

    useEffect(() => {
        if (firstUpdate.current) setSizes({changeGPDOnline, feather, field});
    }, [field, feather]);

    useEffect(() => {
        if (!firstUpdate.current) setRandomCoords({gamePlayData, changeGPDOnline, speed});
    }, [sizes]);

    useEffect(() => {
        if (!firstUpdate.current) {
            clearAllGameTimeoutInterval();
            setGameTimeout(startMove, 1000 / (fps * 2));
        }

        firstUpdate.current = false; // useEffects events ON
    });

    // Отслеживаем изменение разрешения экрана для изменения размеров игрового поля 
    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        resizeHandler();

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);
};