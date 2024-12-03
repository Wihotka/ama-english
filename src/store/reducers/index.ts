import {Reducer} from '@reduxjs/toolkit';
import {StoreInner} from '@store';

import {metadata} from './metadata';
import {langCode} from './langCode';
import {registry} from './registry';
import {preloader} from './preloader';
import {game} from './game';
import {pageTitle} from './page-title';
import {interfaceVolume} from './interface-volume';
import {subjectInfo} from './subject-info';
import {homeworkGameStatus} from './homework-game-status';
import {gamesCounterForFeedback} from './games-counter-for-feedback';

type ReducerWrap = {
    [K in keyof StoreInner]:Reducer<StoreInner[K]>
};

export const reducer:ReducerWrap = {
    metadata,
    langCode,
    registry,
    pageTitle,
    preloader,
    game,
    interfaceVolume,
    subjectInfo,
    homeworkGameStatus,
    gamesCounterForFeedback
};