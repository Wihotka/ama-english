import {cloneDeep} from 'lodash';

import {transformSettingValue} from './transform-setting-value';
import {SettingsTableT} from '@components/common/settings-table';
import {DefaultGame, GameConfig} from '@custom-types';

export const getSettingsTable = (displayedSettings:GameConfig['displayedSettings'], settings:DefaultGame['gameSettings'], valuesLocalization:{[key:string]:string}):SettingsTableT => {
    const {level} = settings;

    // const {controls} = settingsL;

    const finalDisplayedSettings:Array<string> = Array.isArray(displayedSettings)
        ? cloneDeep(displayedSettings)
        // @ts-ignore todo тут displayedSettings повинні бути завжди
        : cloneDeep(displayedSettings[level]);

    const ret:SettingsTableT = [];

    finalDisplayedSettings.forEach((settingName:string) => {
        const value = settings[settingName];

        if (value === undefined || value === null) return;

        const transformedValue = transformSettingValue(settingName, value, valuesLocalization);

        ret.push([{path: 'settings/translation', name: `controls.${settingName}`}, transformedValue]);
    });

    return ret;
};