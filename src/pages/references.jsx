import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function References() {
  return (
    <div className='w-full pt-[120px]'>
      <div className='max-w-[1240px] mx-auto'>
        <h2 className=''>References</h2>
        <p>test</p>
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
