import 'antd/dist/antd.css';
import AppLayout from '@RootLayouts/screen/AppLayout';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '@RootStyles/GlobalStyles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps<{}>) => {
  return (
    <>
      <Head>
        <title>깃주팔자</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== 'production' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
        <Hydrate state={pageProps.dehydratedState}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;

MyApp.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: {},
  };
};
