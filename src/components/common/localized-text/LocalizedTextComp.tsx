import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';

import styles from './styles.scss';

export type LocalizedTextP = {
    name:string;
    path?:string;
    withoutPrefix?:string;
    useSuspense?:boolean;
};

export const LocalizedTextComp:FC<LocalizedTextP> = (p) => {
    const {path, name, withoutPrefix, useSuspense = true} = p;

    const {t, ready} = useTranslation(path, {useSuspense});

    const localizedText = t(name);
    const finalText = localizedText === name && withoutPrefix ? withoutPrefix : localizedText; // якщо в локалізації не знайдено тексту, і є withoutPrefix, значить має відображатись саме він

    return (
        <>
            {!useSuspense
                ? ready && <span className={styles.localizedText}>{finalText}</span>
                : <span className={styles.localizedText}>{finalText}</span>}
        </>
    );
};