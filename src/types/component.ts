import React, { ElementType } from 'react';
import {
  BackgroundSetProps,
  BorderSetProps,
  ColorSetProps,
  DisplaySetProps,
  FlexChildSetProps,
  GridChildSetProps,
  LayoutSetProps,
  SpaceSetProps,
  TextSetProps,
  TransformSetProps,
} from 'onno-react';

export type BoxProps = BackgroundSetProps &
  BorderSetProps &
  ColorSetProps &
  SpaceSetProps &
  DisplaySetProps &
  FlexChildSetProps &
  GridChildSetProps &
  LayoutSetProps &
  TransformSetProps &
  PolymorphProps &
  TextSetProps &
  JSX.IntrinsicClassAttributes<{}> &
  React.HTMLAttributes<HTMLElement>;

export interface PolymorphProps {
  as?: ElementType;
}
