export default {
    spacing: {
        none: 0,
        xxs: 2,
        extraSmall: 4,
        small: 8,
        medium: 12,
        large: 18,
        xlarge: 24,
        xxlarge: 30,
        xxxlarge: 36,
        xxxxlarge: 42,
        extraLarge: 54,
    },
    borderRadius: {
        xxs: 2,
        extraSmall: 5,
        small: 10,
        medium: 15,
    },
    button: {
        font: 20,
        height: 50,
    },
    input: {
        font: 20,
        height: 50,
    },
};

export interface UnitPropsSpacing {
    none: number;
    xxs: number;
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
    xxxlarge: number;
    xxxxlarge: number;
    extraLarge: number;
}

export interface UnitPropsBorder {
    xxs: number;
    extraSmall: number;
    small: number;
    medium: number;
}

export interface UnitPropsButton {
    font: number;
    height: number;
}

export interface UnitPropsInput {
    font: number;
    height: number;
}

export type UnitsBorderRadiusOptions = keyof UnitPropsBorder;

export type UnitsSpacingOptions = keyof UnitPropsSpacing;

export type UnitsButtonOptions = keyof UnitPropsButton;

export type UnitsInputOptions = keyof UnitPropsInput;

export interface UnitsProps {
    spacing: UnitPropsSpacing;
    borderRadius: UnitPropsBorder;
    button: UnitPropsButton;
    input: UnitPropsInput;
}