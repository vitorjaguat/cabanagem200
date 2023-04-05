import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function Press() {
  return (
    <div className='pt-10 md:pt-12 h-full'>
      <div className='w-screen h-[60vh] flex justify-end items-end text-5xl pr-4 bg-slate-400'>
        press
      </div>
      <div className='max-w-[1000px] py-20 mx-auto'>
        {/* CARD */}
        <a
          href='https://mam.rio/programacao/atos-de-revolta/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='p-5 flex justify-between gap-6 border-[0.5px] border-black'>
            <div className='w-[250px] h-[250px] relative overflow-hidden shrink-0'>
              <Image src='/img/press/mam1.jpeg' className='object-cover' fill />
            </div>
            <div className='relative flex flex-col justify-between'>
              <p className='text-3xl mb-4'>
                MAM-Rio: Atos de revolta - outros imaginários sobre
                independência
              </p>
              <p className='text-sm text-justify'>
                O bicentenário da Independência do Brasil oportuniza repensar
                esse processo histórico. Atos de revolta foca em uma série de
                levantes, motins e insurreições que antecederam aquele momento
                ou que ocorreram nas décadas subsequentes, durante o Primeiro e
                o Segundo Reinado e o período regencial.
              </p>
              <p className='text-sm text-justify'>
                Com o objetivo de abordar os diversos imaginários de país então
                esboçados, a mostra faz referência à Guerra Guaranítica
                (1753-56), à Inconfidência Mineira (1789), à Revolução
                Pernambucana (1817), à Independência da Bahia (1822), à
                Cabanagem (1835-40), à Revolução Farroupilha (1835-45), à
                Revolta de Vassouras (1839) e à Balaiada (1838-41), entre
                outras.
              </p>
              <div className='font-stanleybold absolute -bottom-2 -right-0 text-xl'>
                +
              </div>
            </div>
          </div>
        </a>
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
