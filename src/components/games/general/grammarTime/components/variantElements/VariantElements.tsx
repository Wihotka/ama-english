import React from 'react';
import {Variant} from './variant/Variant';

import {GrammarTime_VariantElement} from '../../type';

import styles from './style.scss';

type VariantElementsP = {
    variantElements:GrammarTime_VariantElement[];
    userElements:(GrammarTime_VariantElement | null)[];
};

export const VariantElements = ({
    variantElements,
    userElements,
}:VariantElementsP) => {
    const userElementsArray = userElements
        .map((el) => (el ? el.id : null))
        .filter((v):v is number => v !== null);
        
    const isUsed = (id:number) => userElementsArray.includes(id);

    return (
        <div className={styles.variantElementsContainer}>
            {variantElements.map((v) => (
                <Variant variantElement={v} key={v.id} isUsed={isUsed(v.id)} />
            ))}
        </div>
    );
};
