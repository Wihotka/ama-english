import React from 'react';

import {TemplateToggle} from '../templates';

import {SettingsControl, SettingsTemplateToggle} from '@custom-types';

export const Toggle = (p:SettingsControl<number, SettingsTemplateToggle>) => <TemplateToggle {...p}/>;