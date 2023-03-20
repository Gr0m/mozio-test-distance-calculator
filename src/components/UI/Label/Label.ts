import { styled } from 'styletron-react';
import theme from '@themes/default';

const Label = styled('label', {
  display: 'block',
  marginBottom: '5px',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '1.33em',
  color: theme.colors.black
});

export default Label;
