import React from 'react';

import {WithBorGrad} from '@components/common/elements';
import styles from './styles.scss';
import {classNames} from 'js-data-utils';

type P = {
    outerClassName?:string;
    children?:React.ReactNode;
    // ref?:RefObject<HTMLDivElement>;
};

export const FieldWrap = React.forwardRef<HTMLDivElement, P>((p, ref) => {
    const {children, outerClassName = ''} = p;
    const outerCN = classNames(styles.outer, outerClassName);

    // const ref = React.createRef<HTMLButtonElement>();
    //
    // return <FancyButton ref={ref}>
    //     <button>tttt</button>
    // </FancyButton>;

    return (
        <WithBorGrad borderWidth={'8px'} borderOpacity={.48} className={outerCN} ref={ref}>
            {children}
        </WithBorGrad>
    );
});

// type ButtonProps = React.HTMLProps<HTMLButtonElement>;
//
// const FancyButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
//     <button type="button" ref={ref} className="FancyButton">
//         {props.children}
//     </button>
// ));
