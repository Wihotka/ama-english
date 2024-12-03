import {soundsTransformingTable} from './sounds-transforming-table';

export type PreloadSounds = Array<{
    text:string;
    type?:'letter';
}>;

const getTextObj = (text:PreloadSounds[0]['text'], type:PreloadSounds[0]['type']) => {
    if (type === 'letter') {
        return {
            type: 'alphabet',
            text: text.toUpperCase()
        };
    }

    return {
        type: 'sounds',
        text: `[${soundsTransformingTable[text]}]`
    };
};

export const preloadSounds = (sounds:PreloadSounds) => {

    sounds.forEach((soundObj) => {
        const {text: initText, type: initType} = soundObj;
        const {text, type} = getTextObj(initText, initType);

        new Audio(require(`_assets/sounds/${type}/${text}.mp3`));
    });
};
