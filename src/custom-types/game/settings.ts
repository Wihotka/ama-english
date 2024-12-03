export type BaseSettingValueType = number | string | Array<string | number>;

export type SettingsControl<T = BaseSettingValueType,
    K = (SettingsTemplateLevel
        |SettingsTemplateNumberValueControl
        |SettingsTemplateToggle
        |SettingsTemplateValuesArr<string|number>
        |SettingsTemplateDependentValuesArr<string|number>
        )> = {
    control:{
        controlName?:string;
        dependentFrom?:string;
        disabledSettings?:{[key:string]:Array<string>};
        disabledWhen?:{[key:string]:any};
        needHideControl?:boolean;

        min?:number;
        max?:number;
        step?:number;

        values?:Array<string | number>;
        dependentValues?:{
            [key in number | string]:Array<string | number>;
        };
    } & K;
    controlName:string;
    defaultValue:T;
    valuesArr:Array<T>;
    labels:Array<string>|undefined;
    disabled:boolean;
    setValue:(value:T) => void;
};

export type SettingsTemplate<T = { [key:string]:SettingsControl['control'] }> = {
    level:SettingsTemplateLevel;
} & {
    [key in keyof T]:T[key]
};

export enum ControlNames {
    radio = 'radio',
    inputNumber = 'inputNumber',
    carousel = 'carousel',
    slider = 'slider',
    toggle = 'toggle',
    default= 'default',
    select= 'select'
}

export type SettingsTemplateNumberValueControl<min = number, max = number, step = number, cn = ControlNames>
    = BaseControlFields<number, cn> & {
    min:min;
    max:max;
    step:step;
};

export type DisabledSettings = {
    [key in number | string]:Array<string>;
};

export type SettingsTemplateLevel = {
    min:number;
    max:number;
    step:number;
    valueType:number;
    needHideControl?:boolean;
    disabledSettings?:DisabledSettings;
};

type BaseControlFields<T, controlName = ControlNames> = {
    valueType:T;
    controlName?:controlName;
    disabledSettings?:DisabledSettings;
};

export type SettingsTemplateValuesArr<T extends number | string> = BaseControlFields<T> & {
    values:Array<T>;
};

export type SettingsTemplateDependentValuesArr<T extends number | string> = BaseControlFields<T> & {
    dependentFrom:string;
    dependentValues:{
        [key in number | string]:Array<T>;
    };
};

export type SettingsTemplateToggle = SettingsTemplateNumberValueControl<0, 1, 1, ControlNames.toggle>;

