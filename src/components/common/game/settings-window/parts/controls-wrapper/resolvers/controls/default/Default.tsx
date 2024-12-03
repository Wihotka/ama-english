import React from 'react';

import {TemplateSelect} from '../templates';

import {SettingsControl, SettingsTemplateValuesArr} from '@custom-types';

export const Default = <T extends string|number>(p:SettingsControl<T, SettingsTemplateValuesArr<T>>) =>
    <TemplateSelect {...p}/>;