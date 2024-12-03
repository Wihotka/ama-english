import React from 'react';
import styled from 'styled-components';

const NumberWrapperElem = styled.div`
    background: ${(props) => props.theme.colors.color6};
    boxShadow: 0px 4px 0px ${(props) => props.theme.colors.color8};
`;

type P = {
    counter:number;
};

export const NumberWrapper = ({counter}:P) => (
    <NumberWrapperElem>
        {counter}
    </NumberWrapperElem>
);
