import {GamesSection} from '@games-info';

export const getGameIconSrc = (gamesSection:GamesSection, gameName:string) => {
    try {
        return require(`_assets/img/sections/${gamesSection}/${gameName}/icon.png`);
    } catch (e) {
        console.log(e);

        return require('_assets/img/sections/defaultIcon.png');
    }
};