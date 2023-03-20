import { styled } from 'styletron-react';

interface Props {
  $extraMargin?: boolean;
}

const Row = styled('div', ({$extraMargin}: Props) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: $extraMargin ? '36px' : '20px',
  ':first-child': {
    marginTop: '0'
  }
}));

export default Row;
