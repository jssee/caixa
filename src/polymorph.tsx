import React, { ElementType, FunctionComponent } from 'react';
import {
  omit,
  spaceSet,
  backgroundSet,
  borderSet,
  colorSet,
  displaySet,
  flexSet,
  gridSet,
  layoutSet,
  outlineSet,
  textSet,
  transformSet,
} from 'onno-react';
import { PolymorphProps } from './types/component';

const omitProps = omit({
  propsKeys: [
    'as',
    ...backgroundSet.options.propsKeys,
    ...borderSet.options.propsKeys,
    ...colorSet.options.propsKeys,
    ...displaySet.options.propsKeys,
    ...flexSet.options.propsKeys,
    ...gridSet.options.propsKeys,
    ...layoutSet.options.propsKeys,
    ...outlineSet.options.propsKeys,
    ...spaceSet.options.propsKeys,
    ...textSet.options.propsKeys,
    ...transformSet.options.propsKeys,
  ],
});

export function polymorph<P extends unknown>(
  el: ElementType
): FunctionComponent<PolymorphProps & P> {
  return props => {
    const Component = props.as || el;
    return <Component {...omitProps(props)} />;
  };
}
