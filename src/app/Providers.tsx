import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from 'api/queries/queryClient';
import StoreProvider from 'store/Provider';
import StylesProvider from 'styles/StylesProvider';

type Props = React.PropsWithChildren<{ withReactQueryDevTools: boolean }>;
const Providers = ({ children, withReactQueryDevTools = true }: Props) => (
  <BrowserRouter>
    <StoreProvider>
      <StylesProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          {withReactQueryDevTools && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </StylesProvider>
    </StoreProvider>
  </BrowserRouter>
);

export default Providers;
