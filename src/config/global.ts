type GlobalConfig = {
    isProd:boolean;
    isIsolated:boolean;
    timeToReconnect:number;
    apiHost:string;
    host:string;
};

const domainsWithInsideMode = ['amakids.ru', 'amakids.com'];

export const insideMode = domainsWithInsideMode.includes(window.location.hostname);

// const host = 'https://' + window.location.hostname;
const host = 'https://' + window.location.hostname + (insideMode ? '/platform' : '');

export const globalConfig:Readonly<GlobalConfig> = {
    timeToReconnect: 5000,
    isProd: process.env.NODE_ENV === 'production',
    isIsolated: process.env.ISOLATED === 'true',
    host,
    apiHost: host + '/api/',
    // host: 'https://' + window.location.hostname + (insideMode ? '/platform' : ''),
    // apiHost: 'https://' + window.location.hostname + (insideMode ? '/platform' : '') + '/api/',
};
