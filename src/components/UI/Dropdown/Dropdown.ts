import { styled } from 'styletron-react';
import theme from '@themes/default';

interface Props {
  $centerOnMobile?: boolean;
}

const Dropdown = styled('div', ({$centerOnMobile}: Props) => ({
  position: 'absolute',
  top: 'calc(100% + 7px)',
  left: $centerOnMobile ? '50%' : '0',
  transform: $centerOnMobile ? 'translateX(-50%)' : 'none',
  minWidth: '100%',
  padding: '6px',
  borderRadius: '8px',
  border: `1px solid ${theme.colors.purpleLight}`,
  background: theme.colors.white,
  boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
  zIndex: '1',
  ':before': {
    content: '""',
    position: 'absolute',
    bottom: '100%',
    left: $centerOnMobile ? '50%' : '14px',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0 5.5px 6px 5.5px',
    borderColor: `transparent transparent ${theme.colors.purpleLight} transparent`
  },
  '@media screen and (min-width: 786px)': {
    left: '0',
    transform: 'none',
    ':before': {
      left: '14px'
    }
  }
}));

export default Dropdown;
