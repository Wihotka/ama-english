import {PayloadAction as PA} from '@reduxjs/toolkit';
import {StoreInner} from '@store';

export const setVolume = (state:StoreInner['interfaceVolume'], action:PA<number>) => {
    const newVolume = action.payload;

    state.volume = newVolume;
    state.isMuted = newVolume === 0;

};

export const setOldVolume = (state:StoreInner['interfaceVolume'], action:PA<number>) => {
    const newVolume = action.payload;

    if (newVolume !== 0) {
        state.oldVolume = newVolume;
    }
};

export const setMuted = (state:StoreInner['interfaceVolume'], action:PA<boolean>) => {
    const newIsMuted = action.payload;

    if (newIsMuted) {
        state.isMuted = true;
        state.volume = 0;
    } else {
        state.isMuted = false;
        state.volume = state.oldVolume;
    }
};
