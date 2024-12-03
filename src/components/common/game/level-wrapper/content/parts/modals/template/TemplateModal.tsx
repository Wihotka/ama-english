import React, {FC, ReactNode} from 'react';
import {isEmpty} from 'lodash';
import {classNames} from 'js-data-utils';

import {IndicatorsTable, SettingsTable, SettingsTableT} from '@components/common/settings-table';
import {LocalizedText, LocalizedTextP} from '@components/common/localized-text/LocalizedText';
import {FieldWrap} from '@components/common/game/components';

import styles from './styles.scss';

type ModalP = {
    level:number | null;
    afterLevelText:LocalizedTextP;
    afterLevelSmallText?:LocalizedTextP;
    table?:SettingsTableT;
    beforeSettingsTableBlock?:ReactNode;
    beforeButtonBlock?:ReactNode;
    wrapCN?:string;
};

const subtitle = (name:string, style?:{ [key:string]:string }) => <p
    className={styles.subtitle}
    style={style}>
    {<LocalizedText name={name} path={'modals/translation'}/>}
</p>;

export const TemplateModal:FC<ModalP> = (p) => {
    const {
        level, afterLevelText, afterLevelSmallText,
        children, table, beforeButtonBlock, wrapCN
    } = p;

    const isShowSettingsTable = table && !isEmpty(table);

    const wrapCn = classNames(wrapCN ? wrapCN : '');

    return (
        <FieldWrap outerClassName={wrapCn}>
            <div className={styles.modalIn}>
                {level && subtitle('template.description')}
                {level
                    ? <p
                        className={styles.afterLevelText}><LocalizedText {...afterLevelText}/></p>
                    : <p className={styles.resultText}><LocalizedText {...afterLevelText}/></p>
                }
                {afterLevelSmallText && <p className={styles.afterLevelSmallText}><LocalizedText {...afterLevelSmallText}/></p>}
                {level && subtitle('template.selectedSettings')}
                {isShowSettingsTable && (
                    <div className={styles.settingsTable}>{(level
                        ? <SettingsTable table={table}/>
                        : <IndicatorsTable table={table}/>)}</div
                    >) }
                <div>
                    {children}
                </div>
                {beforeButtonBlock && <p className={styles.beforeButtonText}>{beforeButtonBlock}</p>}
            </div>
        </FieldWrap>
    );
};
