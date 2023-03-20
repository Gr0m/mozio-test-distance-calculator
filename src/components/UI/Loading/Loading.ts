import { styled } from 'styletron-react';
import theme from '@themes/default';

const Loading = styled('div', {
  width: '86px',
  height: '86px',
  borderRadius: '50%',
  margin: 'auto',
  position: 'relative',
  borderTop: `8.6px solid ${theme.colors.purpleLight}`,
  borderRight: `8.6px solid ${theme.colors.purpleLight}`,
  borderBottom: `8.6px solid ${theme.colors.purpleLight}`,
  borderLeft: `8.6px solid ${theme.colors.purpleDark}`,
  animationDuration: '860ms',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'cubic-bezier(0.65, 0.25, 0.45, 0.75)',
  animationName: {
    from: {
      transform: 'rotate(60deg)'
    },
    to: {
      transform: 'rotate(420deg)'
    }
  }
  
});

export default Loading;
