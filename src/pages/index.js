import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '@/components/index/Hero';
import Section2 from '@/components/index/Section2';
import Section3 from '@/components/index/Section3';
import Section4Ed from '@/components/index/Section4Ed';
import Section5PDF from '@/components/index/Section5PDF';
import GaleriaProcesso2 from '@/components/index/GaleriaProcesso2';
import probe from 'probe-image-size';
import fs from 'fs';
import path from 'path';
import GaleriaPrompts from '@/components/index/GaleriaPrompts';

export default function Home({ images }) {
  return (
    <>
      <main className='bg-[#e1e1e1]'>
        <Hero images={images} />
        <Section2 />
        <Section3 />
        <Section5PDF />
        <GaleriaProcesso2 images={images} />
        <GaleriaPrompts />
        {/* <Section4Ed /> */}
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  let imagesThumbStr = Array.from(Array(200), (el, i) => {
    if (i < 9) {
      return 'public/assets/percurso-sm/00' + (i + 1) + '_percurso.jpg';
    } else if (i < 99) {
      return 'public/assets/percurso-sm/0' + (i + 1) + '_percurso.jpg';
    } else {
      return 'public/assets/percurso-sm/' + (i + 1) + '_percurso.jpg';
    }
  });

  let imagesLargeStr = Array.from(Array(200), (el, i) => {
    if (i < 9) {
      return 'public/assets/percurso-lg/00' + (i + 1) + '_percurso.jpg';
    } else if (i < 99) {
      return 'public/assets/percurso-lg/0' + (i + 1) + '_percurso.jpg';
    } else {
      return 'public/assets/percurso-lg/' + (i + 1) + '_percurso.jpg';
    }
  });

  const images = imagesThumbStr.map((string, i) => ({
    url_sm: string,
    url_lg: imagesLargeStr[i],
  }));

  const imagesWithThumbsSizes = await Promise.all(
    images.map(async (image, i) => {
      const imageWithSize = image;
      imageWithSize.size = await probe(
        fs.createReadStream(path.join(process.cwd(), image.url_sm))
      );

      return imageWithSize;
    })
  );

  const imagesWithAllSizes = await Promise.all(
    imagesWithThumbsSizes.map(async (image, i) => {
      const imageWithSize = image;
      imageWithSize.size = await probe(
        fs.createReadStream(path.join(process.cwd(), image.url_lg))
      );

      return imageWithSize;
    })
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      images: imagesWithAllSizes,
    },
  };
}
