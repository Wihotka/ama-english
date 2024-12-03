import {isEqual, merge} from 'lodash';

import {SettingsControl, SettingsTemplate, AllGameSettings} from '@custom-types';

type P = {
    value:string|number|Array<string>;
    controlName:string;
    settingsTemplate:SettingsTemplate;
    control:SettingsControl['control'];
    settings:AllGameSettings;
};

export const checkDependControl = ({value, settingsTemplate, controlName, control, settings}:P) => {
    const dependSettings:any = {};

    const {disabledSettings = {}} = control;
    // if (dependentTo) {
    //     const dependentControlValues = settingsTemplate[dependentTo].values;
    //
    //     for (let i = 0; i < dependentControlValues.length; i++) {
    //         if (isEqual(dependentControlValues[i].name, value))
    //             dependSettings[dependentTo] = dependentControlValues[i].values[0];
    //     }
    // }

    /*
        від масиву нічого не залежить і не блокується
        якщо вдруг методитисти захочуть щоб залежало/блокувалось від масиву - до останнього відмовляти,
        бо написати логіку під залежність значень від масива буде больно
    */
    if (Array.isArray(value)) return {};
    
    const disabledList = disabledSettings[value] || [];

    //установка залежних налаштувань
    for (const key in settingsTemplate) {
        const control = settingsTemplate[key];

        //якщо значення залежне
        if (control['dependentFrom'] === controlName) {
            dependSettings[key] = control.dependentValues?.[value][0]; // витягуємо з values необхідне значення
        }

        // провірка disabledWhen
        if (control['disabledWhen']) {
            if (isEqual(control['disabledWhen'][controlName], value)) { // якщо змінений контрол і значення яке за ним записане однакові
                const dwLength = Object.keys(control['disabledWhen']); // знаходимо від скількох значень блокується об"єкт
                let qty = 1; // кількість збігів disabledWhen налаштувань. якщо ми вже тут, то значить один раз вже заблокувалось

                for (const key in control['disabledWhen']) { // проходимось по всіх disabledWhen налаштуваннях
                    if (key !== controlName && control['disabledWhen'][key] === settings[key]) { // якщо імя того яке міняється, зпівпало з поточним пропуск. якщо значення збігаються
                        qty++; // збільшуємо кількість збігів
                    }
                }

                if (dwLength.length === qty) { // якщо кількість disabledWhen і кількість збігів однакові
                    const disabledSettings = getDisabledSettingsValues(
                        control,
                        key,
                        settings,
                        controlName,
                        value,
                        dependSettings
                    ); // тягнемо нові значення заблокованих налаштувань

                    merge(dependSettings, disabledSettings); // і записуємо
                }
            }
        }
    }

    //установка налаштувань, які блокуються
    disabledList.forEach(disCName => {
        const currentDisC = settingsTemplate[disCName];

        const disabledSettings = getDisabledSettingsValues(currentDisC, disCName, settings, controlName, value, dependSettings);

        merge(dependSettings, disabledSettings);
    });

    return dependSettings;
};

// функція встановлює мінімальні налаштування, якщо контнол заблокований (провірено вродь у всіх випадках)
const getDisabledSettingsValues = (control:SettingsControl['control'], disabledControlName:string, settings:any, controlName:string, value:string|number, dependSettings:any):any => {
    const disSettings:any = {};

    // використовую також dependSettings оскільки в залежних налаштуваннях може буде якесь налаштування яке змінилось вже в dependSettings
    const comparedSettings = {
        ...settings,
        ...dependSettings
    };

    if (control.min || control.min === 0) { // якщо є просто мінімум то зразу записуємо його
        disSettings[disabledControlName] = control.min;
    } else if (Array.isArray(control.values)) { // якщо значення контолу масив
        if (control?.controlName === 'checkbox') { //і сам контрол чекбокс
            disSettings[disabledControlName] = []; // записуємо пусте значення
        } else {
            disSettings[disabledControlName] = control.values[0]; // інакше записуємо нульове значення
        }
    } else { // якщо верхні умови не спрацювали значить контрол залежний
        const {dependentFrom} = control;

        if (dependentFrom) { // додаткова провірка на залежність
            const parentDependentSettingValue = controlName === dependentFrom //якщо так сталось що контрол який міняється є тим від якого залежить поточний контронл
                ? value // беремо поточне значення
                : comparedSettings[dependentFrom]; //інакше витягуємо з налаштувань значення того контролу від якого наш залежить

            disSettings[disabledControlName] = control.dependentValues?.[parentDependentSettingValue][0]; // і витягуємо з values необхідне значення
        }
    }

    return disSettings;
};