// import probe from 'probe-image-size';
import { useEffect, useState, useMemo } from 'react';
import Lightbox from 'react-spring-lightbox';
import { IoIosArrowBack, IoIosArrowForward, IoClose } from 'react-icons/io';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@/utils/useMediaQuery';

export default function GaleriaProcesso2({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const mdScreen = useMediaQuery('md');

  //intersection observer:
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: mdScreen ? '-200px 0px' : '-250px 0px',
  });

  //constructing image data:
  const [imagesData, setImagesData] = useState([]);
  const imagesDataMemo = useMemo(
    () =>
      images
        .map((image) => {
          // console.log('memo!');
          return {
            src_sm: image.url_sm.slice(6),
            src: image.url_lg.slice(6),
            width: image.size.width,
            height: image.size.height,
            alt: 'Nheenga Cabana | Imagem de percurso',
            loading: 'lazy',
          };
        })
        .sort(() => Math.random() - 0.5),
    [images, Math.random, Array.prototype.sort, Array.prototype.map]
  );
  // console.log(imagesData);

  useEffect(() => {
    setImagesData(imagesDataMemo);
  }, [imagesDataMemo]);

  //Lightbox:
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentImageIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < imagesData.length &&
    setCurrentImageIndex(currentImageIndex + 1);

  const onClose = () => setIsOpen(false);

  return (
    <div className='flex pt-8 pb-32 md:pb-50' id='arquivo'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 h-fit flex items-center sticky top-14 md:pt-4 shrink-0'
        style={{ writingMode: 'vertical-rl' }}
      >
        <div className='h-fit text-sm md:text-md px-3 md:px-4  tracking-widest'>
          <span className='font-bold'>ARQUIVO&ensp;&ensp;</span>
          <span>IMAGENS DE PERCURSO</span>
        </div>
      </div>
      <div className='md:pt-4 mr-4'>
        {/* <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={300}
      /> */}
        {/* <PhotoAlbum
        layout='rows'
        photos={imagesData}
        // renderPhoto={NextJSImage}
        onClick={({ index }) => {
          setCurrentImageIndex(index);
          setIsOpen(true);
        }} 
        defaultContainerWidth={1200}
        spacing={2}
        // componentsProps={{
        //   imageProps: { width: imagesData[index].width / 10 },
        // }}
        rowConstraints={{ minPhotos: 20 }}
      /> */}
        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 15 }}>
        <Masonry>
          {imagesData.map((image) => (
            <div className='p-1 hover:w-20 hover:z-10 object-center'>
              <img
                src={image.src}
                alt='Nheenga Cabana | Imagem de processo'
                className='object-center'
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry> */}
        {/* <div className='w-full grid grid-cols-12 object-cover gap-0'> */}

        <div
          ref={ref}
          className={`w-full text-md md:text-md mb-4 p-6 bg-[#d6d5c2]/40 rounded-sm dark:bg-[#633636] leading-relaxed duration-700 ${
            inView ? 'opacity-100 translate-x-0' : 'translate-x-10 opacity-0'
          }`}
        >
          <p className='mb-2'>
            O diálogo que tivemos com as máquinas geradoras de imagem com IA a
            partir de textos (
            <span className='italic'>text-to-image AI image generators</span>)
            produziu um arquivo extenso que não foi utilizado nas três
            composições exibidas na exposição{' '}
            <span className='italic'>Atos de revolta</span>, e nem impresso na
            edição extraordinária do{' '}
            <span className='italic'>Jornal Pessoal</span>.
          </p>{' '}
          <p>
            A seleção abaixo é composta por 200 imagens deste percurso, erros e
            acertos, criadas com prompts mostrados na seção seguinte. Faça
            clique em qualquer uma das imagens para vê-la em tela cheia.
          </p>
        </div>

        <div className='flex flex-wrap gap-1'>
          {imagesData.map((image, index) => (
            <div
              key={image.src_sm}
              className='z-1 flex items-center justify-center max-h-[4.1rem] max-w-[4.1rem] md:hover:overflow-visible md:hover:h-24 md:hover:w-24 duration-300'
            >
              <img
                src={image.src_sm}
                alt='Nheenga Cabana | Imagem de processo'
                className='object-cover w-[4.1rem] h-[4.1rem] md:hover:w-24 md:hover:h-24 object-center duration-300 md:hover:overflow-visible ease-in-out cursor-pointer md:hover:z-10'
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsOpen(true);
                }}
              />
            </div>
          ))}
        </div>
        <Lightbox
          isOpen={isOpen}
          onPrev={gotoPrevious}
          onNext={gotoNext}
          onClose={onClose}
          images={imagesData}
          currentIndex={currentImageIndex}
          singleClickToZoom
          renderPrevButton={({ canPrev }) =>
            canPrev && <PrevButton gotoPrevious={gotoPrevious} />
          }
          renderNextButton={({ canNext }) =>
            canNext && <NextButton setIsOpen={setIsOpen} gotoNext={gotoNext} />
          }
          renderImageOverlay={() => (
            <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
        />
      </div>
    </div>
  );
}

const PrevButton = ({ gotoPrevious }) => {
  return (
    <div
      className='absolute top-[50%] -translate-y-[50%] left-0 p-4 z-[10] cursor-pointer hidden sm:block'
      onClick={gotoPrevious}
    >
      <IoIosArrowBack size={40} color={'#d1d1d1'} />
    </div>
  );
};
const NextButton = ({ gotoNext, setIsOpen }) => {
  return (
    <>
      <div
        className='absolute top-[50%] -translate-y-[50%] right-0 p-4 z-[10] cursor-pointer hidden sm:block select-none'
        onClick={gotoNext}
      >
        <IoIosArrowForward size={40} color={'#d1d1d1'} />
      </div>
      <div
        className='top-4 right-4 absolute text-[#d1d1d1] sm:hidden'
        onClick={() => setIsOpen(false)}
      >
        x
      </div>
    </>
  );
};
const Overlay = ({ setIsOpen, isOpen }) => {
  return (
    <div
      className='fixed right-0 top-0 bg-black/80 w-full h-screen z-[-100]'
      //   style={{ display: isOpen ? 'block' : 'hidden' }}
      onClick={() => setIsOpen(false)}
    ></div>
  );
};

//NextJS Image in PhotoAlbum:
const NextJSImage = ({
  setCurrentImageIndex,
  setIsOpen,
  photo,
  imageProps: { src, alt, onClick },
  wrapperStyle,
  //   onClick,
}) => {
  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        fill
        src={src}
        alt={alt}
        sizes={{
          size: 'calc(100vw - 240px)',
          sizes: [{ viewport: '(max-width: 960px)', size: '100vw' }],
        }}
        // onClick={({ index }) => {
        //   setCurrentImageIndex(index);
        //   setIsOpen(true);
        // }}
        onClick={onClick}
      />
    </div>
  );
};
