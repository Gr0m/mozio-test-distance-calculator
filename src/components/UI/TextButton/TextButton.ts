import { styled } from 'styletron-react';
import theme from '@themes/default';

const TextButton = styled('button', {
  border: 'none',
  background: 'none',
  display: 'inline-block',
  verticalAlign: 'middle',
  color: theme.colors.purpleDark,
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: '500',
  cursor: 'pointer',
  padding: '0',
  transition: `color ${theme.transitions.fast}`,
  ':hover': {
    color: theme.colors.purpleLight
  }
});

export default TextButton;
