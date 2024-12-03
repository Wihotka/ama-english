import React, {FC, useEffect, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {getNowDateUtc, upFirstLetter} from 'js-data-utils';
import {clearAllGameTimeoutInterval, rateGetter} from 'amakids-games-utils-and-generations/lib/utils';

import {Subject} from '@global-config/subject';
import {globalGameConfig, savingData} from '@global-config/game';
import {useMoveToHomework} from '@lib/custom-hooks';
import {metadataSelectors} from '@reducers/metadata/selectors';

import {CustomIcon} from '@components/common/elements';
import {LocalizedText} from '@components/common/localized-text';

import {calculateGameTime, getIndicators, speakWinPhrase} from './utils'; 
import {runSaveData} from './saving-actions';

import {FeedbackChecker, ImagesStars, Tubes} from './parts';

import {TemplateModal} from '../../template';

import styles from './styles.scss';
import {DefaultGame, FinModalIndicators, GameParams} from '@custom-types';
import {
    SavingGameP
} from '@components/common/game/level-wrapper/content/parts/modals/resolvers/finish/saving-actions/types';

type ModalP = {
    progressPercent:number;
    gameTime:DefaultGame['gameTime'];
    gameParams:GameParams;
    getIndicators:() => FinModalIndicators;
};

export const GameFinish:FC<ModalP> = (p) => {
    const {progressPercent, gameTime, getIndicators: indicatorsGetter, gameParams} = p;
    const [dataSavingStatus, setDataSavingStatus] = useState(savingData.saving);
    const moveToHomework = useMoveToHomework();
    const {id: userId} = useSelector(metadataSelectors.user);

    const {gameSettings, gameConfig} = gameParams;

    const {valuesThresholds, hometaskID = 0, gameName, gameMode} = gameConfig;
    const {level, gameTime: maxGameTime} = gameSettings;

    const finalValuesThresholds = Array.isArray(valuesThresholds) ? valuesThresholds : valuesThresholds[level];

    const starsQty = rateGetter(progressPercent, finalValuesThresholds, [0, 1, 2, 3]);
    const success = starsQty >= 1;
    const finalGameTime = calculateGameTime(gameTime);

    const formData:SavingGameP['formData'] = {
        gameData: {
            userId,
            gameName,
            gameFinishDate: getNowDateUtc(),
            gameSettings,
            gameResult: {
                success,
            },
            section: Subject.name.toString()
        },
        hometaskId: hometaskID,
        subjectID: +Subject.id
    };

    useEffect(() => {
        let isSubscribed = true;

        if (success) {
            speakWinPhrase();
        }

        clearAllGameTimeoutInterval();

        runSaveData({isSubscribed, formData, moveToHomework, setDataSavingStatus});

        return () => {
            isSubscribed = false;
        };
    }, []);

    const indicatorsTable = useMemo(() =>
        getIndicators(maxGameTime && (finalGameTime > +maxGameTime) ? +maxGameTime : finalGameTime, indicatorsGetter),
    [finalGameTime, indicatorsGetter]);

    const afterLevelText = {
        path: 'modals/translation',
        name: `gameFinish.success${upFirstLetter(success.toString())}`
    };
    const afterLevelSmallText = {
        path: 'modals/translation',
        name: `gameFinish.successSmall${upFirstLetter(success.toString())}`
    };

    const isNeedShowFeedbackChecker = globalGameConfig.gamesModeToIncrementTriesToShowFeedbackWindow.includes(gameMode);

    return (
        <div className={styles.finishOuter}>
            {success && <Tubes/>}
            {isNeedShowFeedbackChecker && <FeedbackChecker key={1} gameName={gameName}/>}
            <ImagesStars starsQty={starsQty}/>
            <TemplateModal
                level={null}
                wrapCN={styles.finishInner}
                afterLevelText={afterLevelText}
                afterLevelSmallText={afterLevelSmallText}
                table={indicatorsTable}
                beforeButtonBlock={<span className={styles.savingStatus}>
                    <span className={styles.savingText}><LocalizedText name={`gameFinish.${dataSavingStatus}`}
                        path={'modals/translation'}/></span>
                    <span>{dataSavingStatus === 'saving'
                        ? <CustomIcon type={'loading'} style={{margin: '15px 0 0 5px', fontSize: '40px'}}/>
                        : dataSavingStatus === 'successSave'
                            ? <CustomIcon type={'successSave'} style={{margin: '10px 0 0 5px', fontSize: '40px'}}/>
                            : <LocalizedText name={'gameFinish.writeToHelp'} path={'modals/translation'}/>}

                    </span>
                </span>}>
            </TemplateModal>
        </div>
    );
};
