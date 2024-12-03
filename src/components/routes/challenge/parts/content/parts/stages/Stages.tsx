import React from 'react';
import {classNames} from 'js-data-utils';

import {getGameIconSrc} from '@lib/game/utils';
import {getSettingsTable, LocalizedText, SettingsTable} from '@components/common';

import styles from './styles.scss';

import {HomeworkData} from '@components/routes/challenge/types';
import {Tooltip} from '@components/common/elements';
import {useTranslation} from 'react-i18next';

type P = {
    homeworkData:HomeworkData['homeworkData'];
};

export const Stages = ({homeworkData}:P) => {
    const {task, progress} = homeworkData;
    const {stages} = task;
    const {stageNow, levelsDone} = progress;

    const stagesArr = Object.values(stages);
    const currentStageIndex = stageNow - 1;

    return (
        <div className={styles.stages}>
            {stagesArr.map((item, idx) => {
                const {game, section, levels, settings} = item;

                const finalLevel = getStageLevel(currentStageIndex, levelsDone, levels, idx);
                const imgSrc = getGameIconSrc(section, game);
                const stageCn = getStageCN(currentStageIndex, idx);

                return (
                    <div key={idx} className={stageCn}>
                        <Tooltip
                            placement={'rightTop'}
                            trigger={'click'}
                            overlayStyle={{maxWidth: '493px'}}
                            overlay={<SettingsBlock settings={settings} />}>
                            <div className={styles.infoBtn}>
                                <div className={styles.text}> i </div>
                            </div>
                        </Tooltip>
                        <img className={styles.img} src={imgSrc} alt={game}/>
                        <p className={styles.name}><LocalizedText name={game} path={`games/${section}/translation`}/></p>
                        <p><LocalizedText name={'completed'} path={'challenge/translation'}/> {`${finalLevel}/${levels}`}</p>
                    </div>
                );
            })}
        </div>
    );
};

const SettingsBlock = ({settings}:{settings:any}) => {
    const {t} = useTranslation('settings/translation');
    const valuesLocalization:any = t('values', {returnObjects: true});

    const settingsTable = getSettingsTable(Object.keys(settings), settings, valuesLocalization);

    return (
        <div>
            <p className={styles.title}><LocalizedText name={'settings'} path={'settings/translation'} /></p>
            <SettingsTable table={settingsTable} wrapClassName={styles.table} isOneCol />
        </div>
    );
};

const getStageCN = (currentStageIndex:number, idx:number) => classNames(
    styles.stage,
    (idx < currentStageIndex
        ? styles.stage_completed
        : idx !==  currentStageIndex
            ? styles.stage_closed
            : '')
);

const getStageLevel = (currentStageIndex:number, level:number, levels:number|string, idx:number) =>
    currentStageIndex === idx // якщо поточний етап рівний рендеру
        ? level // вертаємо рівень поточного етапу
        : currentStageIndex > idx // якщо більше
            ? levels // вертаємо кількість рівнів етапу рендеру
            : 0; // інакше вертаємо 0