import {getTimeStr} from 'js-data-utils';

import {FinModalIndicators} from '@custom-types';
import {SettingsTableT} from '@components/common/settings-table';

export const getIndicators = (gameTime:number, indicatorsGetter:() => FinModalIndicators):SettingsTableT => {
    const indicators:FinModalIndicators = indicatorsGetter();

    const indicatorsArr:SettingsTableT = [
        [
            {
                name: 'gameFinish.indicators.gameTime',
                path: 'modals/translation'
            },
            getTimeStr(gameTime).toString()
        ]
    ];

    for (const indicator in indicators) {
        const value = indicators[(<keyof FinModalIndicators>indicator)];

        const finalValue = typeof value === 'number' && !Number.isInteger(value)
            ? <string|number>value.toFixed(2)
            : <string|number>value;

        indicatorsArr.push([
            {
                path: 'modals/translation',
                name: `gameFinish.indicators.${indicator}`
            },
            finalValue
        ]);
    }

    return indicatorsArr;

    // const indicatorsKeys = Object.keys(indicators);
    //
    // return indicatorsKeys.map(keyName => {
    //     const value = indicators[keyName];
    //
    //     const finalValue = typeof value === 'number' && !Number.isInteger(value)
    //         ? value.toFixed(2)
    //         : value;
    //
    //     return [
    //         {
    //             path: 'modals/translation',
    //             name: `gameFinish.indicators.${keyName}`
    //         },
    //         finalValue
    //     ];
    // });
};