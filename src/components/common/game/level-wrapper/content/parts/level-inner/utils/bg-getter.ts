
// export const getBg = (studyLevel:number, gameName:string, imagesPaths:{[key:string]:string} = {}) => {
//     // const subject = getSubjects(subjectName) || {};
//     // const {bg} = imagesPaths;
//     //
//     // return bg
//     //     ? `url(${bg})`
//     //     : '#ffffff';
//
//     // return subject[gameName]
//     //     ? subject[gameName]
//     //     : bg
//     //         ? `url(${bg})`
//     //         : getDefaultBg(subjectName, gameName);
// };

import {GameConfig} from '@custom-types';

export const getBg = (background:string, section:string, gameName:string, studyStage:number, bgColor:GameConfig['bgColor'], isNeedHideBgImg:boolean) => {
    if (background) {
        return background;
    }

    let bg = '';

    if (bgColor) {
        if (typeof bgColor === 'string') {
            bg = bgColor;
        } else {
            bg = bgColor[studyStage];
        }
    }

    if (isNeedHideBgImg) {
        return bg;
    }

    try {
        bg = `url(${require(`_assets/img/sections/${section}/${gameName}/bg${studyStage}.png`)})` + (bg ? `, ${bg}` : '');
    } catch (e) {
        bg = '#ffffff, ' + bg;
    }

    return bg;
};

// const getSubjects = (subjectName:SubjectNamesT) => {
//     const subjects = {
//         [SubjectNames.ma]: {
//             'counting-examples': 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(145,207,223,.6) 100%)',
//             'flash-cards': 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(145,207,223,.6) 100%)',
//             'puzzle-abacus': 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(145,207,223,.6) 100%)',
//         },
//         [SubjectNames.mt]: {
//             'multiplication-table': 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(145,207,223,.6) 100%)',
//         },
//     };
//
//     return subjects[subjectName];
// };
