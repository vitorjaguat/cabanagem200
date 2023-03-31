import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <>
      <Head>
        <title>cabanagem200</title>
        <meta
          name='description'
          content='Cabanagem 200 é um site que mostra de forma permanente arquivos do conjunto de trabalhos Nheenga Cabana, apresentando com destaque a edição extraordinária do Jornal Pessoal de Lúcio Flávio Pinto.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />

        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width' />

        <meta
          name='author'
          content='Giseli Vasconcelos / Pedro Victor Brandão'
        />
        <meta
          name='description'
          content='Cabanagem 200 é um site que mostra de forma permanente arquivos do conjunto de trabalhos Nheenga Cabana, apresentando com destaque a edição extraordinária do Jornal Pessoal de Lúcio Flávio Pinto'
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
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
