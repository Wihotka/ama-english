import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import {classNames} from 'js-data-utils';
import {useTranslation} from 'react-i18next';

import {getGameIconSrc} from '@lib/game/utils';
import {WithBorGrad} from '@components/common/elements';
import {LocalizedText} from '@components/common';
import {GameTags as GameTagsEnum} from '@games-info/types';

import styles from './styles.scss';

import {FunGame, FunGamesInfo, GameInfo, GamesSection, GeneralGamesInfo, ArenaGamesInfo} from '@games-info';

import {StoreInner} from '@store';
import {subjectInfoSelectors} from '@reducers/subject-info/selectors';
import {metadataSelectors} from '@store/reducers/metadata/selectors';

type P = {
    games:GeneralGamesInfo | FunGamesInfo;
    gamesSection:GamesSection;
    selectGameHandler:(gameName:string) => void;
};

export const GamesList = ({games, gamesSection, selectGameHandler}:P) => {
    const {games: sectionGames = {}} = useSelector((store:StoreInner) => store.metadata);
    const {devModeInProd} = useSelector((store:StoreInner) => store.registry);
    const studyStage = useSelector(subjectInfoSelectors.studyStage);
    const nativeLangCode = useSelector(metadataSelectors.nativeLangCode);

    const needDisableGames = devModeInProd ? false : !isEmpty(sectionGames);
    const enabledSectionGames = sectionGames[gamesSection] || [];

    const [filtredGames, setFiltredGames] = useState<GeneralGamesInfo | FunGamesInfo | ArenaGamesInfo>(games);
    const [searchedGames, setSearchedGames] = useState<GeneralGamesInfo | FunGamesInfo | ArenaGamesInfo>(games);
    const [resultGames, setResultGames] = useState<GeneralGamesInfo | FunGamesInfo | ArenaGamesInfo>(games);

    // Обновляем список игр после смены этапа в настройках
    useEffect(() => {
        if (studyStage) {
            setFiltredGames(games);
            setSearchedGames(games);
            setResultGames(games);
        }
    }, [studyStage]);

    // Применяем поиск и фильтр для получения результирующего массива
    useEffect(() => {
        const finalGames = filtredGames.filter(filter => searchedGames.some(search => search.name === filter.name));

        setResultGames(finalGames);
    }, [filtredGames, searchedGames]);

    return (
        <>
            <div className={styles.topPanel}>
                {games[0].tags && <GameFilter tags={Object.values(GameTagsEnum)} games={games} searchFilter={setFiltredGames}/>}
                <GameSearch games={games} gamesSection={gamesSection} searchFilter={setSearchedGames}/>
            </div>
            <div className={styles.gamesList}>
                {resultGames.map(({name, tags, disabled}) => {

                    const finalDisabled = (name === 'makeYourChoice' && nativeLangCode === 'uk')
                        ? true
                        : disabled
                            ? true
                            : needDisableGames
                                ? !enabledSectionGames.includes(name)
                                : false;

                    if (finalDisabled) return null;

                    return (
                        <GameLink
                            key={name}
                            gameName={name}
                            disabled={finalDisabled}
                            tags={tags}
                            gamesSection={gamesSection}
                            selectGameHandler={selectGameHandler}
                        />
                    );
                })}
            </div>
        </>
    );
};

type LinkP = Pick<P, 'selectGameHandler'| 'gamesSection'> & {
    gameName:string;
    disabled:boolean;
    tags:GameInfo['tags']|FunGame['tags'];
};

