import Image from 'next/image';
import { useState, useRef } from 'react';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

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

export default function Section3Modal({ initialImage, handleHideModal }) {
  const [clickedImage, setClickedImage] = useState(initialImage);
  const img1Ref = useRef();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const nextImage = () => {
    if (clickedImage >= imgSrcArr.length - 1) {
      setClickedImage(0);
    } else {
      setClickedImage((curr) => curr + 1);
    }
  };
  const prevImage = () => {
    if (clickedImage === 0) {
      setClickedImage((curr) => imgSrcArr.length - 1);
    } else {
      setClickedImage((curr) => curr - 1);
    }
  };

  const handleMouseEnter = (e) => {
    // if (e.currentTarget !== img1Ref.current) return;
    setMousePosition({
      x: e.clientX - img1Ref.current.getBoundingClientRect().left,
      y: e.clientY - img1Ref.current.getBoundingClientRect().top,
    });
    console.log(e.target, mousePosition.x);
  };

  return (
    <div
      className='fixed top-0 left-0 w-screen h-screen z-[100] flex flex-col md:flex-row justify-center md:justify-between items-center duration-600'
      style={{
        background: 'rgba(0,0,0,0.93)',
        transition: 'all 1s',
      }}
      onClick={handleHideModal}
      onMouseMove={handleMouseEnter}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      {/* Prev image button (DESKTOP) */}
      <div className='hidden md:flex items-center justify-center h-full w-20'>
        <button
          className='p-2 text-[#717171] duration-100 hover:text-white'
          onClick={prevImage}
        >
          <AiOutlineLeft size={30} />
        </button>
      </div>

      <div className='px-2 md:px-0 w-fit relative' ref={img1Ref}>
        <Image
          alt={imgSrcArr[clickedImage].title}
          src={imgSrcArr[clickedImage].src}
          width={650}
          height={650}
        />
        {/* Ficha técnica DESKTOP */}
        <div
          className='bg-[#00000090] md:py-2 md:pr-3 pl-4 h-0 md:h-auto md:max-w-[200px] md:min-w-[200px] text-slate-200 tracking-wide rounded-sm absolute overflow-hidden select-none'
          style={{
            display: mousePosition.x !== 0 ? 'block' : 'none',
            top: mousePosition.y,
            left: mousePosition.x,
            pointerEvents: 'none',
          }}
          // onClick={alert('clicked')}
        >
          <p className='font-stanleybold text-[13px] leading-5'>
            {imgSrcArr[clickedImage].title}
          </p>
          <p className='leading-4 text-[13px]'>
            {imgSrcArr[clickedImage].media}
          </p>
          <p className='text-[13px] leading-4'>
            {imgSrcArr[clickedImage].measure}
          </p>
          <p className='text-[13px] leading-4'>
            {imgSrcArr[clickedImage].year}
          </p>
        </div>
      </div>
      {/* Next image button (DESKTOP) */}
      <div className='hidden md:flex items-center justify-center h-full w-20'>
        <button
          className='p-2 text-[#717171] duration-100 hover:text-white'
          onClick={nextImage}
        >
          <AiOutlineRight size={30} style={{ zIndex: '1000' }} />
        </button>
      </div>

      {/* Prev/Next buttons (MOBILE) */}
      <div className='absolute bottom-[10%] flex justify-center gap-6'>
        <button
          className='p-2 text-[#717171] duration-100 hover:text-white'
          onClick={prevImage}
        >
          <AiOutlineLeft size={34} />
        </button>
        <button
          className='p-2 text-[#717171] duration-100 hover:text-white'
          onClick={nextImage}
        >
          <AiOutlineRight size={34} style={{ zIndex: '1000' }} />
        </button>
      </div>
    </div>
  );
}
