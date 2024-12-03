import React, {ReactElement} from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';

import {pathConfig} from '@global-config/path-config';
import {Btn, CustomIcon, Tooltip} from '@components/common/elements';

import {LocalizedText} from '@components/common';
import {Burger} from '@components/common/game/game-inner/content/parts/bottom-navigation/parts';

type P = {
    isPlaying:boolean;
    needShowGameBurger:boolean;
};

export const ExitBtn = ({isPlaying, needShowGameBurger}:P) => {
    const isHomework = !!new URLSearchParams(location.search).get('isHomework');

    const backBtnPath = useBackBtnPath(isHomework);

    const Component = backBtnPath !== pathConfig.root
        ? <Link to={backBtnPath}><ExitBtnC isHomework={isHomework}/></Link>
        : <a href={backBtnPath}><ExitBtnC isHomework={isHomework}/></a>;

    return isPlaying
        ? <PlayingGameBth Component={Component} isHomework={isHomework} needShowGameBurger={needShowGameBurger}/>
        : <>{Component}</>;
};

const ExitBtnC = ({isHomework}:{isHomework:boolean}) => {
    const {gameName} = useParams();
    const btnType = isHomework
        ? 'homework'
        : gameName
            ? 'gamesMenu'
            : 'exit';

    return (
        <Btn isRound>
            <CustomIcon fillColor={'#fff'} style={{fontSize: '32px'}} type={btnType} />
        </Btn>
    );
};

type PGBP = {
    Component:ReactElement;
    needShowGameBurger:boolean;
    isHomework:boolean;
};

const PlayingGameBth = ({Component, needShowGameBurger, isHomework}:PGBP) => {

    if (needShowGameBurger) {
        return <Burger isHomework={isHomework}/>;
    }

    return (
        <Tooltip
            overlayInnerStyle={{borderRadius: '56px'}}
            placement={'bottomLeft'}
            overlay={<TooltipContent isHomework={isHomework}/>}>
            {Component}
        </Tooltip>
    );
};

const TooltipContent = ({isHomework}:{isHomework:boolean}) => <p>
    <LocalizedText name={isHomework ? 'exitToChallenge' : 'exitToGames'} path={'games/translation'}/>
</p>;

const useBackBtnPath = (isHomework:boolean) => {
    const {pathname} = useLocation();

    const pathArr = pathname.split('/');

    pathArr.pop();

    if (isHomework) {
        pathArr.pop();

        return `${pathArr.join('/')}/${pathConfig.challenge}`;
    }

    const backBtnPath = pathArr.join('/');

    if (backBtnPath === pathConfig.base) {
        return pathConfig.root;
    }

    return backBtnPath ? backBtnPath : pathConfig.root;
};