const GameLink = (p:LinkP) => {
    const {gameName, tags, gamesSection, disabled, selectGameHandler} = p;
    const wrapCn = classNames(styles.gamesList_itemWrap, (disabled && styles.gamesList_itemWrap_disabled));

    return (
        <WithBorGrad borderWidth={'1px'} className={wrapCn}>
            <button disabled={disabled} className={styles.gamesList_item} onClick={() => selectGameHandler(gameName)}>
                <span className={styles.gamesList_itemTitle}>
                    <LocalizedText name={gameName} path={`/games/${gamesSection}/translation`}/>
                </span>
                {
                    disabled
                        ? <img className={styles.ImgDisabled} src={require('/assets/img/interface/icon-lock.svg')} alt={'lock'}/>
                        : <>{tags && <GameTags tags={tags}/>}
                            <img className={styles.gamesList_itemIcon} src={getGameIconSrc(gamesSection, gameName)} alt={`icon for ${gameName}`}/></>
                }
            </button>
        </WithBorGrad>
    );
};

const GameTags = ({tags = []}:Pick<LinkP, 'tags'>) =>
    <span className={styles.tags}>
        {tags.map((tag) =>
            (<span key={tag} className={styles.tags_tag}>
                <img className={styles.tags_tagImg} src={require(`_assets/img/games/tags/${tag}.png`)} alt={`icon for ${tag}`}/>
                <span className={styles.text}><LocalizedText name={tag} path={'/games/tags/translation'}/></span>
            </span>)
        )}
    </span>;

type SearchT = {
    games:GeneralGamesInfo | FunGamesInfo;
    gamesSection:GamesSection;
    searchFilter:React.Dispatch<React.SetStateAction<GeneralGamesInfo | FunGamesInfo>>;
};

const GameSearch = ({games, gamesSection, searchFilter}:SearchT) => {
    const [inputValue, setInputValue] = useState<string>('');

    const {t} = useTranslation(['games/translation', `games/${gamesSection}/translation`]);
    const placeholder = t('search', {ns: 'games/translation'});

    const handleChange = (inputText:string) => {
        inputText = inputText.trimStart().replace(/[^A-Za-z'` ]/ig, '').replace(/\s\s+/g, ' ');

        const filtredGames = games.filter(game => 
            t(game.name, {ns: `games/${gamesSection}/translation`})
                .toLowerCase()
                .replace(/[\s'`]/g, '')
                .includes(inputText.toLowerCase().replace(/[\s'`]/g, ''))
        );

        searchFilter(filtredGames);
        setInputValue(inputText);
    };

    return <div className={styles.searchWrapper}>
        <input
            type='text'
            value={inputValue}
            placeholder={placeholder}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
        />
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'>
            <path d='M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5Z' strokeWidth='2' strokeLinecap='round'/>
        </svg>
    </div>;
};

type FilterT = {
    tags:string[];
    games:GeneralGamesInfo | FunGamesInfo;
    searchFilter:React.Dispatch<React.SetStateAction<GeneralGamesInfo | FunGamesInfo>>;
};

const GameFilter = ({tags, games, searchFilter}:FilterT) => {
    const [filters, setFilters] = useState(tags.map(tag => ({
        name: tag,
        isActive: false
    })));

    const handleClick = (tag:string) => {
        setFilters(prev => prev.map(item =>
            item.name === tag ? {...item, isActive: !item.isActive} : item
        ));
    };

    useEffect(() => {
        const filtersArr = filters.map(item => item.isActive ? item.name : '').filter(item => item);
        
        if (!filtersArr.length) searchFilter(games);
        else {
            const filtredGames = games.filter(game => filtersArr.some(filter => (game.tags as string[])?.includes(filter)));

            searchFilter(filtredGames);
        }
    }, [filters]);

    return <div className={styles.filterWrapper}>
        {filters.map(tag =>
            (<span
                key={tag.name}
                onClick={() => handleClick(tag.name)}
                className={classNames(styles.tags_tag, tag.isActive && styles.active)}
            >
                <img className={styles.tags_tagImg} src={require(`_assets/img/games/tags/${tag.name}.png`)} alt={`icon for ${tag.name}`}/>
                <span className={styles.text}><LocalizedText name={tag.name} path={'/games/tags/translation'}/></span>
            </span>)
        )}
    </div>;
};
