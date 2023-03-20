import { styled, StyletronComponent, withStyle } from 'styletron-react';
import Circle from '@components/UI/Circle/Circle';
import Text from '@components/UI/Texts/Texts';
import Bubble from '@components/UI/Bubble/Bubble';

interface RouteContainerProps {
  $forInputs?: boolean;
}

interface RouteCityProps {
  $last?: boolean;
  $forInputs?: boolean;
}

export const RouteContainer = styled('div', ({ $forInputs }: RouteContainerProps) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: $forInputs ? '31px' : '0'
}));

export const RouteCity = styled('div', ({ $last, $forInputs }: RouteCityProps) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: $last ? 'auto' : $forInputs ? '65px' : '40px',
  marginTop: $last ? '-3px' : '0',
  marginBottom: '8px'
}));

export const AdjustedCircle: StyletronComponent<'div', any> = withStyle(Circle, {
  marginBottom: '8px'
});

export const AdjustedText: StyletronComponent<'p', any> = withStyle(Text, {
  position: 'absolute',
  top: '0',
  left: 'calc(100% + 20px)',
  whiteSpace: 'nowrap'
});

export const AdjustedBubble: StyletronComponent<'div', any> = withStyle(Bubble, {
  position: 'absolute',
  top: '14px',
  right: 'calc(100% + 20px)',
  whiteSpace: 'nowrap'
})
