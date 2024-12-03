import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {isEmpty} from 'lodash';
import styled from 'styled-components';

import {setSubTitle} from '@reducers/page-title/dispatchers';
// import {CSSTransition, SwitchTransition} from 'react-transition-group';

// import {runHideLoader} from '@reducers/page-loader/dispatchers';
import {/*InfoBlock, */ControlsWrapper, /*InfoButton*/} from './parts';

import styles from './style.scss';

import {DefaultGame, InitializedGameConfig} from '@custom-types';

type P = {
    gameSettings:DefaultGame['gameSettings'];
    config:InitializedGameConfig;
};

const SettingsWindowElem = styled.div`
  &:after {
    background: ${(props) => props.theme?.colors?.gradient1 || '#fff' };
}`;

export const SettingsWindow = ({gameSettings, config}:P) => {
    const {t} = useTranslation('settings/translation');
    const {settingsTemplate, gameConfig} = config;

    const {gameName, section} = gameConfig;
    const settingsStr = t('settings');

    useEffect(() => {
        setSubTitle(settingsStr);
        // runHideLoader(1300);

        return () => {
            setSubTitle('');
        };
    }, [settingsStr]);

    if (isEmpty(gameSettings)) return null;

    return (
        <SettingsWindowElem className={styles.content}>
            <ControlsWrapper
                gameName={gameName}
                section={section}
                settings={gameSettings}
                settingsTemplate={settingsTemplate}/>
        </SettingsWindowElem>
    );
};
