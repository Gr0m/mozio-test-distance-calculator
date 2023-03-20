import { styled } from 'styletron-react';
import theme from '@themes/default';

const MainContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '372px',
  background: theme.colors.white,
  borderRadius: '16px',
  padding: '24px 16px',
  width: '734px',
  '@media screen and (min-width: 786px)': {
    padding: '62px 86px 38px',
  }
});

export default MainContainer;
