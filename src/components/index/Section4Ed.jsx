export default function Section4Ed() {
  return (
    <div className='flex mt-20'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 min-h-[350px] max-h-[350px] md:max-h-[500px] md:min-h-[500px] flex items-center sticky top-14 md:pt-4'
        style={{ writingMode: 'vertical-rl', height: 'calc(100vh-20px)' }}
      >
        <div className='min-h-[350px] max-h-[350px] md:max-h-[500px] md:min-h-[500px] text-[11px] md:text-sm px-3 md:px-4'>
          <span className='font-bold'>EDITORIAL</span>
        </div>
      </div>

      <div className='w-full'>
        <div className='mx-auto max-w-[1000px] pt-[300px] md:columns-3 gap-8'>
          <p>
            Esta edição extraordinária do Jornal Pessoal de Lúcio Flávio Pinto
            faz parte do conjunto de trabalhos{' '}
            <span className=''>Nheenga Cabana</span>, desenvolvido por nós,
            Giseli Vasconcelos e Pedro Victor Brandão, como parte da exposição{' '}
            <span className=''>
              Atos de revolta: outros imaginários sobre independência
            </span>
            , realizada no Museu de Arte Moderna do Rio de Janeiro entre
            setembro de 2022 e fevereiro de 2023.
          </p>
          <p>
            A exposição oportuniza o bicentenário da Independência do Brasil
            para repensar este processo histórico a partir de levantes, motins e
            insurreições durante o Primeiro e Segundo Reinado e o período
            regencial. Em um contexto de atualizações, escolhemos mergulhar nos
            escritos de Lúcio Flávio Pinto sobre a Revolução da Cabanagem,
            especificamente os artigos publicados no blog{' '}
            <a>https://cabanagem180.wordpress.com</a>, que desde 2014 funciona
            como um repositório de informações, documentos, referências e
            bibliografias sobre uma revolta violenta, que resultou em algo raro
            no país: o povo no poder. Um arquivo valioso que em parte vemos
            republicado aqui.
          </p>
          <p>
            Trazer este conteúdo em forma impressa e com distribuição gratuita,
            presta uma homena- gem à história do Jornal Pessoal e sua
            importância na trajetória das publicações investigativas
            independentes no Brasil. Este jornal, criado por Lúcio Flávio Pinto,
            sobreviveu corajosamente por mais de 3 décadas, com análises e
            perspectivas que explicam situações difíceis de compreender sobre a
            região, desmitificando a visão exótica, e destacando os reveses e a
            dimensão do desenvolvimento histórico da Amazônia. Selecionamos
            artigos em quatro eixos: introdução, cronologias, bibliografias
            comentadas em profundidade seguida da apresentação de personagens,
            ilustres e anônimos.
          </p>
          <p>
            As imagens incluídas nesta edição e também as que estão impressas em
            grande formato na exposição foram todas geradas com tecnologia
            recentes em que modelos de aprendizado de máquina, através de
            inteligência artificial, criam interpretações visuais de alta
            complexidade a partir de descrições de texto (prompts) em linguagem
            natural como o português, o inglês ou o nheengatu (língua hegemônica
            amazônica durante o período da Cabanagem). Nós trabalhamos com as
            ferramentas DALL-E 2, MidJourney e Stable Diffusion, todas em sua
            fase de pré-lançamento (beta) disponibilizadas a partir de modelos
            treinados com centenas de milhões de imagens em conjunto com suas
            descrições de conteúdo e metadados. As entradas de texto com as
            quais (co)criamos os arquivos com essas máquinas têm sua origem nos
            próprios textos de Lúcio, e serviram de matriz para a geração de
            imagens. Ao longo desta edição, frases e termos sinalizados no texto
            indicam que estes trechos foram utilizados para a criação de
            prompts. E, nas legendas das imagens, estão algumas das descrições
            alimentadas nas ferramentas geradoras.
          </p>
          <p>
            Buscamos colocar à prova os eventos ao redor da Cabanagem para criar
            uma contação de história visual, e porque não, surreal, como nos
            remete à região em que a revolta ocorre. Uma Amazônia que não era
            Brasil. Extraímos imagens inéditas dando um sentido oracular e
            simultaneamente, testando os limites, os perigos, os vieses e as
            qualidades interpretativas destas tecnologias que estão
            requalificando o estatuto da imagem contemporânea em novas relações
            entre pessoas e máquinas.
          </p>
          <p>
            Esta publicação também estará disponível em formato digital
            considerando diálogos com Lúcio em que identificamos a necessidade
            de hospedar o arquivo de forma permanente na internet.
          </p>
        </div>
      </div>
    </div>
  );
}
