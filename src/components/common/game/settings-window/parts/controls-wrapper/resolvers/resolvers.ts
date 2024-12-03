import * as c from './controls';
import {
    SettingsControl, SettingsTemplateValuesArr, SettingsTemplateNumberValueControl,
    SettingsTemplateLevel,
    SettingsTemplateToggle
} from '@custom-types';

export const level = (p:SettingsControl<number, SettingsTemplateLevel>) => c.Slider(p);

export const slider = (p:SettingsControl<number, SettingsTemplateNumberValueControl>) => c.Slider(p);

export const lettersQty = (p:SettingsControl<number, SettingsTemplateNumberValueControl>) => c.Slider(p);

export const maxNumber = (p:SettingsControl<number, SettingsTemplateValuesArr<number>>) => c.Default(p);
export const select = (p:SettingsControl<number, SettingsTemplateValuesArr<number>>) => c.Default(p);

export const complexity = (p:SettingsControl<number, SettingsTemplateValuesArr<number>>) => c.Default(p);

export const dataComplexity = (p:SettingsControl<number, SettingsTemplateValuesArr<number>>) => c.Radio(p);

export const radio = (p:SettingsControl<number|string, SettingsTemplateValuesArr<number|string>>) => c.Radio(p);

export const toggle = (p:SettingsControl<number, SettingsTemplateToggle>) => c.Toggle(p);

export const mode = (p:SettingsControl<number|string, SettingsTemplateValuesArr<number|string>>) => c.Carousel(p);

export const gameTime = (p:SettingsControl<number, SettingsTemplateValuesArr<number>>) => c.Carousel(p);

export const carousel = (p:SettingsControl<number|string, SettingsTemplateValuesArr<number|string>>) => c.Carousel(p);

export const numbersInExample = (p:SettingsControl<number, SettingsTemplateNumberValueControl>) => c.InputNumber(p);

export const inputNumber = (p:SettingsControl<number, SettingsTemplateNumberValueControl>) => c.InputNumber(p);

export const answersQty = (p:SettingsControl<number, SettingsTemplateNumberValueControl>) => c.InputNumber(p);

export const theme = (p:SettingsControl<string, SettingsTemplateValuesArr<string>>) => c.Default(p);

export const subTheme = (p:SettingsControl<string, SettingsTemplateValuesArr<string>>) => c.Default(p);

export const gameFieldSize = (p:SettingsControl<string, SettingsTemplateValuesArr<string>>) => c.Radio(p);

