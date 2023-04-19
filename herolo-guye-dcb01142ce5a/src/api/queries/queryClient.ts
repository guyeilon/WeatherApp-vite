import { QueryClient } from '@tanstack/react-query';

function queryErrorHandler(error: unknown): void {
  const title = error instanceof Error ? `Something went wrong: ${error.message}` : 'error connecting to server';
  console.log({ title, status: 'error' });
}

const generateQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 600000, // 10 minutes
        cacheTime: 900000, // 15 minutes;
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  });

const queryClient = generateQueryClient();
export default queryClient;
