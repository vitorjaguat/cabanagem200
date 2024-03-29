// import probe from 'probe-image-size';
import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'react-spring-lightbox';
import { IoIosArrowBack, IoIosArrowForward, IoClose } from 'react-icons/io';
import Image from 'next/image';

// const images = [
//   {
//     src: '/assets/percurso/001_percurso.png',
//     original: '/assets/percurso/001_percurso.png',
//     width: 320,
//     height: 320,
//     caption: 'Nheenga Cabana | Imagem de percurso',
//   },
//   {
//     src: '/assets/percurso/002_percurso.png',
//     original: '/assets/percurso/002_percurso.png',
//     width: 320,
//     height: 320,
//     caption: 'Nheenga Cabana | Imagem de percurso',
//   },
//   {
//     src: '/assets/percurso/003_percurso.png',
//     original: '/assets/percurso/003_percurso.png',
//     width: 320,
//     height: 320,
//     caption: 'Nheenga Cabana | Imagem de percurso',
//   },
//   {
//     src: '/assets/percurso/004_percurso.png',
//     original: '/assets/percurso/004_percurso.png',
//     width: 900,
//     height: 900,
//     caption: 'Nheenga Cabana | Imagem de percurso',
//   },
//   {
//     src: '/assets/percurso/005_percurso.png',
//     original: '/assets/percurso/005_percurso.png',
//     width: 320,
//     height: 320,
//     caption: 'Nheenga Cabana | Imagem de percurso',
//   },
//   {
//     src: '/assets/percurso/006_percurso.png',
//     original: '/assets/percurso/005_percurso.png',
//     width: 600,
//     height: 200,
//     caption: 'Nheenga Cabana | Imagem de percurso',
//   },
//   {
//     src: '/assets/percurso/007_percurso.png',
//     original: '/assets/percurso/005_percurso.png',
//     width: 320,
//     height: 320,
//     caption: 'Nheenga Cabana | Imagem de percurso',
//   },
//   {
//     src: '/assets/percurso/008_percurso.png',
//     original: '/assets/percurso/005_percurso.png',
//     width: 320,
//     height: 320,
//     caption: 'Nheenga Cabana | Imagem de percurso',
//   },
//   {
//     src: '/assets/percurso/009_percurso.png',
//     original: '/assets/percurso/005_percurso.png',
//     width: 320,
//     height: 320,
//     caption: 'Nheenga Cabana | Imagem de percurso',
//   },
//   {
//     src: '/assets/percurso/010_percurso.png',
//     original: '/assets/percurso/005_percurso.png',
//     width: 320,
//     height: 320,
//     caption: 'Nheenga Cabana | Imagem de percurso',
//   },
// ];

// const images2 = [
//   '/assets/percurso/001_percurso.png',
//   '/assets/percurso/002_percurso.png',
//   '/assets/percurso/003_percurso.png',
//   '/assets/percurso/004_percurso.png',
//   '/assets/percurso/005_percurso.png',
//   '/assets/percurso/006_percurso.png',
//   '/assets/percurso/007_percurso.png',
//   '/assets/percurso/008_percurso.png',
//   '/assets/percurso/009_percurso.png',
//   '/assets/percurso/010_percurso.png',
//   '/assets/percurso/026_percurso.png',
//   '/assets/percurso/027_percurso.png',
//   '/assets/percurso/028_percurso.png',
//   '/assets/percurso/029_percurso.png',
//   '/assets/percurso/030_percurso.png',
//   '/assets/percurso/031_percurso.png',
//   '/assets/percurso/032_percurso.png',
//   '/assets/percurso/033_percurso.png',
//   '/assets/percurso/034_percurso.png',
//   '/assets/percurso/035_percurso.png',
// ];

export default function GaleriaProcesso({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //   const currentImage = images[index];
  //   const nextIndex = (index + 1) % images.length;
  //   const nextImage = images[nextIndex] || currentImage;
  //   const prevIndex = (index + images.length - 1) % images.length;
  //   const prevImage = images[prevIndex] || currentImage;

  //   const handleClick = (index, item) => setIndex(index);
  //   const handleClose = () => setIndex(-1);
  //   const handleMovePrev = () => setIndex(prevIndex);
  //   const handleMoveNext = () => setIndex(nextIndex);

  //constructing image data:
  const imagesData = images.map((image) => ({
    src: image.url.slice(6),
    width: image.size.width,
    height: image.size.height,
    alt: 'Nheenga Cabana | Imagem de percurso',
    loading: 'lazy',
  }));

  //Lightbox:
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentImageIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < imagesData.length &&
    setCurrentImageIndex(currentImageIndex + 1);

  const onClose = () => setIsOpen(false);

  return (
    <div className=''>
      {/* <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={300}
      /> */}
      <PhotoAlbum
        layout='columns'
        photos={imagesData}
        // renderPhoto={NextJSImage}
        onClick={({ index }) => {
          setCurrentImageIndex(index);
          setIsOpen(true);
        }}
        defaultContainerWidth={1200}
        // setCurrentImageIndex={setCurrentImageIndex}
        // setIsOpen={setIsOpen}
      />
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
