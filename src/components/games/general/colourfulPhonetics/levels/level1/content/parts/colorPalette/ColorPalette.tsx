import React from 'react';
import styled from 'styled-components';

import {MarkerDots} from './markerDots';
import {Markers} from './markers';

import styles from './style.scss';

import {ColorPaletteP} from '../../../type';

const PaletteContainer = styled.div`
  background: ${props => props.theme.colors.gradient10};
`;

export const ColorPalette = (props:ColorPaletteP) => (
    <PaletteContainer className={styles.colorPaletteContainer}>
        <div className={styles.colorPaletteContent}>
            <Markers {...props} />
            <MarkerDots {...props} />
        </div>
    </PaletteContainer>
);
