import { styled } from 'styletron-react';

interface Props {
  $grow?: boolean;
  $extraMarginLeft?: boolean;
  $extraMarginRight?: boolean;
  $mobileFullWidth?: boolean;
}

const Column = styled('div', ({$grow, $extraMarginLeft, $extraMarginRight, $mobileFullWidth}: Props) => ({
  flexGrow: $grow ? '1' : '0',
  width: $mobileFullWidth ? '100%' : 'auto',
  marginTop: $mobileFullWidth ? '32px' : '0',
  marginLeft: $extraMarginLeft ? '58px' : '24px',
  marginRight: $extraMarginRight ? '58px' : '24px',
  ':first-child': {
    marginLeft: '0'
  },
  ':last-child': {
    marginRight: '0'
  },
  '@media screen and (min-width: 786px)': {
    marginTop: 0,
    width: 'auto'
  }
}));

export default Column;
