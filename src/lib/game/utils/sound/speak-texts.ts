import {store} from '@store';
import {staticEngData} from '@lib/game/static-data';
import {soundsTransformingTable} from './sounds-transforming-table';

export type SpeakTexts = {
    text:string;
    path?:string;
    type?:'letter' | 'sentence'
    playbackRate?:number;
    onFinishPlaying?:() => void
};

const {difficultSounds, easySounds} = staticEngData;

const getTextObj = (text:SpeakTexts['text'], type:SpeakTexts['type']) => {
    if (type === 'letter') {
        return {
            type: 'alphabet',
            text: text.toUpperCase()
        };
    }

    if (difficultSounds.includes(text) || easySounds.includes(text)) {
        return {
            type: 'sounds',
            text: `[${soundsTransformingTable[text]}]`
        };
    }

    if (type === 'sentence') {
        return  {
            type: 'resources/sentences',
            text
        };
    }

    return {
        type: 'word',
        text: text
    };
};

export const speakTexts = (props:SpeakTexts) => {
    const {text: initText, type: initType, path, onFinishPlaying, playbackRate = 1} = props;
    const {text, type} = getTextObj(initText, initType);
    const {volume} = store.getState().interfaceVolume;

    const soundUrl = type !== 'word' ? require(`_assets/sounds/${type}/${text}.mp3`) : path;

    const audioObg = new Audio(soundUrl);

    audioObg.volume = volume;
    audioObg.playbackRate = playbackRate;
    
    audioObg.play().then().catch(err => {
        // для safari обрабатываем ошибку и вызываем коллбэк, чтобы игра не прерывалась
        console.info('Audio Error: ', err.message);

        if (onFinishPlaying) {
            setTimeout(() => onFinishPlaying(), 1000);
        }
    });

    audioObg.addEventListener('ended', function(){
        audioObg.currentTime = 0;

        console.log('ended');

        if (onFinishPlaying) {
            onFinishPlaying();
        }
    });
};

// const audioObg = new Audio(require(`_assets/sounds/subjects/${subjectName}/${gameName}/${soundPath}.${type}`));
//
// audioObg.play();
//
// audioObg.addEventListener('ended', function(){
//     audioObg.currentTime = 0;
//
//     console.log('ended');
// });