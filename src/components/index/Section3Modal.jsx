import Image from 'next/image';
import { useState } from 'react';

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
  //   const [hideModal, setHideModal] = useState(false);

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
  //   console.log(clickedImage);

  return (
    <div
      className={
        'fixed top-0 left-0 w-screen h-screen z-[100] flex justify-between items-center'
      }
      style={{ background: 'rgba(0,0,0,0.93' }}
      onClick={handleHideModal}
    >
      <div className='flex items-center justify-center h-full w-20'>
        <button
          className='p-2 text-[#717171] duration-100 hover:text-white'
          onClick={prevImage}
        >
          <AiOutlineLeft size={30} />
        </button>
      </div>
      <div className=''>
        <Image
          alt={imgSrcArr[clickedImage].title}
          src={imgSrcArr[clickedImage].src}
          width={650}
          height={650}
        />
      </div>
      <div className='flex items-center justify-center h-full w-20'>
        <button
          className='p-2 text-[#717171] duration-100 hover:text-white'
          onClick={nextImage}
        >
          <AiOutlineRight size={30} style={{ zIndex: '1000' }} />
        </button>
      </div>
    </div>
  );
}
