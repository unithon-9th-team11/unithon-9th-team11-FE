import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';

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
        <title>TODO APP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </>
  );
};

export default MyApp;

MyApp.getServerSideProps = async () => {};
