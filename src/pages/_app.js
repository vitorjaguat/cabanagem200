import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import localFont from '@next/font/local';

const stanley = localFont({
  src: '../../public/assets/fonts/stanley-regular.woff2',
});

const App = ({ Component, pageProps }) => {
  return (
    <div className={stanley.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default appWithTranslation(App);
