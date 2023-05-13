import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function About() {
  return (
    <div className='pt-10 md:pt-12 h-full bg-[#e1e1e1]'>
      <div className='w-screen h-[60vh]  bg-black/20'>
        <div className='flex justify-end items-end text-4xl pb-4 max-w-[1000px] w-full h-full mx-auto'>
          SOBRE
        </div>
      </div>
      <div className='max-w-[1000px] py-20 mx-auto text-justify'>
        {/* CARD */}
        <div className='mb-4'>
          <span className='font-stanleybold'>cabanagem200</span> é um site que
          mostra de forma permanente arquivos do conjunto de trabalhos{' '}
          <span className='font-stanleybold'>Nheenga Cabana</span>, apresentando
          com destaque a edição extraordinária do{' '}
          <span className='font-stanleybold'>Jornal Pessoal</span> de Lúcio
          Flávio Pinto, o editorial escrito por nós, a ficha técnica de todo o
          projeto, materiais de imprensa, os arquivos de imagem co-criados com
          inteligências artificiais exibidos no MAM-Rio e também uma seleção de
          arquivos de imagens inéditos. O site exibe conteúdos de mídia
          hospedados com Arweave de forma a preservar sua permanência.
        </div>
        <div className=''>
          <span className='font-stanleybold'>Nheenga Cabana</span> é uma série
          de obras comissionadas pelo Museu de Arte Moderna do Rio de Janeiro
          para a exposição{' '}
          <span className='font-stanleybold'>
            Atos de revolta: outros imaginários sobre independência
          </span>
          , uma curadoria de Beatriz Lemos, Keyna Eleison, Pablo Lafuente e
          Thiago de Paula Souza, realizada entre setembro de 2022 a maio de
          2023.
        </div>
        <div className='mt-20 mb-8 text-center'>
          <div className='font-stanleybold'>cabanagem200.xyz</div>
          <div className=''>Desenvolvimento web: Vitor Butkus</div>
        </div>
        <div className='text-center'>
          <div className='font-stanleybold'>
            Jornal Pessoal Edição Extraordinária
          </div>
          <div className=''>Redação: Lúcio Flávio Pinto</div>
          <div className=''>
            Edição: Giseli Vasconcelos, Thais Medeiros e Pedro Victor Brandão
          </div>
          <div className=''>Leitura de Prova: Thais Medeiros</div>
          <div className=''>Design e Diagramação: Tatiana Podlubny</div>
          <div className=''>Impressão: Gráfica Rotativa</div>
          <div className=''>Tiragem: 5.000 cópias</div>
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
