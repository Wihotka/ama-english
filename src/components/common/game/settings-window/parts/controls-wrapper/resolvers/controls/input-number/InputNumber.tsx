import React from 'react';

import {TemplateInputNumber} from '../templates';

import {SettingsControl, SettingsTemplateNumberValueControl} from '@custom-types';

export const InputNumber = (p:SettingsControl<number, SettingsTemplateNumberValueControl>) => <TemplateInputNumber {...p}/>;