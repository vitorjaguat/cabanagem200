import Image from 'next/image';
import Lightbox from 'react-spring-lightbox';
import { IoIosArrowBack, IoIosArrowForward, IoClose } from 'react-icons/io';
import { useState } from 'react';
import Link from 'next/link';

export default function Vistas() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imgArr = new Array(6).fill({});
  const imgData = imgArr.map((item, i) => ({
    src: '/assets/vistas/lg/0' + (i + 1) + '.jpg',
    src_sm: '/assets/vistas/sm/0' + (i + 1) + '.jpg',
    alt: 'Atos de Revolta | Vistas da exposição',
    loading: 'lazy',
    width: i <= 2 ? 1500 : 2999,
    height: 2000,
  }));
  //   console.log(imgData);

  //Lightbox:
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentImageIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < imgData.length &&
    setCurrentImageIndex(currentImageIndex + 1);

  const onClose = () => setIsOpen(false);

  return (
    <div className='flex pt-8 pb-32 md:pb-50' id='vistas'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 h-fit flex items-center sticky top-14 md:pt-4 shrink-0'
        style={{ writingMode: 'vertical-rl' }}
      >
        <div className='h-fit text-[11px] md:text-sm px-3 md:px-4  tracking-wider'>
          <span className='font-stanleybold'>EXPOSIÇÃO&ensp;&ensp;</span>
          <span>VISTAS</span>
        </div>
      </div>
      <div className='md:mt-4 mr-4'>
        <div className='mb-4 p-4 bg-[#d6d5c2] rounded-sm text-sm md:text-md w-full dark:bg-[#633636]'>
          A instalação{' '}
          <span className='font-stanleyitalic'>Nheenga Cabana</span> foi
          apresentada em três painéis expográficos no interior do espaço
          expositivo do MAM-Rio durante a exposição{' '}
          <span className='font-stanleyitalic'>
            Atos de Revolta: outros imaginários sobre a independência
          </span>
          . Os mobiliários foram desenhados por Juliana Godoy em aço e
          compensados de madeira. Na frente, visitantes encontravam as imagens
          de grande formato e exemplares do{' '}
          <span className='font-stanleyitalic'>
            Jornal Pessoal - Edição Extraordinária
          </span>
          ; e no verso, anotações em acetatos com entradas de textos (
          <span className='font-stanleyitalic'>prompts</span>) utilizadas no
          processo de criação destes trabalhos. Veja mais sobre a exposição na
          seção{' '}
          <Link
            className='text-slate-700 tracking-tight font-stanleybold hover:underline dark:text-slate-400'
            href='/press'
          >
            Imprensa
          </Link>
          .
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
          {imgData.map((img, i) => (
            <div className='' key={i}>
              <Image
                src={img.src}
                width={img.width}
                height={img.height}
                onClick={() => {
                  setCurrentImageIndex(i);
                  setIsOpen(true);
                }}
                className='cursor-pointer'
              />
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        onClose={onClose}
        images={imgData}
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
