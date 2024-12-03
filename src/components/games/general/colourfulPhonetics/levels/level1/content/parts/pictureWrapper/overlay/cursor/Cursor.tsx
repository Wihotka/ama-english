import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './style.scss';

type ColorCursorP = {
    currentColor:string;
};

type CoordsT = {
    x:number;
    y:number;
};

export const Cursor = ({currentColor}:ColorCursorP) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [{x, y}, setCoords] = useState<CoordsT>({x: -40,y: - 40});

    const handleMouseMove = useCallback(
        (e:MouseEvent) => {
            if (divRef.current) {
                const {left, top, bottom, right}
                    = divRef.current.getBoundingClientRect();

                let newX = -40;
                let newY = -40;

                if (e.clientX >= left && e.clientX <= right) {
                    newX = e.clientX;
                }

                if (e.clientY >= top && e.clientY <= bottom) {
                    newY = e.clientY;
                }

                setCoords({x: newX, y: newY});
            }
        },
        [divRef.current]
    );

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    const translateX = `${x - 20}px`;
    const translateY = `${y - 20}px`;
    const transform = `translate(${translateX}, ${translateY})`;

    return (
        <div ref={divRef} className={styles.cursorContainer}>
            <div
                className={styles.cursor}
                style={{
                    transform,
                    backgroundColor: currentColor,
                }}
            ></div>
        </div>
    );
};
