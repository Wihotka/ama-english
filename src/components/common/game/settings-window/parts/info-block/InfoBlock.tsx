import React from 'react';

// import {Card} from '@components/common/game/settings-window/components';
//
// import styles from './style.scss';
// import styles2 from '../controls-wrapper/style.scss';
// import {useTranslation} from 'react-i18next';

type P = {
    settingsTemplate:any;
    gameName:string;
};

//в цьому компоненті не получилось на швидку руку зробити архітектуру lang
export const InfoBlock = (props:P) => {
    console.log(props);
    // const {settingsTemplate, gameName} = props;
    // const {t} = useTranslation('settings-info/translation');
    //
    // const settingsNames = Object.keys(settingsTemplate);
    //
    // const currentGameInfo = t(`games.${gameName}`, {returnObjects: true});
    //
    // // const currentGameInfo = lang.games[gameName] || {};
    //
    // // @ts-ignore
    // const {bottom_content, gameRules} = currentGameInfo;

    return <div>InfoBlock</div>;

    // return (
    //     <div className={styles.infoBlock}>
    //         {gameRules &&
    //         <div className={styles.infoBlock__item}>
    //             <p className={styles.infoBlock__itemTitle}>{t('gameRules')}</p>
    //             <p className={styles.infoBlock__text}>{gameRules}</p>
    //         </div>
    //         }
    //         <div className={styles.items}>
    //             <div className={styles2.settings}>
    //                 {settingsNames.map((settingName, index) => {
    //                     const currentSettingInnerName = t(settingName);
    //
    //                     const innerSettingDesc = currentGameInfo[settingName] || {};
    //                     const {innerName, texts} = innerSettingDesc;
    //
    //                     if (settingsTemplate[settingName].needHideControl) return null;
    //
    //                     return (
    //                         <Card key={index} title={settingName}>
    //                             <div className={styles.infoCardTexts}>
    //                                 {innerName
    //                                     ? renderMainDescription(innerName)
    //                                     : (currentSettingInnerName) &&
    //                                     renderMainDescription(currentSettingInnerName)}
    //                                 {texts &&
    //                                 <div className={styles.infoBlock__textsWrapper}>{renderTextsFromArray(texts)}</div>}
    //                             </div>
    //                         </Card>
    //                     );
    //                 })}
    //             </div>
    //         </div>
    //
    //         {bottom_content &&
    //         <div className={styles.infoBlock__bottom}>
    //             {renderTextsFromArray(bottom_content)}
    //         </div>}
    //
    //     </div>
    // );
};

// const renderMainDescription = (settingName:string|Array<string>|{innerName:string;texts:Array<string>}) =>
//     Array.isArray(settingName)
//         ? renderTextsFromArray(settingName)
//         : typeof settingName === 'string'
//             ? <p className={styles.infoBlock__text}>{settingName}</p>
//             : <><p className={styles.infoBlock__text}>{settingName.innerName}</p>
//                 <div>{renderTextsFromArray(settingName.texts)}
//                 </div></> ;
//
// const renderTextsFromArray = (arr:Array<string>) =>
//     arr.map((text, textIndex) =>
//         <p className={styles.infoBlock__text} key={textIndex}>
//             {text}
//         </p>
//     );
