export default {
    yellow: '#FDBE2C',
    red: '#E02B20',
    disabled: '#cccccc',
    lightGray: '#F3F3F3',
    white: '#ffffff',
    gray: '#434343',
    black: '#131313',
    none: 'transparent',
  };
  
  export interface ColorPropsBackground {
    /** Primary is: yellow... */
    primary: string;
    secondary: string;
    tertiary: string;
    error: string;
  }
  
  export interface ColorsPropsText {
    primary: string;
    secondary: string;
    tertiary: string;
    fourth: string;
    disabled: string;
    white: string;
  }
  
  export type ButtonColorsScheme = {
    borderColor?: string;
    backgroundColor: string;
    textColor: string;
  };
  
  export interface ColorsPropsButton {
    base: ButtonColorsScheme;
  }
  
  export interface ColorsProps {
    background: ColorPropsBackground;
    text: ColorsPropsText;
    button: ColorsPropsButton;
  }
  
  // general export for components
  export type ColorsBackgroundOptions = keyof ColorPropsBackground;
  
  export type ColorsTextOptions = keyof ColorsPropsText;
  
  export type ColorsButtonOptions = keyof ColorsPropsButton;