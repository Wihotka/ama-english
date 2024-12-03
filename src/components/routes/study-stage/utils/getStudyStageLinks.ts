import {store} from '@store';
import {Metadata} from '@custom-types';
import {pathConfig} from '@global-config/path-config';
import {StudyStageLinkT} from '@components/routes/study-stage/types';

export const StudyStageLinks:Array<StudyStageLinkT> = [
    {
        name: 'challenge',
        path: pathConfig.challenge,
        disabled: false
    },
    {
        name: 'vocabulary',
        isExternal: true,
        path: pathConfig.vocabulary,
        disabled: !(store.getState().metadata.sections.vocabulary)
    },
    {
        name: 'textbook',
        isExternal: true,
        path: pathConfig.textbook,
        disabled: false
    },
    {
        name: 'games',
        path: pathConfig.games,
        disabled: false
    },
    {
        name: 'fun',
        path: pathConfig.funGames,
        disabled: false
    },
    {
        name: 'arena',
        path: pathConfig.arenaGames,
        disabled: false
    },
];

export const getStudyStageLinks = (metadataSections:Metadata['sections']) => {
    if (!metadataSections.hometask.status || !metadataSections.hometask.data || !metadataSections.hometask.data.active)
        return StudyStageLinks.filter((link) => link.name !== 'challenge');

    return StudyStageLinks;
};
