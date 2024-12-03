import React from 'react';
import {getOrderArrForMapping} from 'js-data-utils';

import {globalGameConfig} from '@global-config/game';

// import {Star} from '@components/common/game/components';

import styles from './styles.scss';

type P = {
    starsQty:number;
    progressPercent:number;
    valuesThresholds:Array<number>;
};

export const Stars = ({}:P) => <div className={styles.stars}>
    {getOrderArrForMapping(globalGameConfig.maxStarsQty).map((star, index) => 
    // const isComplete = starsQty > index;

        <i key={index}>
            {/*<Star isNotActive={!isComplete} valuesThresholds={valuesThresholds} progressPercent={progressPercent} />*/}
        </i>
    )}
</div>;