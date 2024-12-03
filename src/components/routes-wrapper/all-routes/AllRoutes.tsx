import React from 'react';
import {Route, Routes, BrowserRouter, Outlet, Navigate} from 'react-router-dom';

import {pathConfig} from '@global-config/path-config';

import {ArenaGames, Challenge, FunGames, GameRoute, LevelsGames, StudyStage, StudyStageOutlet} from '@components/routes';
import {MainOutlet} from '@components/routes-wrapper/all-routes/MainOutlet';
import {NotFound} from '@components/routes/not-found';

export const AllRoutes = () =>
    <BrowserRouter>
        <Routes>
            <Route path={`${pathConfig.base}/`} element={<MainOutlet/>}>
                <Route index element={<Root/>} />
                <Route path={pathConfig.levels} element={<Root/>} />
                <Route path={pathConfig.oldChallenge} element={<Homework/>} />
                <Route path={pathConfig.level} element={<StudyStageOutlet/>}>
                    <Route index element={<StudyStage/>}/>
                    <Route path={pathConfig.games} element={<Outlet/>}>
                        <Route index element={<LevelsGames/>}/>
                        <Route path=":gameName" element={<GameRoute section={'general'}/>}/>
                    </Route>
                    <Route path={pathConfig.funGames} element={<Outlet/>}>
                        <Route index element={<FunGames/>}/>
                        <Route path=":gameName" element={<GameRoute section={'fun'}/>}/>
                    </Route>
                    <Route path={pathConfig.arenaGames} element={<Outlet/>}>
                        <Route index element={<ArenaGames/>}/>
                        <Route path=":gameName" element={<GameRoute section={'arena'}/>}/>
                    </Route>
                    <Route path={pathConfig.challenge} element={<Challenge/>} />
                </Route>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>;

const Root = () => <Navigate to={pathConfig.level} />;
const Homework = () => <Navigate to={`../level/${pathConfig.challenge}`} />;