import React from 'react';
import {LocalizedText} from '@components/common';
import {WithBorGrad} from '@components/common/elements';
import {changeGameSettings} from '@reducers/game/dispatchers';
import {ArenaModes} from '@custom-types';

import styles from './styles.scss';

type P = {modes?:Array<ArenaModes>};

export const ModesList = (props:P) => {
    const {modes} = props;

    const setArenaGameMode = (mode:string) => {
        changeGameSettings({
            mode
        });
    };

    return (
        <div className={styles.modesList}>
            {modes && modes.map((mode, index) =>
                <WithBorGrad key={index} borderWidth={'1px'} className={styles.modeItem}>
                    <button onClick={() => setArenaGameMode(mode)} className={styles.modeItemBtn}>
                        <img src={require(`_assets/img/sections/arena/modes/${mode}.png`)} alt='mode'/>
                        <div className={styles.textContent}>
                            <h2 className={styles.modeTitle}><LocalizedText path={'arena/translation'} name={`${mode}.name`}/></h2>
                            <p className={styles.modeDesc}><LocalizedText path={'arena/translation'} name={`${mode}.desc`}/></p>
                        </div>
                    </button>
                </WithBorGrad>
            )}
        </div>
    );
};