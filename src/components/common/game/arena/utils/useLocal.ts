import {useTranslation} from 'react-i18next';

export const useLocal = (text:string) => {
    const {t} = useTranslation('arena/translation');

    return t(text);
};