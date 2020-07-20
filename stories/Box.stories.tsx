import React from 'react';
import { Box } from '../src/index';

export default {
  title: 'Welcome',
};
const foo = 'foo';

const styles = {
  bg: 'dodgerblue',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = () => (
  <Box
    d="flex"
    color="red"
    mx={3}
    px={32}
    ff="sans-serif"
    fw="bold"
    {...styles}
  >
    <div>foo</div>
    <div>{foo}</div>
  </Box>
);
