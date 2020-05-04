import { DefaultTheme } from 'styled-components';

import { ReactNode } from 'react';

import { ColorsBackgroundOptions } from '../../styles/theme/colors';

import { UnitsSpacingOptions } from '../../styles/theme/units';

export type GridProps = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type GridAlign =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';

export interface GridAlignProps {
  flexDirection: GridProps;
  theme?: DefaultTheme;
}

export interface CustomGridProps {
  children?: ReactNode;
  flexDirection?: GridProps;
  alignItems?: GridAlign;
  justifyContent?: GridAlign;
  marginTop?: UnitsSpacingOptions | 'auto';
  marginBottom?: UnitsSpacingOptions;
  marginLeft?: UnitsSpacingOptions;
  marginRight?: UnitsSpacingOptions;
  paddingTop?: UnitsSpacingOptions;
  paddingBottom?: UnitsSpacingOptions;
  paddingLeft?: UnitsSpacingOptions;
  paddingRight?: UnitsSpacingOptions;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  height?: number;
  flex?: number;
  backgroundColor?: ColorsBackgroundOptions;
  zIndex?: number;
  testID?: string;
}

export interface CustomProps extends Partial<GridAlignProps> {
  marginTop?: UnitsSpacingOptions | 'auto';
  marginBottom?: UnitsSpacingOptions;
  marginLeft?: UnitsSpacingOptions;
  marginRight?: UnitsSpacingOptions;
  paddingTop?: UnitsSpacingOptions;
  paddingBottom?: UnitsSpacingOptions;
  paddingLeft?: UnitsSpacingOptions;
  paddingRight?: UnitsSpacingOptions;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  height?: number;
}