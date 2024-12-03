import {globalConfig, insideMode} from '@global-config/global';

//так же имя проекта нужно указывать в src/template.html
export const projectName = 'english';
const projectPath = `/apps/${projectName}`;

export const pathConfig = {
    host: globalConfig.host,
    root: globalConfig.host + '/',
    homework: '',
    oldChallenge: 'homework',
    challenge: 'homework',
    root2: globalConfig.isProd ? (insideMode ? '/platform' : '') : '/',
    base: globalConfig.isProd ? (insideMode ? '/platform' : '') + projectPath : '',
    // base: globalConfig.isProd ? '/apps/english' : '',
    games: 'general',
    textbook: `${globalConfig.host}/apps/englishBook/levels`,
    vocabulary: `${globalConfig.host}/apps/engVocabulary/`,
    support: `${globalConfig.host}/apps/student/help/messageToSupport`,
    funGames: 'fun',
    arenaGames: 'arena',
    levels: 'levels',
    level: 'level',
    dictionaryLink: 'https://dictionary.amakids.com/'
};