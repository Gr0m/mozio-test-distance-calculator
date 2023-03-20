import { styled } from 'styletron-react';
import theme from '@themes/default';

const Bubble = styled('div', {
  height: '24px',
  padding: '0 9px',
  border: `1px solid ${theme.colors.purpleDark}`,
  borderRadius: '4px',
  color: theme.colors.purpleDark,
  background: theme.colors.white,
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '22px',
  ':after': {
    content: '""',
    position: 'absolute',
    left: 'calc(100% - 2.2px)',
    top: '50%',
    marginTop: '-3px',
    width: '6px',
    height: '6px',
    transform: 'rotate(45deg)',
    background: theme.colors.white,
    borderTop: `1px solid ${theme.colors.purpleDark}`,
    borderRight: `1px solid ${theme.colors.purpleDark}`,
  }
});

export default Bubble;
