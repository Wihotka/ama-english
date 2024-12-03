import {StoreInner} from '@store';

export const showLoader = (state:StoreInner['preloader']) => {
    state.isShow = true;
};

export const hideLoader = (state:StoreInner['preloader']) => {
    state.isShow = false;
};