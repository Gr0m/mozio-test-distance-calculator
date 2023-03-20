import { styled, StyletronComponent, withStyle } from 'styletron-react';
import ClearButton from '@components/UI/ClearButton/ClearButton';
import ErrorMessage from '@components/UI/ErrorMessage/ErrorMessage';
import CrossButton from '@components/UI/CrossButton/CrossButton';

export const ComboBoxContainer = styled('div', {
  position: 'relative',
  width: '100%'
});

export const PositionedClearButton: StyletronComponent<'button', any> = withStyle(ClearButton, {
  position: 'absolute',
  bottom: '9px',
  right: '10px'
});

export const PositionedErrorMessage: StyletronComponent<'div', any> = withStyle(ErrorMessage, {
  position: 'absolute',
  top: 'calc(100% + 2px)',
  left: '0'
});

export const PositionedCrossButton: StyletronComponent<'button', any> = withStyle(CrossButton, {
  position: 'absolute',
  bottom: '9px',
  left: 'calc(100% + 16px)',
});
