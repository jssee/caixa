import { Primitive, AliasObject, ThemeObject } from 'onno';
export type Key = string;
export type Keys = Key[];
export type Nil = null | undefined;
export interface Alias<T = Primitive> {
  alias: Key;
  value: AliasObject<T> | T;
}
export type ThemeArrayValue<T> = Alias<T> | T;
export type ThemeArray<T = Primitive> = ThemeArrayValue<T>[];
export interface ThemeObject<T = Primitive> {
  [key: string]: ThemeObject<T> | ThemeArray<T> | T;
}
export type ThemeValue<T = Primitive> = ThemeArray<T> | ThemeObject<T> | Nil;
export type Breakpoints<T = Primitive> = ThemeArray<T> | Nil;
export interface Theme {
  [key: string]: ThemeValue;
  // Breakpoints
  breakpoints?: Breakpoints;
  // Animation
  animations?: ThemeValue;
  transitions?: ThemeValue;
  // Border
  borders?: ThemeValue;
  borderRadii?: ThemeValue;
  borderStyles?: ThemeValue;
  borderWidths?: ThemeValue;
  // Color
  colors?: ThemeValue;
  // Display
  opacities?: ThemeValue;
  // Layout
  sizes?: ThemeValue;
  widths?: ThemeValue;
  minWidths?: ThemeValue;
  maxWidths?: ThemeValue;
  heights?: ThemeValue;
  minHeights?: ThemeValue;
  maxHeights?: ThemeValue;
  zIndices?: ThemeValue;
  // Outline
  outlines?: ThemeValue;
  outlineOffsets?: ThemeValue;
  outlineStyles?: ThemeValue;
  outlineWidths?: ThemeValue;
  // Shadow
  boxShadows?: ThemeValue;
  textShadows?: ThemeValue;
  // Space
  spaces?: ThemeValue;
  // Text
  fontSizes?: ThemeValue;
  fontFamilies?: ThemeValue;
  fontWeights?: ThemeValue;
  lineHeights?: ThemeValue;
  letterSpacings?: ThemeValue;
  // Variants
  textStyles?: ThemeValue;
  colorStyles?: ThemeValue;
  buttonStyles?: ThemeValue;
  globalStyles?: ThemeValue;
  // Components
  components?: ThemeValue;
}
export interface ThemeProps {
  theme?: Theme;
}

export interface Props extends ThemeProps {
  [key: string]: any;
}
