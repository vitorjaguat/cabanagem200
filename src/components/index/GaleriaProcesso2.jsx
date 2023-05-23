// import probe from 'probe-image-size';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { Gallery } from 'react-grid-gallery';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'react-spring-lightbox';
import { IoIosArrowBack, IoIosArrowForward, IoClose } from 'react-icons/io';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function GaleriaProcesso2({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // const memoTest = useMemo(() => console.log('memo!'), [...imagesData]);

  // console.log(imagesData);

  //Lightbox:
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentImageIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < imagesData.length &&
    setCurrentImageIndex(currentImageIndex + 1);

  const onClose = () => setIsOpen(false);

  return (
    <div className='flex pt-8 pb-32 md:pb-80' id='arquivo'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 h-fit flex items-center sticky top-14 md:pt-4 shrink-0'
        style={{ writingMode: 'vertical-rl' }}
      >
        <div className='h-fit text-[11px] md:text-sm px-3 md:px-4'>
          <span className='font-stanleybold'>ARQUIVO&ensp;&ensp;</span>
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

        <div className='w-full text-sm md:text-md mb-4 p-4 bg-[hsl(57,20%,80%)] rounded-sm'>
          O diálogo que tivemos com as máquinas geradoras de imagem com IA a
          partir de textos (text-to-image AI image generators) produziu um
          arquivo extenso que não foi utilizado nas três composições exibidas na
          exposição <span className='font-stanleyitalic'>Atos de revolta</span>,
          e nem impresso na edição extraordinária do{' '}
          <span className='font-stanleyitalic'>Jornal Pessoal</span>. A seleção
          abaixo é composta por 200 imagens deste percurso, erros e acertos,
          criadas com prompts mostrados na seção seguinte. Faça clique em
          qualquer uma das imagens para vê-las em tela cheia.
        </div>

        <div className='flex flex-wrap gap-1 justify-center'>
          {imagesData.map((image, index) => (
            <div
              key={image.src_sm}
              className='hover:z-10 flex items-center justify-center overflow-visible max-h-[4.1rem] max-w-[4.1rem]'
            >
              <img
                src={image.src_sm}
                alt='Nheenga Cabana | Imagem de processo'
                className='object-cover w-[4.1rem] h-[4.1rem] hover:w-24 hover:h-24 hover:z-10 object-center duration-200 hover:overflow-visible ease-in-out cursor-pointer'
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
