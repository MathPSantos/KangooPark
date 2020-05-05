import { GestureResponderEvent } from 'react-native';

import { ColorsButtonOptions } from '../../../styles/theme/colors';

import { TextOptions } from '../../../styles/theme/fonts';

import { UnitsSpacingOptions } from '../../../styles/theme/units';

export type ButtonProps = {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  testID?: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: ColorsButtonOptions;
};

export type StyledProps = {
  variant: ColorsButtonOptions;
  fontFamily?: TextOptions;
};