import {sample} from 'lodash-es';
import {store} from '@store';

const winSounds = ['Better than ever', 'Cool', 'Excellent', 'Fabuolus', 'Good for you', 'Great job', 'Great', 'Keep it up', 'Perfect', 'Very nice', 'Well done', 'You did it', 'You_re genious', 'You_re right', 'You_re rock', 'You_ve got it'];

export const speakWinPhrase = () => {
    const phrase = sample(winSounds);
    const {volume} = store.getState().interfaceVolume;

    const audioObg = new Audio(require(`_assets/sounds/finModalWin/${phrase}.mp3`));

    audioObg.volume = volume;
    audioObg.play().then();
};