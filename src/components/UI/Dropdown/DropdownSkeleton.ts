import { styled } from 'styletron-react';
import theme from '@themes/default';

const DropdownSkeleton = styled('div', {
  width: '186px',
  height: '28px',
  borderRadius: '6px',
  marginBottom: '1px',
  backgroundImage: `linear-gradient(90deg, ${theme.colors.grey} 0px, ${theme.colors.skeletonShine} 40px, ${theme.colors.grey} 80px)`,
  backgroundSize: '600px',
  animationDuration: '1860ms',
  animationIterationCount: 'infinite',
  animationName: {
    from: {
      backgroundPosition: '-100px'
    },
    to: {
      backgroundPosition: '186px'
    }
  }
});

export default DropdownSkeleton;
