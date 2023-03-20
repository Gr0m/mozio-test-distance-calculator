import { styled } from 'styletron-react';
import theme from '@themes/default';

interface Props {
  $x?: boolean;
}

const CrossButton = styled('button', ({$x}: Props) => ({
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  border: `1px solid ${theme.colors.purpleDark}`,
  color: theme.colors.purpleDark,
  background: 'none',
  fontSize: '0',
  cursor: 'pointer',
  transition: `background ${theme.transitions.fast}, color ${theme.transitions.fast}`,
  transform: $x ? 'rotate(45deg)' : 'none',
  ':hover': {
    background: theme.colors.purpleDark,
    color: theme.colors.white
  },
  ':before': {
    content: '"+"',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) translateY(-0.5px)',
    fontSize: '12px'
  }
}));

export default CrossButton;
