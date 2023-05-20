import PressCard from '@/components/press/PressCard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

export default function Press() {
  return (
    <div className='pt-10 md:pt-12 h-full bg-[#e1e1e1]'>
      <div className='w-full h-[60vh]  bg-black/20'>
        <div className='flex justify-end items-end text-4xl pb-4 max-w-[1000px] w-full h-full mx-auto'>
          IMPRENSA
        </div>
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

        <div className='p-5 flex flex-col md:flex-row justify-between gap-6 border-[0.5px] border-black'>
          <div className=' order-last md:order-1 w-[300px] h-[250px] relative md:overflow-hidden shrink-0 mt-auto mx-auto md:mx-0'>
            <iframe
              width='300'
              height='250'
              src='https://www.youtube.com/embed/behnWq0W__8'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Embedded youtube'
            />
          </div>
          <div className='relative flex flex-col justify-between'>
            <a
              href='https://www.youtube.com/watch?v=behnWq0W__8&ab_channel=MAMRio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <p className='text-3xl mb-4'>
                Atos de revolta | panorama da exposição | Pablo Lafuente
              </p>
            </a>
            <div className='flex flex-col justify-end'>
              <p className='text-sm text-justify'>
                Neste vídeo, o diretor artístico do MAM Rio, Pablo Lafuente, faz
                um panorama da exposição “Atos de revolta: outros imaginários
                sobre independência”, em cartaz no segundo andar do museu.
              </p>
              <p className='text-sm text-justify'>
                A mostra reúne um time de 16 nomes da arte contemporânea
                brasileira em diálogo com peças dos séculos 18 e 19 vindas do
                acervo do Convento Santo Antônio, Museu da Inconfidência e do
                Museu Histórico Nacional.
              </p>
              <a
                href='https://www.youtube.com/watch?v=behnWq0W__8&ab_channel=MAMRio'
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

        <div className='p-5 flex flex-col md:flex-row justify-between gap-6 border-[0.5px] border-black'>
          <div className=' order-last md:order-1 w-[300px] h-[250px] relative md:overflow-hidden shrink-0 mt-auto mx-auto md:mx-0'>
            <iframe
              width='300'
              height='250'
              src='https://www.youtube.com/embed/LGoe2cyHdk0'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Embedded youtube'
            />
          </div>
          <div className='relative flex flex-col justify-between'>
            <a
              href='https://www.youtube.com/watch?v=LGoe2cyHdk0'
              target='_blank'
              rel='noopener noreferrer'
            >
              <p className='text-3xl mb-4'>Sem Censura Pará | Nheenga Cabana</p>
            </a>
            <div className='flex flex-col justify-end'>
              <p className='text-sm text-justify'>
                Programa "Sem Censura", da TV Cultura Pará, recebe Giseli
                Vasconcelos e Pedro Victor Brandão para contar detalhes sobre a
                obra “Nheenga Cabana”, que compõe a mostra “Atos de revolta:
                outros imaginários sobre independência”, em cartaz no MAM Rio.
              </p>
              <p className='text-sm text-justify'>
                Na exposição, três estações apresentam imagens sobre a Cabanagem
                geradas por meio de inteligência artificial. O trabalho se
                baseia nos arquivos do jornalista e sociólogo paraense Lúcio
                Flávio sobre a revolta que aconteceu entre 1835 e 1840.
              </p>
              <a
                href='https://www.youtube.com/watch?v=LGoe2cyHdk0'
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
        <PressCard
          img='/img/press/lfp.jpeg'
          text1='Giseli Vasconcelos e Pedro Victor Brandão atuam como artistas na interseção entre os processos de circulação de informação e modos de construção comunitária e política, relacionando valor com imagem. Dispositivos digitais, tecnologias de processamento de dados, cartografias, fotografia e pintura são alguns dos meios que utilizam para explorar as relações entre arte, sociedade e capital.'
          text2='Blog do jornalista Lúcio Flávio Pinto.'
          link='https://lucioflaviopinto.wordpress.com/2022/10/06/cabanagem-recriacao-pela-inteligencia-artificial/'
          title='Cabanagem: recriação pela inteligência artificial'
        />
        <PressCard
          img='/img/press/lfp2.webp'
          text1='Entrou em cartaz no MAM Rio a exposição coletiva “Atos de revolta: outros imaginários sobre independência”.'
          text2='A mostra repensa o bicentenário da Independência do Brasil, abordando os diversos imaginários de país então esboçados, a partir de uma série de levantes, motins e insurreições em torno do período, como a Inconfidência Mineira, a Revolução Pernambucana, a Cabanagem, a Revolução Farroupilha, entre outras.'
          link='https://lucioflaviopinto.wordpress.com/2023/01/15/43874/'
          title='Cabanagem na independência'
        />
        <PressCard
          title='Atti di rivolta, il Brasile si confessa in una mostra. La storia cancellata e ora ritrovata'
          link='https://italialibera.online/cultura/atti-di-rivolta-il-brasile-si-confessa-in-una-mostra-la-storia-cancellata-e-ora-ritrovata/'
          img='/img/press/italialibera.jpeg'
          text1='Il Brasile sta celebrando i Duecento anni della sua Indipendenza dal Portogallo e una mostra a Rio de Janeiro, “Atti di rivolta”, con opere di diversi grandi artisti, ripercorre il processo storico che ha preceduto, accompagnato e seguito questa tappa.'
          text2='Un passaggio che ha visto scontri, ammutinamenti e insurrezioni che sono raccontati — in questa mostra ospitata al Museo di Arte Moderna — da artisti brasiliani di diverse età e aree geografiche, affrontando i conflitti del colonialismo.'
        />
        <PressCard
          img='/img/press/oestado.jpeg'
          link='https://www.oestadonet.com.br/noticia/22384/jornal-pessoal-cabano-e-lancado-no-rio-de-janeiro/'
          title='Jornal Pessoal cabano é lançado no Rio de Janeiro'
          text1='Hoje à noite acontece o coquetel de pré-lançamento da exposição Atos de revolta – Outros imaginários sobre a independência, no Museu de arte Moderna, no Rio de Janeiro, aberta ao público até fevereiro. Do conjunto de peças faz parte uma edição extra do Jornal Pessoal sobre a cabanagem.'
          text2='A minha edição registrou os 150 anos da revolta, em 2018. Passados quatro anos, Giseli Vasconcelos, de Nova York, e Pedro Victor Brandão, por iniciativa própria, decidiram recriar a edição, contando para isso com uma equipe especializada, voluntários na criação de uma obra que transcende e aperfeiçoa o original.'
        />

        <PressCard
          link='https://issuu.com/thaismedeiros2/docs/jornal_pessoal_okfinal_correcoes_pagdupla'
          img='/img/press/rebus.png'
          title='Jornal Pessoal | Edição Extraordinária, Set. 2022'
          text1='Colaboração da Rébus com o projeto Nhenga Cabana (2022), de Giseli Vasconcelos e Pedro Victor Brandão.'
          text2='Trata-se da reedição do Jornal Pessoal, baseado nos arquivos do jornalista e sociólogo paraense Lúcio Flávio Pinto sobre a revolta da Cabanagem, publicados no acervo digital cabanagem180.wordpress.com desde 2014.'
        />
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
