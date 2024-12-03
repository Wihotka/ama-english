import React from 'react';
import {Popover, PopoverProps} from 'react-tiny-popover';

import styles from './styles.scss';

export const CustomPopover = (p:PopoverProps) => {
    const {children} = p;

    return (
        <Popover
            {...p}
            containerClassName={styles.popoverContainer}
        >
            <span>{children}</span>
        </Popover>
    );
};

/*!!!README якщо прибрати span з 14-їй строки, то всі поповери в які передається дочернім реакт компонент поламаються!!! */