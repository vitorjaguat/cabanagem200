import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function About() {
  return (
    <div className='pt-10 md:pt-12 h-full bg-[#e1e1e1]'>
      <div className='w-screen h-[60vh] flex justify-end items-end text-4xl pb-4 pr-4 bg-slate-400'>
        SOBRE
      </div>
      <div className='max-w-[1000px] py-20'>
        {/* CARD */}
        <div className=''>
          <div className=''>{/* <Image /> */}</div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
