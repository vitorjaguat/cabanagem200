import Image from 'next/image';
import Lightbox from 'react-spring-lightbox';
import { IoIosArrowBack, IoIosArrowForward, IoClose } from 'react-icons/io';
import { useState } from 'react';

export default function Vistas() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imgArr = new Array(6).fill({});
  const imgData = imgArr.map((item, i) => ({
    src: '/assets/vistas/lg/0' + (i + 1) + '.jpg',
    src_sm: '/assets/vistas/sm/0' + (i + 1) + '.jpg',
    alt: 'Atos de Revolta | Vistas da exposição',
    loading: 'lazy',
    width: i <= 3 ? 1500 : 2999,
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
    <div className='flex pt-8 pb-32 md:pb-80' id='arquivo'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 h-fit flex items-center sticky top-14 md:pt-4 shrink-0'
        style={{ writingMode: 'vertical-rl' }}
      >
        <div className='h-fit text-[11px] md:text-sm px-3 md:px-4'>
          <span className='font-stanleybold'>EXPOSIÇÃO&ensp;&ensp;</span>
          <span>VISTAS</span>
        </div>
      </div>
      <div className='md:pt-2 mr-2 md:mr-4'>
        <div className='flex flex-wrap'>
          {imgData.map((img, i) => (
            <div className='w-1/3 p-2'>
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
