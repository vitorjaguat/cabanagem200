import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '@/components/index/Hero';
import Section2 from '@/components/index/Section2';
import Section3 from '@/components/index/Section3';
import Section4Ed from '@/components/index/Section4Ed';
import Section5PDF from '@/components/index/Section5PDF';

export default function Home() {
  return (
    <>
      <main className='bg-[#e1e1e1]'>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4Ed />
        <Section5PDF />
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
