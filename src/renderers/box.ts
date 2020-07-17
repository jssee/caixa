import {
  compose,
  colorStyle,
  ColorStyleProps,
  textStyle,
  TextStyleProps,
  backgroundSet,
  BackgroundSetProps,
  BackgroundSetStyle,
  borderSet,
  BorderSetProps,
  BorderSetStyle,
  displaySet,
  DisplaySetProps,
  DisplaySetStyle,
  layoutSet,
  LayoutSetProps,
  LayoutSetStyle,
  outlineSet,
  OutlineSetProps,
  OutlineSetStyle,
  spaceSet,
  SpaceSetProps,
  SpaceSetStyle,
  textSet,
  TextSetProps,
  TextSetStyle,
  transformSet,
  TransformSetProps,
  TransformSetStyle,
} from 'onno-react';

export type BoxSetProps = ColorStyleProps &
  TextStyleProps &
  BackgroundSetProps &
  BorderSetProps &
  DisplaySetProps &
  LayoutSetProps &
  OutlineSetProps &
  SpaceSetProps &
  TextSetProps &
  TransformSetProps;

export type BoxSetStyle = BackgroundSetStyle &
  BorderSetStyle &
  DisplaySetStyle &
  LayoutSetStyle &
  OutlineSetStyle &
  SpaceSetStyle &
  TextSetStyle &
  TransformSetStyle;

export const boxSet = compose<BoxSetProps, BoxSetStyle>({
  name: 'box',
  renderers: [
    colorStyle,
    textStyle,
    backgroundSet,
    borderSet,
    displaySet,
    layoutSet,
    outlineSet,
    spaceSet,
    textSet,
    transformSet,
  ],
});
