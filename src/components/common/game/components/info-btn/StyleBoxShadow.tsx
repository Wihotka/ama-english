import styled, {css} from 'styled-components';

const BigButtonShadow = css`
  ${(props) => css`
    background: linear-gradient(0deg, ${props.theme.colors.color5 + 'CC'}, ${props.theme.colors.color5 + 'CC'}), #ffffff;
    border: 1px solid ${props.theme.colors.color7};
    box-shadow: 0 8px 0 ${props.theme.colors.color8}, inset 0 0 10px ${props.theme.colors.color2 + 'CC'};

    @media screen and (max-width: 854px) and (orientation: landscape), screen and (max-width: 534px) and (orientation: portrait) {
      box-shadow: 0 6px 0 ${props.theme.colors.color8}, inset 0 0 6px ${props.theme.colors.color2 + 'CC'};
    }

    @media screen and (max-width: 732px) and (orientation: landscape), screen and (max-width: 412px) and (orientation: portrait) {
      box-shadow: 0 4px 0 ${props.theme.colors.color8}, inset 0 0 6px ${props.theme.colors.color2 + 'CC'};
    }

    &:hover {
      background: linear-gradient(0deg, ${props.theme.colors.color5 + 'A3'}, ${props.theme.colors.color5 + 'A3'}), #fff;
      box-shadow: 0 8px 0 ${props.theme.colors.color8}, inset 0 0 16px ${props.theme.colors.color2 + 'CC'};

      @media screen and (max-width: 854px) and (orientation: landscape), screen and (max-width: 534px) and (orientation: portrait) {
        box-shadow: 0 6px 0 ${props.theme.colors.color8}, inset 0 0 6px ${props.theme.colors.color2 + 'CC'};
      }

      @media screen and (max-width: 732px) and (orientation: landscape), screen and (max-width: 412px) and (orientation: portrait) {
        box-shadow: 0 4px 0 ${props.theme.colors.color8}, inset 0 0 10px ${props.theme.colors.color2 + 'CC'};
      }
    }

    &.pressed {
      transform: translateY(8px);
      box-shadow: 0 0 0 ${props.theme.colors.color8}, inset 0 0 10px ${props.theme.colors.color2 + 'CC'};
      
      &:hover {
        background: linear-gradient(0deg, ${props.theme.colors.color5 + 'CC'}, ${props.theme.colors.color5 + 'CC'}), #ffffff;
        box-shadow: 0 0 0 ${props.theme.colors.color8}, inset 0 0 10px ${props.theme.colors.color2 + 'CC'};
      }

      @media screen and (max-width: 854px) and (orientation: landscape), screen and (max-width: 534px) and (orientation: portrait) {
        transform: translateY(6px);
        box-shadow: 0 0 0 ${props.theme.colors.color8}, inset 0 0 6px ${props.theme.colors.color2 + 'CC'};
      }

      @media screen and (max-width: 732px) and (orientation: landscape), screen and (max-width: 412px) and (orientation: portrait) {
        transform: translateY(4px);
        box-shadow: 0 0 0 ${props.theme.colors.color8}, inset 0 0 6px ${props.theme.colors.color2 + 'CC'};
      }
    }
  `};
`;

const SmallButtonShadow = css`
  ${(props) => css`
    background: linear-gradient(0deg, ${props.theme.colors.color5 + 'CC'}, ${props.theme.colors.color5 + 'CC'}), #FFFFFF;
    box-shadow: 0 4px 0 ${props.theme.colors.color8}, inset 0 0 6px ${props.theme.colors.color2 + 'CC'};
    border: 1px solid ${props.theme.colors.color7};

    &.pressed, &.default:active {
      transform: translateY(4px);
      box-shadow: 0 0 0 ${props.theme.colors.color8}, inset 0 0 6px ${props.theme.colors.color2 + 'CC'};
      background: linear-gradient(0deg, ${props.theme.colors.color5 + 'CC'}, ${props.theme.colors.color5 + 'CC'}), #FFFFFF;
      
      &:hover {
        box-shadow: 0 0 0 ${props.theme.colors.color8}, inset 0 0 6px ${props.theme.colors.color2 + 'CC'};
        background: linear-gradient(0deg, ${props.theme.colors.color5 + 'CC'}, ${props.theme.colors.color5 + 'CC'}), #FFFFFF;
      }
    }
    
    &:hover {
      background: linear-gradient(0deg, ${props.theme.colors.color5 + 'A3'}, ${props.theme.colors.color5 + 'A3'}), #FFFFFF;
    }
  `}
`;

export const StyleBoxShadow = styled.button<{ size:'small' | 'big' }>`
  ${(props) => props.size === 'small' ? SmallButtonShadow : BigButtonShadow}
`;

