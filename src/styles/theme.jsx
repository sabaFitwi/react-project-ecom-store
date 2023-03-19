import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    light: 'var(--color-light)',
    text: 'var(--color-text)',
    textDark: 'var(--color-textDark)',
    bgDefault: 'var(--color-bgDefault)',
    bgPrimary: 'var(--color-bgPrimary)',
    bgSecondary: 'var(--color-bgSecondary)',
    bgLight: 'var(--color-bgLight)',
    hoverColor: 'var(--color-hoverColor)',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
