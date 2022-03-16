import type { AppProps } from 'next/app';
import '@/style/globals.css';
import { RecoilRoot } from 'recoil';
import { Seo } from '@/component/Seo';
import { Footer } from '@/component/organism/Footer';
import { Header } from '@/component/organism/Header';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Seo />
      <div className='flex min-h-screen flex-col items-center justify-between px-2 text-center md:px-0'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </RecoilRoot>
  );
};
export default App;
