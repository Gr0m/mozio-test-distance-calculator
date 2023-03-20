import { styled, StyletronComponent, withStyle } from 'styletron-react';
import theme from '@themes/default';

export const Text = styled('p', {
  display: 'block',
  margin: '0 0 5px',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '1.33em',
  color: theme.colors.black
});

export const TextBold = styled('strong', {
  color: theme.colors.purpleDark,
  fontWeight: '700'
});

export const TextCentered: StyletronComponent<'p', any> = withStyle(Text, {
  textAlign: 'center'
});

export default Text;
