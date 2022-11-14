import { createGlobalStyle } from 'styled-components';

type customTheme = {
  body: string;
  text: string;
  toggleBorder: string;
  background: string;
}

export const lightTheme: customTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme: customTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle<{theme: customTheme}>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`