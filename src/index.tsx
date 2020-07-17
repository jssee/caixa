import styled from './styled';
import { propTypes } from 'onno-react';
import { boxSet } from './renderers/box';
import { BoxProps } from './types/component';
import { polymorph } from './polymorph';

export const Box = styled(polymorph<BoxProps>('div'))<BoxProps>(boxSet);

Box.displayName = 'Box';

Box.propTypes = propTypes([boxSet]);
