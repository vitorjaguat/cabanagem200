import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import localFont from '@next/font/local';

const stanley = localFont({
  src: '../../public/assets/fonts/stanley-regular.woff2',
  variable: '--stanley-font',
  display: 'block',
});

const stanleybold = localFont({
  src: '../../public/assets/fonts/stanley-bold.woff2',
  variable: '--stanleybold-font',
  display: 'block',
});

const App = ({ Component, pageProps }) => {
  return (
    <div className={`${stanley.variable} ${stanleybold.variable} font-stanley`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default appWithTranslation(App);
