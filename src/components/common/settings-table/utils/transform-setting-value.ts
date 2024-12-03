import {getTimeStr} from 'js-data-utils';

export const transformSettingValue = (name:string, value:any, lang?:{[key:string]:any}) => {
    if (name === 'gameTime') return gameTimeTransform(value, lang?.min);

    // if (lang?.values[value]) return lang?.values[value];

    if (name === 'lettersQty' && Array.isArray(value) && value.length === 2) {
        return `${value[0]}-${value[1]}`;
    }

    return value;
};

const gameTimeTransform = (value:any, suffix:string) =>
    getTimeStr(value) + ' ' + suffix;