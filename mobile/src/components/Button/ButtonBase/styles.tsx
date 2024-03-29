import styled from 'styled-components/native';

import { StyledProps } from './interface';

import { UnitPropsSpacing } from '../../../styles/theme/units';

const DEFAULT_SPACING = 'none';

const getSpacingUnity = (
  spacing: UnitPropsSpacing,
  property: keyof UnitPropsSpacing | 'auto' | undefined,
): string => {
  if (property === 'auto') {
      return property;
  }
  return `${spacing[property || DEFAULT_SPACING]}px`;
};

export const Container = styled.TouchableOpacity<StyledProps>`
  width: 100%;
  height: ${({ theme }) => theme.units.button.height}px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme, variant }) =>
    theme.colors.button[variant].backgroundColor};
  border-radius: ${({ theme }) => theme.units.borderRadius.xSmall}px;
  elevation: 5;
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