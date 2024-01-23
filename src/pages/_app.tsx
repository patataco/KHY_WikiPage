import '~/styles/globals.css';

import NiceModal from '@ebay/nice-modal-react';
import { type NextPage } from 'next';
import { type AppProps, type AppType } from 'next/app';
import Head from 'next/head';
import { type ReactElement, type ReactNode } from 'react';

import { api } from '~/utils/api';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>WikiPage</title>
        <meta
          name="description"
          content="Join CodingHub's forum to explore and discuss coding tutorials and insights. A resourceful platform for coders at all levels."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NiceModal.Provider>
        {getLayout(<Component {...pageProps} />)}
      </NiceModal.Provider>
    </>
  );
};

export default api.withTRPC(MyApp);
