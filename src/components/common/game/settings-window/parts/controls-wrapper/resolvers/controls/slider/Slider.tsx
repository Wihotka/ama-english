import React from 'react';
import {TemplateSlider} from '../templates';

import {SettingsControl, SettingsTemplateNumberValueControl} from '@custom-types';

export const Slider = (p:SettingsControl<number, SettingsTemplateNumberValueControl>) => <TemplateSlider {...p}/>;