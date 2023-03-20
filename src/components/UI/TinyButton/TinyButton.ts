import { styled } from 'styletron-react';
import theme from '@themes/default';

const TinyButton = styled('button', {
  height: '21px',
  lineHeight: '21px',
  minWidth: '21px',
  borderRadius: '4px',
  border: 'none',
  padding: '0 7px',
  background: theme.colors.purpleLight,
  color: theme.colors.white,
  fontSize: '12px',
  cursor: 'pointer',
  transition: `background ${theme.transitions.fast}`,
  textAlign: 'center',
  ':hover': {
    background: theme.colors.purpleDark
  }
});

export default TinyButton;
