import type { AppProps } from 'next/app';
import '@/style/globals.css';
import { RecoilRoot } from 'recoil';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default App;
