import React, {MouseEventHandler} from 'react';
import {upperFirst} from 'lodash';

// import {Preloader} from '@components/common';
import {Games, GamesT} from '@components/games';

import {ValueOf} from '@custom-types/utils';

// import styles from './styles.scss';
import {AllGameSettings, GameMode} from '@custom-types';

type P = {
    gameName:string;
    section:string;
    studyStage:number;
    settings:AllGameSettings;
    hometaskID?:number;
    gameMode:GameMode;
    exit?:MouseEventHandler<HTMLButtonElement>;
};

type R = ValueOf<GamesT>;

export const GameWrapper = (p:P) => {
    const {exit, ...otherP} = p;
    const gn:keyof GamesT = upperFirst(otherP.gameName);

    const GameComponent:R = Games[gn];

    if (exit) {
        console.log(exit);
    }

    return (
        <React.Suspense fallback={null}>
            <GameComponent {...otherP}/>
        </React.Suspense>
    );

    // return (
    //     <div className={styles.gameWrap}>
    //         {exit && <button onClick={exit}> exit </button>}
    //         <React.Suspense fallback={null}>
    //             <GameComponent {...otherP}/>
    //         </React.Suspense>
    //
    //     </div>
    // );
};
