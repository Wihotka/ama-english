import axios, {AxiosResponse} from 'axios';
import {store} from '@store';
import {GetWordsP} from '@lib/game/utils/get-words/types';
import {getWordsBackEnd} from '@lib/game/utils/get-words/get-words';

type RequestBody = {
    method:'get' | 'post';
    url:string;
    params:any;
    withCredentials:boolean;
    data?:any;
    headers?:any;
};

type Res = {
    status:boolean;
    data:{
        words:Array<any>;
    };
};

export const getWordsFromApi = async (params:GetWordsP) => {
    const {metadata} = store.getState();
    const {dictionaryLink, common: {settings: {langCode}}} = metadata;

    const method = 'get';
    const url = `${dictionaryLink}api/words/`;

    const requestBody:RequestBody = {
        method,
        url,
        withCredentials: false,
        params: {
            ...params,
            // todo по сути uk вообще не должно появляться (на сервер не должен уходить uk)
            nativeLang: langCode === 'uk' ? 'ru' : langCode
        },
        data: {},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': 'Bearer rX6tK5xQ4bL6jB3nI2bM6aR2zE0aW2lB'
            // 'Access-Control-Allow-Origin': '*'
        }
    };

    // @ts-ignore
    let data:AxiosResponse<Res> = null;

    try {
        data = await axios(requestBody);
    } catch (e) {
        console.warn(e);

        return getWordsBackEnd(params);
    }
    
    if (!data.status) {
        console.log('Error getWordsFromApi', data);

        return getWordsBackEnd(params);
    }

    return data.data.data.words;

};