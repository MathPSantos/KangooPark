import 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

import colors, { ColorsProps } from './colors';

import fonts, { FontsProps } from './fonts';

import units, { UnitsProps } from './units';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsProps;
    units: UnitsProps;
    fonts: FontsProps;
  }
}

export const kangooparkTheme: DefaultTheme = {
  colors: {
    background: {
      primary: colors.lightGray,
      secondary: colors.gray,
      tertiary: colors.white,
      error: colors.red,
    },
    text: {
      primary: colors.black,
      secondary: colors.gray,
      tertiary: colors.yellow,
      fourth: colors.red,
      disabled: colors.disabled,
      white: colors.white,
    },
    button: {
      base: {
        backgroundColor: colors.yellow,
        textColor: colors.white,
      },
    },
  },
  units: {
    spacing: {
      none: units.spacing.none,
      xxs: units.spacing.xxs,
      extraSmall: units.spacing.extraSmall,
      small: units.spacing.small,
      medium: units.spacing.medium,
      large: units.spacing.large,
      xlarge: units.spacing.xlarge,
      xxlarge: units.spacing.xxlarge,
      xxxlarge: units.spacing.xxxlarge,
      xxxxlarge: units.spacing.xxxxlarge,
      extraLarge: units.spacing.extraLarge,
    },
    borderRadius: {
      xxs: units.borderRadius.xxs,
      extraSmall: units.borderRadius.extraSmall,
      small: units.borderRadius.small,
      medium: units.borderRadius.medium,
    },
    button: {
      font: units.button.font,
      height: units.button.height,
    },
    input: {
      font: units.input.font,
      height: units.input.height,
    },
  },
  fonts: {
    khandBold: fonts.khandBold,
    khandSemiBold: fonts.khandSemiBold,
    khandMedium: fonts.khandMedium,
  },
};