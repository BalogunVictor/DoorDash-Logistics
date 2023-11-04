import { ReactElement, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { StateContext } from 'src/context/stateContext';

import '../styles/global.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <StateContext>
        <QueryClientProvider client={queryClient}>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              error: {
                className: '!bg-rose-700 w-82 text-sm font-bold !text-white',
              },
              success: {
                className: '!bg-lime-900 w-82 text-sm font-bold !text-white',
              },
            }}
          />
          <Component {...pageProps} />
        </QueryClientProvider>
      </StateContext>
    </>
  );
}
