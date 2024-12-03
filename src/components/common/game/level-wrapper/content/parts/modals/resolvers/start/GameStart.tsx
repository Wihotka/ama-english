import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

import {runHideLoader} from '@reducers/preloader/dispatchers';
import {setSubTitle} from '@reducers/page-title/dispatchers';
import {getSettingsTable} from '@components/common/settings-table';

import {TemplateModal} from '../../template';
import {StarsBlock} from './stars-block';

import {GameParams} from '@custom-types';
import {LevelWrapperT} from '@components/common/game/level-wrapper/type';

type ModalP = Pick<LevelWrapperT, 'getStarsRequirements'> & {
    gameParams:GameParams;
};

export const GameStart:FC<ModalP> = (p) => {
    const {gameParams, getStarsRequirements} = p;
    const {gameSettings, gameConfig} = gameParams;
    const {gameName, displayedSettings, valuesThresholds, isHideLevelInModals, section} = gameConfig;
    const {level} = gameSettings;

    const {t} = useTranslation('settings/translation');
    const valuesLocalization:any = t('values', {returnObjects: true});

    // const taskName = getTextFromLevel({gameText, level, textType: 'taskName'});

    const afterLevelText = {
        path: `games/${section}/${gameName}/translation`,
        name: `taskName${level}`
    };

    const infoStr = t('info');

    useEffect(() => {
        setSubTitle(infoStr);

        return () => {
            setSubTitle('');
        };
    }, [infoStr]);

    useEffect(() => {
        runHideLoader(500);
    }, []);

    const table = displayedSettings && getSettingsTable(displayedSettings, gameSettings, valuesLocalization);
    const finalValuesThresholds = Array.isArray(valuesThresholds) ? valuesThresholds : valuesThresholds[level];

    return (
        <TemplateModal
            level={isHideLevelInModals ? null : +level}
            afterLevelText={afterLevelText}
            table={table}>
            {getStarsRequirements &&
            <StarsBlock
                valuesThresholds={finalValuesThresholds}
                getStarsRequirements={getStarsRequirements}/>}
        </TemplateModal>
    );
};