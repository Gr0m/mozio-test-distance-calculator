// X button
import { styled } from 'styletron-react';
import theme from '@themes/default';

const ClearButton = styled('button', {
  position: 'relative',
  display: 'block',
  width: '14px',
  height: '14px',
  background: 'transparent',
  border: 'none',
  fontSize: '0',
  cursor: 'pointer',
  '::before': {
    content: '"✕"',
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: theme.colors.purpleDark,
    fontSize: '18px',
    transform: 'translate(-50%, -50%)',
    transition: `color ${theme.transitions.fast}`,
  },
  ':hover::before': {
    color: theme.colors.purpleLight,
  }
});

export default ClearButton;
