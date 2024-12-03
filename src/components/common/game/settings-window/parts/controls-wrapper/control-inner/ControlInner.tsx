import React, {FC} from 'react';
import {classNames} from 'js-data-utils';
import {useTranslation} from 'react-i18next';

import {LocalizedText} from '@components/common';
import {Tooltip} from '@components/common/elements';

import styles from './style.scss';

type P = {
    gameName:string;
    section:string;
    name:string;
    needHideControl?:boolean;
    disabled:boolean;
    valuesArr:Array<string | number>;
    defaultValue:any;
};

export const ControlInner:FC<P> = (props) => {
    const {name, disabled = false, children, needHideControl, gameName, section} = props;
    const className = classNames(styles.control, (disabled ? styles.control_disabled : ''));
    const style = needHideControl ? {display: 'none'} : {};

    return (
        <div style={{...style}} className={className} >
            <div className={styles.control__inner} >
                <div className={styles.titleWrapper}>
                    <span className={styles.title}>
                        <LocalizedText name={`controls.${name}`} path={'settings/translation'}/>
                    </span>
                    <Tooltip
                        placement={'rightTop'}
                        trigger={'click'}
                        overlayStyle={{maxWidth: '493px'}}
                        overlay={<Info section={section} gameName={gameName} controlName={name} />}>
                        <div className={styles.infoBtn}>
                            <div className={styles.text}> i </div>
                        </div>
                    </Tooltip>
                </div>
                {children}
            </div>

        </div>
    );
};

type IP = {
    gameName:string;
    section:string;
    controlName:string;
};

const renderTextsFromArray = (arr:Array<string>) => arr.map((text, textIndex) =>
    <p className={styles.infoText} key={textIndex}>
        {text}
    </p>
);

const Info = ({section, gameName, controlName}:IP) => {
    const {t} = useTranslation(`settings-info/${section}/translation`, {useSuspense: false});
    const currentGameInfo = t(`games.${gameName}`, {returnObjects: true});
    const currentSettingInnerName = t(controlName);

    // @ts-ignore
    const innerSettingDesc = currentGameInfo[controlName] || {};
    const {innerName, texts} = innerSettingDesc;

    return (
        <div>
            {innerName
                ? renderMainDescription(innerName)
                : (currentSettingInnerName) &&
                renderMainDescription(currentSettingInnerName)}
            {texts && <div className={styles.infoWrap}>{renderTextsFromArray(texts)}</div>}
        </div>
    );
};

const renderMainDescription = (settingName:string | Array<string> | { innerName:string; texts:Array<string> }) => {

    if (Array.isArray(settingName)) {
        return renderTextsFromArray(settingName);
    }

    return typeof settingName === 'string'
        ? <p className={styles.infoTitle}>{settingName}</p>
        : <><p className={styles.infoText}>{settingName.innerName}</p>
            <div>{renderTextsFromArray(settingName.texts)}</div>
        </>;
};

