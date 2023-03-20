import { styled, StyletronComponent, withStyle } from 'styletron-react';
import Input from '@components/UI/Input/Input';
import TinyButton from '@components/UI/TinyButton/TinyButton';

export const CounterInputContainer = styled('div', {
  position: 'relative'
});

export const AdjustedInput = withStyle(Input, {
  textAlign: 'center',
  '-moz-appearance': 'textfield',
  '::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: '0'
  },
  '::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: '0'
  }
});

export const CounterInputMinus: StyletronComponent<'button', any> = withStyle(TinyButton, {
  position: 'absolute',
  left: '8px',
  bottom: '5.5px',
  ':before': {
    content: '"-"'
  }
});

export const CounterInputPlus: StyletronComponent<'button', any> = withStyle(TinyButton, {
  position: 'absolute',
  right: '8px',
  bottom: '5.5px',
  ':before': {
    content: '"+"'
  }
});
