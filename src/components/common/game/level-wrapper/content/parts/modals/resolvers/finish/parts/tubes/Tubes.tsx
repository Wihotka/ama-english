import React from 'react';
import {classNames} from 'js-data-utils';
import styled from 'styled-components';

import styles from './styles.scss';

const Ray = styled.div`
    background: ${props => props.theme.colors.gradient16};
`;

export const Tubes = () => {
    const imagesArr = ['tubes', 'rightTubes', 'rays'];

    return (
        <>
            {imagesArr.map((imgName:string, index:number) => (
                imgName === 'rays'
                    ? <div key={index} className={styles.raysWrap}>
                        {new Array(7).fill(null).map((_, rayIndex) => <Ray key={rayIndex}/>)}
                    </div>
                    : <img
                        key={index}
                        className={classNames(styles.img, styles[imgName])}
                        src={require(`/assets/img/modals/${imgName === 'rightTubes' ? 'tubes' : imgName}.png`)}
                        alt={''}/>
            ))}
        </>
    );
};