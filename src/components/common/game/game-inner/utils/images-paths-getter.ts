import {preloadImages} from 'js-data-utils';

import {GameImagesPaths} from '@custom-types';

type R = {
    [key:string]:string;
};

export const getGameImagesPaths = (gameName:string, images:GameImagesPaths, section:string):R => {
    const imagesUrls:any = {};

    images.forEach(gameImage => {
        const {name, type, path, subObj,} = gameImage;
        const imgPath = require(`_assets/img/sections/${section}/${gameName}/${path}.${type}`);

        if (subObj) {
            imagesUrls[subObj] = {
                [name]: imgPath
            };
        } else {
            imagesUrls[name] = imgPath;
        }
    });
    const imagesArray:Array<string> = Object.values(imagesUrls);

    preloadImages(imagesArray);

    return imagesUrls;
};

// export const getGameImageUrl = (courseName:string, gameName:string, gameImagePath, type:'png' | 'svg' | 'jpg' = 'png') => {
//
//     let path;
//
//     try {
//         // path = require(`_assets/../app/components/games/${courseName}/${gameName}/assets/images/${gameImagePath}.${type}`);
//         path = require(`_assets/img/courses/${courseName}/games/${gameName}/${gameImagePath}.${type}`);
//     } catch (e) {

//         path = require(`_assets/img/courses/${courseName}/games/${gameName}/${gameImagePath}.${type}`);
//     }
//
//     return path;
//     // return require(`_assets/../app/components/games/${courseName}/${gameName}/assets/images/${gameImagePath}.${type}`);
//     // return require(`_assets/img/courses/${courseName}/games/${gameName}/${gameImagePath}.${type}`);
//     // return require(`_assets/img/courses/${courseName}/games/${gameName}/${gameImagePath}.${type}`);
//     // return require('_assets/../app/components/games/multiplication-table/strike/assets/images/bomb.png');
// };
