import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';

import {SettingsBtn, ExitBtn} from './parts';

import styles from './styles.scss';
import {classNames} from 'js-data-utils';
// import {useSelector} from 'react-redux';
// import {gameSelectors} from '@reducers/game/selectors';
// import {useNeedShowGameBurger} from '@lib/custom-hooks';

type P = {
    isPlaying:boolean;
    needShowGameBurger:boolean;
};

export const NavPanel:FC<P> = (p) => {
    const {children, needShowGameBurger, isPlaying} = p;
    const menuCN = classNames(styles.menuTop, (isPlaying ? styles.menuTop_hide : ''));

    return (
        <div className={styles.pageWrap}>
            <div className={menuCN}>
                <ExitBtn isPlaying={isPlaying} needShowGameBurger={needShowGameBurger}/>
                {children}
                {!(isPlaying && needShowGameBurger) && <SettingsBtn/>}
            </div>
            <Outlet/>
        </div>
    );
};
