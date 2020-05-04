import { ColorsTextOptions } from '../../styles/theme/colors';

import { TextOptions } from '../../styles/theme/fonts';

import { UnitsSpacingOptions } from '../../styles/theme/units';

export interface PropsBaseTitle {
    text: string | number | null;
    color?: ColorsTextOptions;
    testID?: string;
    align?: 'center' | 'left' | 'right';
    weight?: 'bold' | 'normal';
    lineHeight?: UnitsSpacingOptions;
    textDecorationStyle?: 'underline' | 'overline' | 'line-through';
    textDecorationStyleColor?: ColorsTextOptions;
    onPress?: () => void;
    numberOfLines?: number;
    marginLeft?: UnitsSpacingOptions;
    marginRight?: UnitsSpacingOptions;
    fontSize?: UnitsSpacingOptions;
    fontFamily?: TextOptions;
}

export interface PropsStyledBaseTitle {
    color?: ColorsTextOptions;
    align?: 'center' | 'left' | 'right';
    weight?: 'bold' | 'normal';
    marginLeft?: UnitsSpacingOptions;
    marginRight?: UnitsSpacingOptions;
    lineHeight?: UnitsSpacingOptions;
    textDecorationStyle?: 'underline' | 'overline' | 'line-through';
    textDecorationStyleColor?: ColorsTextOptions;
    fontSize?: UnitsSpacingOptions;
    fontFamily?: TextOptions;
}

export interface PropsSkeleton {
    width?: number;
    height?: number;
}