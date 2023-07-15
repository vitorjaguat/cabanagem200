import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import localFont from '@next/font/local';
import {
  Lora,
  Merriweather,
  Montserrat,
  Roboto,
  Roboto_Slab,
} from '@next/font/google';
import Head from 'next/head';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import Script from 'next/script';

// const stanley = localFont({
//   src: '../../public/assets/fonts/stanley-regular.woff2',
//   variable: '--stanley-font',
//   display: 'block',
// });

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

const stanley = Lora({
  variable: '--stanley-font',
  display: 'block',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((curr) => !curr);
  };
  const router = useRouter();
  console.log(darkMode);

  return (
    <ThemeContext.Provider
      value={{ toggleDarkMode: toggleDarkMode, darkMode: darkMode }}
    >
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
        {/* GOOGLE-analytics https://www.makeuseof.com/nextjs-google-analytics/ */}
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GANALYTICS}`}
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <div
          className={`${stanley.variable} ${stanleybold.variable} ${
            stanleyitalic.variable
          } ${stanleybolditalic.variable} font-stanley ${
            darkMode ? 'dark' : ''
          }`}
        >
          {/* <ThemeProvider> */}
          <Navbar toggleDarkMode={toggleDarkMode} />
          <Component
            {...pageProps}
            toggleDarkMode={toggleDarkMode}
            test='test'
            key={router.asPath}
          />
          <Footer />
          {/* </ThemeProvider> */}
        </div>
      </>
    </ThemeContext.Provider>
  );
};

export default appWithTranslation(App);
