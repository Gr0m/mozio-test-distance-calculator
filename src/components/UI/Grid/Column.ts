import { styled } from 'styletron-react';

interface Props {
  $grow?: boolean;
  $extraMarginLeft?: boolean;
  $extraMarginRight?: boolean;
}

const Column = styled('div', ({$grow, $extraMarginLeft, $extraMarginRight}: Props) => ({
  flexGrow: $grow ? '1' : '0',
  marginLeft: $extraMarginLeft ? '58px' : '24px',
  marginRight: $extraMarginRight ? '58px' : '24px',
  ':first-child': {
    marginLeft: '0'
  },
  ':last-child': {
    marginRight: '0'
  }
}));

export default Column;
