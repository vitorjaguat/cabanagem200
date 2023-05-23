export default function Section2() {
  return (
    <div className='py-[20vh] md:py-[30vh] px-10 md:px-0 mx-auto max-w-[800px] dark:bg-[#2f2f2f]'>
      <div className='md:columns-2 md:gap-8 px-2 md:px-4'>
        <p className='pb-4 md:pb-2'>
          <span className='tracking-[1.5px] font-stanleybold text-[15px]'>
            cabanagem200
          </span>{' '}
          apresenta{' '}
          <span className=' font-stanleybolditalic'>Nheenga Cabana</span>, um
          conjunto de trabalhos de Giseli Vasconcelos e Pedro Victor Brandão que
          trata da Revolução da Cabanagem, ocorrida durante o período regencial,
          no século XIX, quando diversas insurgências eclodiram no Brasil.
        </p>
        <p className='pb-4 md:pb-2'>
          O projeto foi comissionado pelo Museu de Arte Moderna do Rio de
          Janeiro para a exposição{' '}
          <a
            className='text-slate-700 tracking-tight font-stanleybold hover:underline'
            href='https://mam.rio/programacao/atos-de-revolta/'
            target='_blank'
            rel='noreferrer'
          >
            Atos de revolta: outros imaginários sobre independência
          </a>{' '}
          e se deu a partir da leitura dos escritos e arquivos sobre a Cabanagem
          do jornalista e sociólogo paraense Lúcio Flávio Pinto, postados no
          blog{' '}
          <a
            className='text-slate-700 tracking-tight font-stanleybold hover:underline'
            href='https://cabanagem180.wordpress.com'
            target='_blank'
            rel='noreferrer'
          >
            https://cabanagem180.wordpress.com
          </a>
          .
        </p>{' '}
        <p className='pb-4 md:pb-2'>
          Ao longo do processo, editamos uma edição extraordinária do{' '}
          <span className='font-stanleybolditalic'>Jornal Pessoal</span> de
          Lúcio sobre esse período e co-criamos imagens com versões iniciais de
          tecnologias recentes de aprendizagem de máquina (MidJourney, DALL-E 2,
          Stable Difusion) para inventar uma iconografia contemporânea sobre uma
          revolução que colocou, pela primeira vez, o povo no poder.
        </p>
        <p>
          Reunimos aqui os materiais apresentados na instalação com painéis
          expográficos para livre acesso, incluindo os arquivos digitais das 3
          impressões de grande formato, o arquivo em PDF da edição
          extraordinária do{' '}
          <span className='font-stanleybolditalic'>Jornal Pessoal</span>; e
          também imagens e entradas de texto (prompts) feitas durante o
          processo.
        </p>
      </div>
    </div>
  );
}
