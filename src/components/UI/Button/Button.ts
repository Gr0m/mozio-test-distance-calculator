import { styled } from 'styletron-react';
import theme from '@themes/default';

const Button = styled('button', {
  padding: '0 12px',
  background: theme.colors.black,
  border: `1px solid ${theme.colors.grey}`,
  borderRadius: '4px',
  color: theme.colors.white,
  cursor: 'pointer',
  transition: `background ${theme.transitions.fast}`,
  fontSize: '14px',
  lineHeight: '38px',
  fontWeight: '500',
  ':hover': {
    background: theme.colors.purpleDark
  },
  ':disabled': {
    background: theme.colors.grey,
    cursor: 'not-allowed'
  }
});

export default Button;
