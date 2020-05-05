import { GestureResponderEvent } from 'react-native';

import { ColorsButtonOptions } from '../../../styles/theme/colors';

import { TextOptions } from '../../../styles/theme/fonts';

export type Props = {
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