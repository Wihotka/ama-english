import React from 'react';

import {TemplateCarousel} from '../templates';

import {SettingsControl, SettingsTemplateValuesArr} from '@custom-types';

export const Carousel = <T extends string|number>(p:SettingsControl<T, SettingsTemplateValuesArr<T>>) =>
    <TemplateCarousel {...p} />;
