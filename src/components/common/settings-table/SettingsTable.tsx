import React, {CSSProperties} from 'react';
import {classNames} from 'js-data-utils';
import styled from 'styled-components';

import {WithBorGrad} from '@components/common/elements';
import {LocalizedText} from '@components/common/localized-text';

import styles from './style.scss';

import {SettingsTableT} from './';

type P = {
    // table:Array<Array<{name:string, path?:string}, string>>;
    isOneCol?:boolean;
    table:SettingsTableT;
    wrapStyles?:CSSProperties;
    wrapClassName?:string;
};

const GroupElem = styled.div`
    &:not(&:first-child) {
        border-left: 1px solid ${(props) => props.theme.colors.color5 + '56'};
    }
`;

export const SettingsTable = (p:P) => {
    const {table, wrapClassName = '', wrapStyles, isOneCol = false} = p;
    const tableArray = getTableArray(table, isOneCol);

    return (
        <WithBorGrad
            borderWidth={'2px'}
            borderOpacity={0.48}
            className={classNames(styles.settings, wrapClassName)}
            style={wrapStyles}>
            {tableArray.map((subarray, index) => (
                <GroupElem className={styles.settings__group} key={index}>
                    {subarray.map((item, idx) => {
                        if (!item) return null;

                        const [key, value] = item;

                        return (
                            <div key={idx} className={styles.settings__item}>
                                <p
                                    className={styles.settings__itemName}><LocalizedText {...key}/>:</p>
                                <p className={styles.settings__itemValue}>
                                    {key.name.includes('gameTime')
                                        ? value
                                        : key.name === 'controls.hint'
                                            ? value === '1' ? 'on' : 'off'
                                            : <LocalizedText
                                                name={`values.${value}`}
                                                withoutPrefix={value.toString()}
                                                path={'settings/translation'}/>}
                                </p>
                            </div>);
                    })}
                </GroupElem>))}
        </WithBorGrad>
    );
};

const getTableArray = (table:P['table'], isOneCol:boolean) => {
    if (isOneCol) {
        return [table];
    }

    const tableArray = [];

    for (let i = 0; i < Math.ceil(table.length / 3); i++) {
        tableArray[i] = table.slice((i * 3), (i * 3) + 3);
    }

    return tableArray;
};
