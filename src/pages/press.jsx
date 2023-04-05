import PressCard from '@/components/press/PressCard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function Press() {
  return (
    <div className='pt-10 md:pt-12 h-full'>
      <div className='w-screen h-[60vh] flex justify-end items-end text-5xl pr-4 bg-slate-400'>
        press
      </div>
      <div className='max-w-[1000px] py-20 mx-auto flex flex-col gap-12'>
        {/* CARD */}
        <div className='p-5 flex flex-col md:flex-row justify-between gap-6 border-[0.5px] border-black'>
          <div className=' order-last md:order-1 w-[300px] h-[250px] relative md:overflow-hidden shrink-0 mt-auto mx-auto md:mx-0'>
            <iframe
              width='300'
              height='250'
              src='https://www.youtube.com/embed/flvwX8yCCKs'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Embedded youtube'
            />
          </div>
          <div className='relative flex flex-col justify-between'>
            <a
              href='https://www.youtube.com/watch?v=flvwX8yCCKs&ab_channel=MAMRio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <p className='text-3xl mb-4'>
                Atos de revolta | Giseli Vasconcelos e Pedro Victor Brandão -
                Nheenga Cabana
              </p>
            </a>
            <div className='flex flex-col justify-end'>
              <p className='text-sm text-justify'>
                Neste vídeo, a dupla Giseli Vasconcelos e Pedro Victor Brandão
                apresenta em detalhes a obra “Nheenga Cabana”, que compõe a
                mostra “Atos de revolta: outros imaginários sobre
                independência”, em cartaz no MAM Rio.
              </p>
              <p className='text-sm text-justify'>
                Na exposição, três estações apresentam imagens sobre a Cabanagem
                geradas por meio de inteligência artificial. O trabalho se
                baseia nos arquivos do jornalista e sociólogo paraense Lúcio
                Flávio sobre a revolta que aconteceu entre 1835 e 1840.
              </p>
              <a
                href='https://www.youtube.com/watch?v=flvwX8yCCKs&ab_channel=MAMRio'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='font-stanleybold absolute -bottom-2 right-0 text-2xl'>
                  +
                </div>
              </a>
            </div>
          </div>
        </div>

        <PressCard
          link='https://mam.rio/programacao/atos-de-revolta/'
          img='/img/press/mam1.jpeg'
          title='MAM-Rio: Atos de revolta - outros imaginários sobre independência'
          text1='O bicentenário da Independência do Brasil oportuniza repensar esse
            processo histórico. Atos de revolta foca em uma série de levantes,
            motins e insurreições que antecederam aquele momento ou que
            ocorreram nas décadas subsequentes, durante o Primeiro e o Segundo
            Reinado e o período regencial.'
          text2='Com o objetivo de abordar os diversos imaginários de país então
            esboçados, a mostra faz referência à Guerra Guaranítica (1753-56), à
            Inconfidência Mineira (1789), à Revolução Pernambucana (1817), à
            Independência da Bahia (1822), à Cabanagem (1835-40), à Revolução
            Farroupilha (1835-45), à Revolta de Vassouras (1839) e à Balaiada
            (1838-41), entre outras.'
        />
        {/* <PressCard text1='Neste vídeo, a dupla Giseli Vasconcelos e Pedro Victor Brandão apresenta em detalhes a obra “Nheenga Cabana”, que compõe a mostra “Atos de revolta: outros imaginários sobre independência”, em cartaz no MAM Rio.' 
        text2='Na exposição, três estações apresentam imagens sobre a Cabanagem geradas por meio de inteligência artificial. O trabalho se baseia nos arquivos do jornalista e sociólogo paraense Lúcio Flávio sobre a revolta que aconteceu entre 1835 e 1840.' 
        link='https://www.youtube.com/watch?v=flvwX8yCCKs&ab_channel=MAMRio'

        /> */}
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
