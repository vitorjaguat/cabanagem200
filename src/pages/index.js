import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '@/components/index/Hero';
import Section2 from '@/components/index/Section2';
import Section3 from '@/components/index/Section3';

export default function Home() {
  return (
    <>
      <Head>
        <title>cabanagem200</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
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
      <main className='h-[6000px]'>
        <Hero />
        <Section2 />
        <Section3 />
      </main>
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
