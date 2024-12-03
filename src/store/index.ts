import {configureStore, EnhancedStore} from '@reduxjs/toolkit';

import {reducer} from './reducers';
import {HomeworkGameStatus, Metadata, ReduxGame, GamesCounterForFeedback} from '@custom-types';

export type StoreInner = {
    metadata:Metadata;
    langCode:string;
    registry:{
        devModeInProd:boolean,
    };
    preloader:{
        isShow:boolean;
    };
    game:ReduxGame;
    pageTitle:{
        main:string;
        sub:string;
    };
    interfaceVolume:{
        isMuted:boolean;
        volume:number;
        oldVolume:number;
    };
    subjectInfo:{
        studyStage:number;
    };
    homeworkGameStatus:HomeworkGameStatus;
    gamesCounterForFeedback:GamesCounterForFeedback;
};

export const store:EnhancedStore<StoreInner> = configureStore({
    reducer,
    devTools: true
});

