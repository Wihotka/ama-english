// import {RegistryKeys} from '@lib/registry-keys';
import {getUrlParams} from 'js-data-utils';
import {setRegistry} from '@reducers/registry/dispatchers';

type UrlParams = {
    mode?:'dev' | string;
};

/*
* добавити в адресну строку щоб бути в дев режимі ?mode=dev
* приклад: https://192.168.1.220:9009/lesson/1?mode=dev
* кілька параметрів:
* https://192.168.1.220:9009/lesson/1?videoMode=native
* */
export const checkUrl = () => {
    const urlParams:UrlParams = getUrlParams(window);
    const {mode} = urlParams;

    // console.log('urlParams', urlParams);

    // if (mode === 'dev')
    //     Registry.add(RegistryKeys.devModeInProd, true);

    if (mode === 'dev')
        setRegistry({devModeInProd: true});

};
