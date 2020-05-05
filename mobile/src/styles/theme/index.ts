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
      primary: colors.yellow,
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
      def: {
        backgroundColor: colors.black,
        textColor: colors.white,
      },
      warn: {
        backgroundColor: colors.red,
        textColor: colors.white,
      }
    },
  },
  units: {
    spacing: {
      none: units.spacing.none,
      xxxSmall: units.spacing.xxxSmall,
      xxSmall: units.spacing.xxSmall,
      xSmall: units.spacing.xSmall,
      small: units.spacing.small,
      medium: units.spacing.medium,
      large: units.spacing.large,
      xLarge: units.spacing.xLarge,
      xxLarge: units.spacing.xxLarge,
      xxxLarge: units.spacing.xxxLarge,
      xxxxLarge: units.spacing.xxxxLarge,
      ultraLarge: units.spacing.ultraLarge,
    },
    borderRadius: {
      xxSmall: units.borderRadius.xxSmall,
      xSmall: units.borderRadius.xSmall,
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