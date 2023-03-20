import { styled, StyletronComponent, withStyle } from 'styletron-react';
import Circle from '@components/UI/Circle/Circle';

interface RouteCityProps {
  $last?: boolean;
}

export const RouteContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '31px'
});

export const RouteCity = styled('div', ({$last}: RouteCityProps) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: $last ? 'auto' : '65px',
  marginTop: $last ? '-3px' : '0',
  marginBottom: '8px'
}));

export const AdjustedCircle: StyletronComponent<'div', any> = withStyle(Circle, {
  marginBottom: '8px'
});
