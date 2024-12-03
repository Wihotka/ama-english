import React, {useContext} from 'react';
import {getOrderArrForMapping} from 'js-data-utils';

import {StarBlock} from './star-block';

import styles from './styles.scss';

import {LevelWrapperT} from '@components/common/game/level-wrapper/type';
import {LevelWrapperPropsContext} from '@components/common/game/game-inner/content/parts/level-resolver/LevelResolver';

type P = Required<Pick<LevelWrapperT, 'getStarsRequirements'>> & {
    valuesThresholds:Array<number>;
};

export const StarsBlock = ({getStarsRequirements}:P) => {
    const {game} = useContext(LevelWrapperPropsContext);
    const {gameData, gameConfig, gameSettings} = game;
    const startStartArr = getStarsRequirements({gameData, gameConfig, gameSettings});

    return (
        <div className={styles.starsBlock}>{startStartArr.map((item, idx) =>
            (
                <div key={idx} className={styles.item}>
                    <div className={styles.starsWrap}>
                        {getOrderArrForMapping(startStartArr.length - idx).map((item, index) =>
                            <i key={index} className={styles.icon}>
                                <img src={require('/assets/img/modals/requirementStar.png')} alt={''}/>
                            </i>
                        )}
                    </div>
                    <StarBlock starInfo={item}/>
                </div>
            )
        )}
        </div>
    );
};
