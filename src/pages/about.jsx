import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function About() {
  return (
    <div className='pt-10 w-full md:pt-12 bg-[#e1e1e1] dark:bg-[#2f2f2f] duration-700'>
      <div className='w-full h-[350px] flex justify-center relative'>
        <div className='relative text-3xl md:text-4xl pb-4 h-[350px] w-full max-w-[1000px]'>
          <div className='absolute w-full bottom-0 right-0 z-[99] flex justify-end px-4'>
            SOBRE
          </div>
        </div>

        <Image
          src='/assets/header_about.jpg'
          fill
          className='object-cover overflow-hidden dark:invert-[0.82] duration-700'
          alt='Sobre'
        />
      </div>
      <div className='max-w-[1000px] px-4 py-20 mx-auto text-justify'>
        <div className='mb-4'>
          <span className='font-bold'>cabanagem200</span> é um site que mostra
          de forma permanente arquivos do conjunto de trabalhos{' '}
          <span className='italic font-bold'>Nheenga Cabana</span>, apresentando
          com destaque a edição extraordinária do{' '}
          <span className='italic font-bold'>Jornal Pessoal</span> de Lúcio
          Flávio Pinto, a ficha técnica de todo o projeto, materiais de
          imprensa, os arquivos de imagem co-criados com inteligências
          artificiais exibidos no MAM-Rio e também uma seleção de arquivos de
          imagens inéditos.
        </div>
        <div className='mb-4'>
          <span className='italic font-bold'>Nheenga Cabana</span> é uma série
          de obras comissionadas pelo Museu de Arte Moderna do Rio de Janeiro
          para a exposição coletiva{' '}
          <a
            className='text-slate-700 tracking-tight font-bold hover:underline dark:text-slate-400'
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
        <div className='mb-8'>
          <div className='text-start'>
            Os arquivos mostrados neste site podem ser acessados em alta
            resolução via IPFS:{' '}
            <a
              className='text-slate-700 tracking-tight font-stanleybold hover:underline dark:text-slate-400'
              href='https://ipfs.io/ipfs/bafybeib4wnj5mkwvcozhbf3bdccz56rlts7q2oz5qwfemrhw6mezxttpgy/'
              target='_blank'
              rel='noreferrer'
            >
              https://ipfs.io/ipfs/bafybeib4wnj5mkwvcozhbf3bdccz56rlts7q2oz5qwfemrhw6mezxttpgy/
            </a>
          </div>
        </div>
        <div className='text-sm text-left'>
          <div className='mt-20 mb-8'>
            <div className='font-bold'>cabanagem200.net</div>
            <div className=''>
              Desenvolvimento web:{' '}
              <a
                className='text-slate-700 tracking-tight font-stanleybold hover:underline dark:text-slate-400'
                href='https://portfolio-vitor.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                Vitor Butkus
              </a>
            </div>
          </div>
          <div className='mb-8'>
            <div className='font-bold uppercase'>
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
          {/* <div className='mb-8 max-w-[600px]'>
            <div className='font-bold uppercase'>Agradecimentos</div>
            <div className=''>
              Luiz Pinto, Marilene Pantoja, Natalie Summers, Portas Vilaseca
              Galeria, Vanessa Vasconcelos, família Vasconcelos e toda equipe
              MAM Rio.
            </div>
          </div> */}
          <div className='mb-8'>
            <div className='font-bold uppercase'>
              Ferramentas de criação de imagem utilizadas
            </div>
            <div className=''>
              DALL-E 2 (acessível em{' '}
              <a
                className='text-slate-700 tracking-tight font-stanleybold hover:underline dark:text-slate-400'
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
                className='text-slate-700 tracking-tight font-stanleybold hover:underline dark:text-slate-400'
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
                className='text-slate-700 tracking-tight font-stanleybold hover:underline dark:text-slate-400'
                href='https://github.com/CompVis/stable-diffusion'
                target='_blank'
                rel='noreferrer'
              >
                https://github.com/CompVis/stable-diffusion
              </a>
              ; atualmente v2.1, acessível em{' '}
              <a
                className='text-slate-700 tracking-tight font-stanleybold hover:underline dark:text-slate-400'
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
                className='text-slate-700 tracking-tight font-stanleybold hover:underline dark:text-slate-400'
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
