import React from 'react';

import {TemplateRadio} from '../templates';
import {SettingsControl, SettingsTemplateValuesArr} from '@custom-types';

export const Radio = <T extends string|number>(p:SettingsControl<T, SettingsTemplateValuesArr<T>>) =>
    <TemplateRadio {...p}/>;