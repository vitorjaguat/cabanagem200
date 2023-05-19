import Image from 'next/image';
import inst1Img from '../../../public/img/inst1.jpg';
import inst2Img from '../../../public/img/inst2.jpg';
import inst3Img from '../../../public/img/inst3.jpg';
import obr1Img from '../../../public/img/obr1.jpg';
import obr2Img from '../../../public/img/obr2.jpg';
import obr3Img from '../../../public/img/obr3.jpg';
import { useEffect, useRef, useState } from 'react';
import Section3Item from './Section3Item';
import Section3ItemJ from './Section3ItemJ';
import Lightbox from 'react-spring-lightbox';
import { IoIosArrowForward, IoClose, IoIosArrowBack } from 'react-icons/io';

const imgSrcArr = [
  {
    src: '/img/obr1.jpg',
    title: '7 de Janeiro de 1835',
    media:
      'Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina',
    measure: '110x110cm',
    year: '2022',
  },
  {
    src: '/img/inst1.jpg',
    title: '7 de Janeiro de 1835',
    media:
      'Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina',
    measure: '110x110cm',
    year: '2022',
  },
  {
    src: '/img/obr2.jpg',
    title: '256 cabanxs',
    media:
      'Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina',
    measure: '110x110cm',
    year: '2022',
  },
  {
    src: '/img/inst2.jpg',
    title: '256 cabanxs',
    media:
      'Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina',
    measure: '110x110cm',
    year: '2022',
  },
  {
    src: '/img/obr3.jpg',
    title: 'Sonho Cabano',
    media:
      'Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina',
    measure: '110x110cm',
    year: '2022',
  },
  {
    src: '/img/inst3.jpg',
    title: 'Sonho Cabano',
    media:
      'Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina',
    measure: '110x110cm',
    year: '2022',
  },
];

export default function Section3() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //constructins ImagesData for Lightbox:
  const imagesData = imgSrcArr.map((item) => ({
    src: item.src,
    width: 1500,
    height: 1500,
    alt: item.title,
    loading: 'lazy',
  }));
  // console.log(imagesData);

  //Lightbox functions:
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentImageIndex(currentImageIndex - 1);
  const gotoNext = () =>
    currentImageIndex + 1 < imagesData.length &&
    setCurrentImageIndex(currentImageIndex + 1);
  const onClose = () => setIsOpen(false);

  return (
    <div className='flex w-full'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 min-h-[350px] max-h-[350px] md:max-h-[500px] md:min-h-[500px] flex items-center sticky top-14 md:pt-4 shrink-0'
        style={{ writingMode: 'vertical-rl', height: 'calc(100vh-20px)' }}
      >
        <div className='min-h-[350px] max-h-[350px] md:max-h-[500px] md:min-h-[500px] text-[11px] md:text-sm px-3 md:px-4'>
          <span className='font-bold'>Nheenga Cabana</span>, 2022 Instalação com
          painéis expográficos, impressões em jato de tinta e tiragem offset de
          jornal
        </div>
      </div>

      <div className='flex flex-col items-center md:pt-4'>
        <div
          id='obra1'
          className='grid grid-rows-2 md:grid-cols-5 w-full h-fit gap-2 md:gap-4 pr-2 md:pr-0'
        >
          <div className='row-span-1 md:col-span-2'>
            <Image
              src={imgSrcArr[0].src}
              alt={imgSrcArr[0].title}
              width={1500}
              height={1500}
              className=''
              onClick={() => {
                setCurrentImageIndex(0);
                setIsOpen(true);
              }}
            />
          </div>
          <div className='row-span-1 md:col-span-2'>
            <Image
              src={imgSrcArr[1].src}
              alt={imgSrcArr[1].title}
              width={1500}
              height={1500}
              className=''
              onClick={() => {
                setCurrentImageIndex(0);
                setIsOpen(true);
              }}
            />
          </div>
          <div className='col-span-1 flex flex-col justify-end leading-3 text-[10px] md:text-xs md:pr-4 text-right md:text-left pl-[40%] md:pl-0'>
            <p className='font-stanleybold text-[11px] md:text-[13px] leading-4'>
              {imgSrcArr[0].title}
            </p>
            <p className=''>{imgSrcArr[0].media}</p>
            <p className=''>{imgSrcArr[0].measure}</p>
            <p className=''>{imgSrcArr[0].date}</p>
          </div>
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

        {/* IMAGES */}
        {/* <Section3Item
          obrImg={obr1Img}
          instImg={inst1Img}
          title='7 de Janeiro de 1835'
          media='Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina'
          measure='110x110cm'
          date='2022'
          modalNumber1={0}
          modalNumber2={1}
        />
        <Section3Item
          obrImg={obr2Img}
          instImg={inst2Img}
          title='256 cabanxs'
          media='Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina'
          measure='110x110cm'
          date='2022'
          modalNumber1={2}
          modalNumber2={3}
        />
        <Section3Item
          obrImg={obr3Img}
          instImg={inst3Img}
          title='Sonho Cabano'
          media='Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina'
          measure='110x110cm'
          date='2022'
          modalNumber1={4}
          modalNumber2={5}
        /> */}
        {/* IMAGE 2 */}
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
