import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function About() {
  return (
    <div className='pt-10 w-full md:pt-12 bg-[#e1e1e1]'>
      <div className='w-full h-[350px] flex justify-center relative'>
        <div className='relative text-4xl pb-4 h-[350px] w-full max-w-[1000px]'>
          <div className='absolute w-full bottom-0 right-0 z-[100] flex justify-end px-4'>
            SOBRE
          </div>
        </div>

        <Image
          src='/assets/header_about.jpg'
          fill
          className='object-cover overflow-hidden'
          alt='Imprensa'
        />
      </div>
      <div className='max-w-[1000px] px-4 py-20 mx-auto text-justify'>
        {/* CARD */}
        <div className='mb-4'>
          <span className='font-stanleybold'>cabanagem200</span> é um site que
          mostra de forma permanente arquivos do conjunto de trabalhos{' '}
          <span className='font-stanleybolditalic'>Nheenga Cabana</span>,
          apresentando com destaque a edição extraordinária do{' '}
          <span className='font-stanleybolditalic'>Jornal Pessoal</span> de
          Lúcio Flávio Pinto, a ficha técnica de todo o projeto, materiais de
          imprensa, os arquivos de imagem co-criados com inteligências
          artificiais exibidos no MAM-Rio e também uma seleção de arquivos de
          imagens inéditos. O site exibe conteúdos de mídia hospedados com IPFS
          de forma a preservar sua permanência.
        </div>
        <div className=''>
          <span className='font-stanleyitalic'>Nheenga Cabana</span> é uma série
          de obras comissionadas pelo Museu de Arte Moderna do Rio de Janeiro
          para a exposição coletiva{' '}
          <a
            className='text-slate-700 tracking-tight font-stanleybold hover:underline'
            href='https://mam.rio/programacao/atos-de-revolta/'
            target='_blank'
            rel='noreferrer'
          >
            Atos de revolta: outros imaginários sobre independência
          </a>
          , uma curadoria de Beatriz Lemos, Keyna Eleison, Pablo Lafuente e
          Thiago de Paula Souza, realizada entre setembro de 2022 e maio de
          2023. Também participaram da coletiva com obras comissionadas Arissana
          Pataxó, Ana Lira, Elian Almeida, Gê Viana, Gustavo Caboco Wapichana
          com Roseane Cadete Wapichana, Marcela Cantuária e Tiago Sant’Ana;
          junto a obras recentes de Arjan Martins, Glicéria Tupinambá, Paulo
          Nazareth e Thiago Martins de Melo e Luana Vitra - ao lado de uma
          seleção de objetos dos séculos 18 e 19, vindos dos acervos do Museu da
          Inconfidência e do Museu Histórico Nacional; e oito pinturas do
          artista gaúcho Glauco Rodrigues, pertencentes ao acervo do MAM-Rio.
        </div>
        <div className='mt-20 mb-8 text-center'>
          <div className='font-stanleybold'>cabanagem200.xyz</div>
          <div className=''>Desenvolvimento web: Vitor Butkus</div>
        </div>
        <div className='text-center mb-8'>
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
        <div className='text-center'>
          <div className='font-stanleybold'>
            Ferramentas de criação de imagem utilizadas
          </div>
          <div className=''>
            DALL-E 2 (acessível em{' '}
            <a
              className='text-slate-700 tracking-tight font-stanleybold hover:underline'
              href='https://labs.openai.com/'
              target='_blank'
              rel='noreferrer'
            >
              https://labs.openai.com/
            </a>
            )
          </div>
          <div className=''>
            MidJourney v2 e v3 (atualmente v5, acessível em{' '}
            <a
              className='text-slate-700 tracking-tight font-stanleybold hover:underline'
              href='https://www.midjourney.com/'
              target='_blank'
              rel='noreferrer'
            >
              https://www.midjourney.com/
            </a>
            )
          </div>
          <div className=''>
            Stable Diffusion v1.4 (Modelo local acessível em{' '}
            <a
              className='text-slate-700 tracking-tight font-stanleybold hover:underline'
              href='https://github.com/CompVis/stable-diffusion'
              target='_blank'
              rel='noreferrer'
            >
              https://github.com/CompVis/stable-diffusion
            </a>
            ; atualmente v2.1, acessível em{' '}
            <a
              className='text-slate-700 tracking-tight font-stanleybold hover:underline'
              href='https://github.com/Stability-AI/StableStudio/'
              target='_blank'
              rel='noreferrer'
            >
              https://github.com/Stability-AI/StableStudio/
            </a>
            )
          </div>
          <div className=''>
            Waifu2x v3.92.01 (atualmente v3.101.01, acessível em{' '}
            <a
              className='text-slate-700 tracking-tight font-stanleybold hover:underline'
              href='https://github.com/AaronFeng753/Waifu2x-Extension-GUI/'
              target='_blank'
              rel='noreferrer'
            >
              https://github.com/AaronFeng753/Waifu2x-Extension-GUI/
            </a>
            ){' '}
          </div>
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
