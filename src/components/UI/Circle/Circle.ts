import { styled } from 'styletron-react';
import theme from '@themes/default';

const Circle = styled('div', {
  width: '13px',
  height: '13px',
  borderRadius: '50%',
  border: `1px solid ${theme.colors.black}`,
});

export default Circle;
