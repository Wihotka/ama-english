import {bindActions} from '@reducers/utils/actions-binder';
import {actions} from './reducer';

export const runHideLoader = (time:number) => {
    setTimeout(() => {
        hideLoader();
    }, time);
};

export const {showLoader, hideLoader} = bindActions(actions);
