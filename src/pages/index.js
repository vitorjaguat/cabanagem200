import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '@/components/index/Hero';
import Section2 from '@/components/index/Section2';
import Section3 from '@/components/index/Section3';
import Section4Ed from '@/components/index/Section4Ed';
import Section5PDF from '@/components/index/Section5PDF';
import GaleriaProcesso from '@/components/index/GaleriaProcesso';
import probe from 'probe-image-size';
import fs from 'fs';
import path from 'path';

export default function Home({ images }) {
  return (
    <>
      <main className='bg-[#e1e1e1]'>
        <Hero />
        <GaleriaProcesso images={images} />
        <Section2 />
        <Section3 />
        <Section5PDF />
        <Section4Ed />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const imagesStr = [
    'public/assets/percurso/001_percurso.png',
    'public/assets/percurso/002_percurso.png',
    'public/assets/percurso/003_percurso.png',
    'public/assets/percurso/004_percurso.png',
    'public/assets/percurso/005_percurso.png',
    'public/assets/percurso/006_percurso.png',
    'public/assets/percurso/007_percurso.png',
    'public/assets/percurso/008_percurso.png',
    'public/assets/percurso/009_percurso.png',
    'public/assets/percurso/010_percurso.png',
    'public/assets/percurso/026_percurso.png',
    'public/assets/percurso/027_percurso.png',
    'public/assets/percurso/028_percurso.png',
    'public/assets/percurso/029_percurso.png',
    'public/assets/percurso/030_percurso.png',
    'public/assets/percurso/031_percurso.png',
    'public/assets/percurso/032_percurso.png',
    'public/assets/percurso/033_percurso.png',
    'public/assets/percurso/034_percurso.png',
    'public/assets/percurso/035_percurso.png',
  ];

  const images = imagesStr.map((string) => ({
    url: string,
  }));

  const imagesWithSizes = await Promise.all(
    images.map(async (image, i) => {
      const imageWithSize = image;
      imageWithSize.size = await probe(
        fs.createReadStream(path.join(process.cwd(), image.url))
      );

      return imageWithSize;
    })
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      images: imagesWithSizes,
    },
  };
}
