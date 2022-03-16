import type { AppProps } from 'next/app';
import '@/style/globals.css';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import GoogleTagManager, { GoogleTagManagerId } from '@/component/GoogleTagManager';
import { Seo } from '@/component/Seo';
import { Footer } from '@/component/organism/Footer';
import { Header } from '@/component/organism/Header';
import { googleTagManagerId } from '@/utils/gtm';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon.ico' />
      </Head>
      <GoogleTagManager googleTagManagerId={googleTagManagerId as GoogleTagManagerId} />
      <RecoilRoot>
        <Seo />
        <div className='flex min-h-screen flex-col items-center justify-between px-2 text-center md:px-0'>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </RecoilRoot>
    </>
  );
};
export default App;
