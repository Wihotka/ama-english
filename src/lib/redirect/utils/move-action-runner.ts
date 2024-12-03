import {globalConfig} from '@global-config/global';
import {store} from '@store';

export const runMoveAction = (url:string, force = false) => {
    if (force) {
        document.location.href = url;

        return;
    }

    const {devModeInProd} = store.getState().registry;

    if (!globalConfig.isProd || devModeInProd) {
        console.log('типу переадресація', url);
    } else {
        document.location.href = url;
    }
};