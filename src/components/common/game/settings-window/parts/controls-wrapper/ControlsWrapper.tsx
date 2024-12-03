import React, {ReactNode} from 'react';
import {intersection} from 'lodash';
import {/*createValuesArray,*/ getDefaultValue, getDisabledSettings} from 'amakids-games-utils-and-generations/lib/settings-utils';
import {checkDependControl} from './dependent-settings-getter';
import {changeGameSettings} from '@reducers/game/dispatchers';

import {ControlInner} from './control-inner';

import * as resolvers from './resolvers';

import styles from './style.scss';

import {DefaultGame, InitializedGameConfig, SettingsControl} from '@custom-types';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {subjectInfoSelectors} from '@reducers/subject-info/selectors';

type Props = {
    gameName:string;
    section:string;
    settings:DefaultGame['gameSettings'];
    settingsTemplate:InitializedGameConfig['settingsTemplate'];
};

export const ControlsWrapper = (props:Props) => {
    const {settingsTemplate, settings, section, gameName} = props;
    const settingsNames = Object.keys(settings);
    const settingsTemplateNames = Object.keys(settingsTemplate);
    const currentStudyStage = useSelector(subjectInfoSelectors.studyStage);
    const {t} = useTranslation('settings/translation');
    const valuesLocalization:any = t('values', {returnObjects: true});

    const similarNames = intersection(settingsNames, settingsTemplateNames);

    if (!similarNames) return null;

    const disabledSettings = getDisabledSettings(settingsTemplate, settings);

    return (
        <div className={styles.settings}>
            {similarNames.map((name, index) => {
                const control = settingsTemplate[name];
                const defaultValue = settings[name];
                const {controlName, dependentFrom, needHideControl} = control;
                const dependentFromSettingValue = dependentFrom ? settings[dependentFrom] : '';
                const disabled = disabledSettings.includes(name);

                if (name === 'course') {
                    control.max = currentStudyStage;
                }

                const resolver:(p:SettingsControl) => ReactNode = controlName
                    // @ts-ignore
                    ? resolvers[controlName]
                    // @ts-ignore
                    : resolvers[name];

                if (typeof resolver !== 'function') {
                    console.log(name, controlName);
                    throw new Error('Failed to look for settings resolver.');
                }

                // @ts-ignore
                const valuesArr = createValuesArray(control, dependentFromSettingValue);

                // Для игры Air Word прокидываем другое дефолтное значение в заблокированное поле
                // @ts-ignore
                const newDefaultValue = getDefaultValue(valuesArr[gameName === 'airWord' ? 1 : 0], defaultValue, disabled, control);

                const setValue = (value:string|number|Array<string|number>) => {
                    if (disabled) return;
                    // if (needDisableControls) return;

                    // @ts-ignore
                    const dependSettings = checkDependControl({value, settingsTemplate, controlName: name, control, settings});

                    changeGameSettings({
                        [name]: value,
                        ...dependSettings
                    });
                };

                const initialLabels:Array<string> = [];

                valuesArr.forEach((value) => {
                    const localizedValue = valuesLocalization[value];

                    if (localizedValue) {
                        initialLabels.push(localizedValue);
                    }
                });

                const labels = initialLabels.length > 0 ? initialLabels : undefined;

                return (
                    <ControlInner
                        key={index}
                        name={name}
                        gameName={gameName}
                        section={section}
                        disabled={disabled}
                        valuesArr={valuesArr}
                        defaultValue={newDefaultValue}
                        needHideControl={needHideControl}
                    >
                        {resolver({
                            controlName: name,
                            // @ts-ignore
                            control,
                            defaultValue: newDefaultValue,
                            disabled,
                            labels,
                            valuesArr,
                            setValue
                        })}
                    </ControlInner>
                );
            })}
        </div>
    );
};

export const createValuesArray = (control:SettingsControl['control'], dependentFromSettingValue:number|string) => {
    const {min, max, step, values, dependentFrom, controlName, dependentValues} = control;

    //якщо радіо залежний то беремо значення для залежного контролу
    if (dependentFrom && dependentValues) {
        return dependentValues[dependentFromSettingValue];
    }

    if (values) return values;

    const valuesArr = [];

    if (min && max && step) {
        for (let i = min; i <= max;) {
            const val = controlName === 'checkbox' ? i.toString() : +i.toFixed(1);

            valuesArr.push(val);
            // valuesArr.push(+i.toFixed(1));
            i += step;

            i = +i.toFixed(1);
        }

    }

    return valuesArr;
};