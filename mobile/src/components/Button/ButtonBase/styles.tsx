import styled from 'styled-components/native';

import { StyledProps } from './interface';

export const Container = styled.TouchableOpacity<StyledProps>`
  width: 100%;
  background-color: ${({ theme, variant }) =>
    theme.colors.button[variant].backgroundColor};
  height: ${({ theme }) => theme.units.button.height}px;
  text-align: center;
  border-radius: ${({ theme }) => theme.units.borderRadius.extraSmall}px;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 5px 5px black;
`;

export const Label = styled.Text<StyledProps>`
  color: ${({ theme, variant }) => theme.colors.button[variant].textColor};
  font-size: ${({ theme }) => theme.units.button.font}px;
  ${({ fontFamily, theme }) =>
            fontFamily
                  ? { 'font-family': theme.fonts[fontFamily] }
                  : { 'font-family': theme.fonts.khandBold }};
  text-transform: uppercase;
`;