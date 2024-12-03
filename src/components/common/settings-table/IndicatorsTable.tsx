import React, {CSSProperties} from 'react';
import styled from 'styled-components';
import {classNames} from 'js-data-utils';

import {CustomIcon} from '@components/common/elements';

import {LocalizedText} from '@components/common/localized-text';

import styles from './style.scss';

import {SettingsTableT} from './';

type P = {
    // table:Array<Array<{name:string, path?:string}, string>>;
    table:SettingsTableT;
    wrapStyles?:CSSProperties;
    wrapClassName?:string;
};

const IndicatorBorder = styled.div`
  border: 2px solid ${props => props.theme.colors.color6};
`;

export const IndicatorsTable = ({table, wrapClassName = '', wrapStyles}:P) => (
    <div className={classNames(styles.indicators, wrapClassName)} style={wrapStyles}>
        {table.map((item, idx) => {
            if (!item) return null;

            const [key, value] = item;
            const isTime = key.name.includes('gameTime');

            return (
                <IndicatorBorder key={idx} className={styles.indicators__item}>
                    <IndicatorBorder className={styles.indicators__itemIcon}>
                        {isTime ? <CustomIcon type={'clock'}/> : <CustomIcon type={'like'}/>}</IndicatorBorder>
                    <p className={styles.indicators__itemName}><LocalizedText {...key}/>:</p>
                    <div className={styles.indicators__itemValue}>{
                        isTime
                            ? (() => {
                                const timeArr = value.toString().split(':');

                                return <p style={{marginLeft: '-5px'}}>
                                    {!!+timeArr[0] && <>
                                        <span className={styles.timeParam}>{timeArr[0]}</span>
                                        <LocalizedText name={'gameFinish.min'} path={'modals/translation'}/>
                                    </>}
                                    <span className={styles.timeParam}>{timeArr[1]}</span>
                                    <LocalizedText name={'gameFinish.sec'} path={'modals/translation'}/>
                                </p>;
                            })()
                            : <span style={{fontWeight: '600'}}><LocalizedText
                                name={`values.${value}`}
                                withoutPrefix={value.toString()}
                                path={'settings/translation'}/></span>}
                    </div>
                </IndicatorBorder>);
        })}
    </div>
);
