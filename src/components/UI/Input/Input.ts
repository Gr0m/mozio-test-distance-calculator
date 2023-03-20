import { styled } from 'styletron-react';
import theme from '@themes/default';

interface Props {
  $error?: string;
  $limitedWidth?: boolean;
}

const Input = styled('input', ({ $error, $limitedWidth }: Props) => ({
  display: 'block',
  width: $limitedWidth ? '96px' : '100%',
  height: '32px',
  background: theme.colors.white,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: $error ? theme.colors.red : theme.colors.grey,
  borderRadius: '6px',
  padding: '0 10px',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '32px',
  color: $error ? theme.colors.red : theme.colors.black,
  outline: 'none',
  transition: `border-color ${theme.transitions.fast}, color ${theme.transitions.fast}`,
  ':focus': {
    borderColor: $error ? theme.colors.red : theme.colors.purpleLight
  },
  ':hover': {
    borderColor: $error ? theme.colors.red : theme.colors.purpleLight
  }
}));

export default Input;
