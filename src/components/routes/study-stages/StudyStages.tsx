// import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import {classNames} from 'js-data-utils';
//
// import {runHideLoader} from '@reducers/preloader/dispatchers';
// import {LocalizedText} from '@components/common';
//
// import styles from './styles.scss';
// import {pathConfig} from '@global-config/path-config';
// import {StudyStageLinkT} from '@components/routes/study-stage/StudyStage';
// import {StudyLink} from '@components/routes/study-stage/parts';
// import {useSelector} from 'react-redux';
// import {metadataSelectors} from '@reducers/metadata/selectors';
// import {Metadata} from '@custom-types';
// import {useTranslation} from 'react-i18next';
//
// const StudyStageLinks:Array<StudyStageLinkT> = [
//     {
//         name: 'challenge',
//         path: pathConfig.challenge,
//         disabled: true
//     },
//     {
//         name: 'arena',
//         path: pathConfig.arenaGames,
//         disabled: true
//     },
//     {
//         name: 'fun',
//         path: pathConfig.funGames,
//         disabled: false
//     }
// ];
//
// export const StudyStages = () => {
//     const metadataSections = useSelector(metadataSelectors.sections);
//     const tStudyStages = useTranslation('study-stages/translation').t;
//     const descriptions:any = tStudyStages('descriptions', {returnObjects: true});
//
//     useEffect(() => {
//         runHideLoader(300);
//     }, []);
//
//     const progressObj = getStudyProgress(metadataSections);
//     const StudyStageLinks = getStudyStageLinks(metadataSections);
//
//     return (
//         <div className={styles.studyStages}>
//             <div>
//
//                 <Link to={pathConfig.level}>stage link</Link>
//             </div>
//             {StudyStageLinks.map((link) => {
//                 const {name, disabled} = link;
//                 const progress = progressObj[name];
//                 const description = descriptions[name];
//
//                 return <StudyLink
//                     key={name}
//                     link={link}
//                     progress={progress}
//                     disabled={disabled}
//                     description={description}/>;
//             })}
//         </div>
//     );
// };
//
// const getStudyProgress = (metadataSections:Metadata['sections']):{[key:StudyStageLinkT['name']]:number} => {
//     if (!metadataSections.hometask.status || !metadataSections.hometask.data) return {
//         textbook: 0,
//         challenge: 0,
//         vocabulary: 0,
//     };
//
//     const {progressPercent} = metadataSections.hometask.data;
//
//     return {
//         textbook: 0,
//         challenge: progressPercent,
//         vocabulary: 0,
//     };
//
// };
// const getStudyStageLinks = (metadataSections:Metadata['sections']) => {
//     if (!metadataSections.hometask.status || !metadataSections.hometask.data) return StudyStageLinks;
//
//     const {status} = metadataSections.hometask;
//
//     return [
//         {
//             name: 'textbook',
//             isExternal: true,
//             path: pathConfig.textbook,
//             disabled: false
//         },
//         {
//             name: 'challenge',
//             path: pathConfig.challenge,
//             disabled: !status
//         },
//         {
//             name: 'vocabulary',
//             isExternal: true,
//             path: pathConfig.vocabulary,
//             disabled: true
//         },
//         {
//             name: 'games',
//             path: pathConfig.games,
//             disabled: false
//         },
//         {
//             name: 'arena',
//             path: pathConfig.arenaGames,
//             disabled: true
//         },
//         {
//             name: 'fun',
//             path: pathConfig.funGames,
//             disabled: false
//         }
//     ];
// };