import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import localFont from '@next/font/local';
import Head from 'next/head';
import Footer from '@/components/Footer';

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

const stanleyitalic = localFont({
  src: '../../public/assets/fonts/stanley-italic.woff2',
  variable: '--stanleyitalic-font',
  display: 'block',
});

const stanleybolditalic = localFont({
  src: '../../public/assets/fonts/stanley-bolditalic.woff2',
  variable: '--stanleybolditalic-font',
  display: 'block',
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>cabanagem200</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
        <meta
          name='description'
          content='Cabanagem 200 é um site que mostra de forma permanente arquivos do conjunto de trabalhos Nheenga Cabana, apresentando com destaque a edição extraordinária do Jornal Pessoal de Lúcio Flávio Pinto.'
          key='desc'
        />

        <link rel='icon' href='./img/ico-provisorio.jpeg' />

        <meta
          name='author'
          content='Giseli Vasconcelos / Pedro Victor Brandão'
        />

        <meta
          name='keywords'
          content='giselivasconcelos, pedrovictorbrandão, cabanagem'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pierresacoman' />
        <meta name='twitter:title' content='Cabanagem 200' />
        <meta
          name='twitter:description'
          content='Cabanagem 200 é um site que mostra de forma permanente arquivos do conjunto de trabalhos Nheenga Cabana, apresentando com destaque a edição extraordinária do Jornal Pessoal de Lúcio Flávio Pinto.'
        />
        <meta name='twitter:image' content='./img/ico-provisorio.jpeg' />

        <meta property='og:title' content='Cabanagem 200' />
        <meta
          property='og:description'
          content='Cabanagem 200 é um site que mostra de forma permanente arquivos do conjunto de trabalhos Nheenga Cabana, apresentando com destaque a edição extraordinária do Jornal Pessoal de Lúcio Flávio Pinto.'
        />
        <meta property='og:image' content='./img/ico-provisorio.jpeg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:type' content='article' />
        <meta property='og:locale' content='en_US' />
      </Head>
      <div
        className={`${stanley.variable} ${stanleybold.variable} ${stanleyitalic.variable} ${stanleybolditalic.variable} font-stanley`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default appWithTranslation(App);
