import React, {CSSProperties} from 'react';
import {useSelector} from 'react-redux';

import {WithBorGrad} from '@components/common/elements';

import styles from './styles.scss';
import {StoreInner} from '@store';
import {classNames} from 'js-data-utils';

type P = {
    studyStage:number;
    isPlaying:boolean;
    isFunGames:boolean;
    needShowGameBurger:boolean;
};

export const MainTitle = ({studyStage, isFunGames, isPlaying, needShowGameBurger}:P) => {
    const {main, sub} = useSelector((store:StoreInner) => store.pageTitle);
    const {gameSettings} = useSelector((store:StoreInner) => store.game);

    const style:CSSProperties = needShowGameBurger && isPlaying ? {
        marginRight: 'auto',
        marginLeft: '16px'
    } : {};

    const titlesWrapCN = classNames(
        styles.titlesWrap,
        (isPlaying ? styles.titlesWrap_hide : ''),
        (isPlaying && gameSettings.hasOwnProperty('mode') ? styles.titlesWrap_disabled : '')
    );

    return (
        <div className={titlesWrapCN} style={style}>
            <WithBorGrad borderWidth={'2px'} className={styles.mainTitle}>
                {!isFunGames && <span className={styles.imgWrap}>
                    <img className={styles.img} src={require(`/assets/img/studyStages/kami${studyStage}.png`)} alt={'Kami icon'}/>
                </span>}
                {main}
            </WithBorGrad>
            {sub && <WithBorGrad borderWidth={'2px'} className={styles.title}>
                {sub}
            </WithBorGrad>}
        </div>
    );
};