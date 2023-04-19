import { useUserPreference } from 'hooks';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles';
import theme from 'styles/theme';

const StylesProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { themeMode } = useUserPreference();
  return (
    <ThemeProvider theme={theme(themeMode)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StylesProvider;
