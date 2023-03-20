import { styled } from 'styletron-react';
import theme from '@themes/default';

const DropdownOption = styled('button', {
  display: 'block',
  width: '100%',
  height: '28px',
  borderRadius: '6px',
  marginBottom: '1px',
  padding: '0 6px',
  border: 'none',
  background: 'transparent',
  color: theme.colors.black,
  cursor: 'pointer',
  lineHeight: '28px',
  fontSize: '12px',
  fontWeight: '500',
  textAlign: 'left',
  transition: `background ${theme.transitions.fast}`,
  ':hover:not(:disabled)': {
    background: theme.colors.purpleLight
  },
  ':last-child': {
    marginBottom: '0'
  },
  ':disabled': {
    cursor: 'default'
  }
});

export default DropdownOption;
