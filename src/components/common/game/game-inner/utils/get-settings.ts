import {GameInput, InitialGameConfig} from '@custom-types';
import {ValueOf} from '@custom-types/utils';

export const getSettings = (isHomework:boolean, initSettings:GameInput['settings'], settingsTemplate:InitialGameConfig['settingsTemplate']) => {
    if (isHomework) return simpleSettingsValidation(initSettings);

    return getBaseSettings(settingsTemplate);
};

const getBaseSettings = (settingsTemplate:InitialGameConfig['settingsTemplate']) => {
    const initializedSettings:any = {};

    for (const key in settingsTemplate) {
        const currentKey = settingsTemplate[key];

        initializedSettings[key] = currentKey.hasOwnProperty('min') // якщо немає свойства min, значить це просто масив
            ? currentKey.min
            : currentKey.dependentFrom  // перевірка чи це контрол який залежить від іншого контрола
                ? getDependentValues(currentKey)
                : currentKey.values?.[0];

        // if (currentKey.hasOwnProperty('controlName') && currentKey.controlName === 'checkbox') {
        //     const {alwaysChecked = []} = currentKey;
        //
        //     initializedSettings[key] = alwaysChecked;
        // } else {
        //     initializedSettings[key] = currentKey.hasOwnProperty('min') // якщо немає свойства min, значить це просто масив
        //         ? currentKey.min
        //         : currentKey.dependentFrom  // перевірка чи це контрол який залежить від іншого контрола
        //             ? getDependentValues(currentKey)
        //             : currentKey.values?.[0];
        // }
    }

    return initializedSettings;
};

const getDependentValues = (currentKey:ValueOf<InitialGameConfig['settingsTemplate']>) => {
    if (currentKey.dependentValues) {
        const keys = Object.keys(currentKey.dependentValues);

        return currentKey.dependentValues[keys[0]][0];
    }

    return '000';
};

const simpleSettingsValidation = (settings:GameInput['settings']) => {
    const outputSettings:Partial<GameInput['settings']> = {};

    for (const key in settings) {
        const value = settings[key];

        if (isNaN(+value)) {
            outputSettings[key] = value;
        } else {
            outputSettings[key] = +value;
        }
    }

    return outputSettings;
};