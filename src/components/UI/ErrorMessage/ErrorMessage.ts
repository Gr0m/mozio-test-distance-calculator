import { styled } from 'styletron-react';
import theme from '@themes/default';

const ErrorMessage = styled('div', {
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '1.33em',
  color: theme.colors.red,
  whiteSpace: 'nowrap'
});

export default ErrorMessage;
