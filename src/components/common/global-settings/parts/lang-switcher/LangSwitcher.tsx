import React from 'react';
import i18n from 'i18next';
import {useSelector} from 'react-redux';
import {classNames} from 'js-data-utils';

import {StoreInner} from '@store';
import {setAppLang} from '@reducers/langCode/dispatchers';

import {SubTitle} from '../sub-title';
import styles from './styles.scss';
import {metadataSelectors} from '@reducers/metadata/selectors';

const baseLangCodes = ['uk'];

export const LangSwitcher = () => {
    const nativeLangCode = useSelector(metadataSelectors.nativeLangCode);
    // const nativeLangCode = 'lv';
    const langCode = useSelector((store:StoreInner) => store.langCode);

    const allowedLang = baseLangCodes.includes(nativeLangCode)
        ? baseLangCodes
        : [...baseLangCodes, nativeLangCode];

    if (allowedLang.length < 2) {
        return null;
    }

    const onClick = (lng:string) => {
        setAppLang(lng);
        i18n.changeLanguage(lng).then();
    };

    return (
        <div>
            <SubTitle name={'lang'} />
            <div className={styles.buttons}>
                {
                    allowedLang.map((lng) => {
                        const isActive = langCode === lng;

                        const className = classNames(styles.btn, (isActive && styles.btn_active));

                        return (
                            <button
                                key={lng}
                                className={className}
                                onClick={() => onClick(lng)}>
                                <img src={require(`/assets/img/interface/langCodes/${lng}.png`)} alt={lng}/>
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
};
