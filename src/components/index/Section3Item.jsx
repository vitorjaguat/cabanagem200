import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Section3Modal from './Section3Modal';

export default function Section3Item({
  obrImg,
  instImg,
  title,
  media,
  measure,
  date,
  modalNumber1,
  modalNumber2,
}) {
  const img1Ref = useRef();
  const [showTitle1, setShowTitle1] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalInitialImage, setModalInitialImage] = useState(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = (e) => {
    if (e.currentTarget !== img1Ref.current) return;
    setMousePosition({
      x: e.clientX - img1Ref.current.getBoundingClientRect().left,
      y: e.clientY - img1Ref.current.getBoundingClientRect().top,
    });
  };

  const handleHideModal = (e) => {
    if (
      e.target.tagName.toLowerCase() === 'img' ||
      e.target.tagName.toLowerCase() === 'svg' ||
      e.target.tagName.toLowerCase() === 'button' ||
      e.target.tagName.toLowerCase() === 'path'
    )
      return;
    console.log(e.target.tagName);
    setShowModal(false);
  };

  // console.log(modalInitialImage);
  return (
    <>
      {/* MODAL */}

      {showModal && (
        <Section3Modal
          initialImage={modalInitialImage}
          handleHideModal={handleHideModal}
        />
      )}

      {/* SEC3ITEM */}
      <div className='w-full flex flex-col items-center pb-16'>
        <div
          className='flex flex-col md:w-full md:flex-row md:justify-between gap-2 md:gap-4 relative cursor-none '
          ref={img1Ref}
          onMouseMove={handleMouseEnter}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
          {/* FRENTE */}
          <div className='cursor-none pr-2 md:pr-0'>
            <Image
              width={1050}
              height={1050}
              src={obrImg}
              alt={title}
              // placeholder='blur'
              onClick={() => {
                setModalInitialImage(modalNumber1);
                setShowModal(true);
              }}
              className='md:max-h-[calc(100vh-4rem)] md:max-w-[calc(100vh-4rem)]'
            />
          </div>
          {/* VERSO */}
          <div className='flex w-full max-w-[calc(100vw-7.5rem)] md:max-w-none md:w-auto md:h-full md:flex-col md:justify-end  pr-2 md:pr-4 cursor-none md:shrink-0'>
            <Image
              src={obrImg}
              height={1050}
              className='md:h-full md:w-auto'
              alt={title}
              placeholder='blur'
              onClick={() => {
                setModalInitialImage(modalNumber2);
                setShowModal(true);
              }}
            />
            {/* Ficha técnica MOBILE */}
            <div className='md:hidden pl-2 flex flex-col justify-end'>
              <p className='font-stanleybold text-[10px] leading-tight'>
                {title}
              </p>
              <p className='leading-0 text-[9px] leading-tight'>{media}</p>
              <p className='text-[9px] leading-tight'>{measure}</p>
              <p className='text-[9px] leading-tight'>{date}</p>
            </div>
          </div>

          {/* Ficha técnica DESKTOP */}
          <div
            className='bg-[#00000090] md:py-2 md:pr-3 pl-4 h-0 md:h-auto md:max-w-[200px] text-slate-200 tracking-wide rounded-sm absolute cursor-pointer overflow-hidden select-none'
            style={{
              display: mousePosition.x !== 0 ? 'block' : 'none',
              top: mousePosition.y,
              left: mousePosition.x,
              pointerEvents: 'none',
            }}
            // onClick={alert('clicked')}
          >
            <p className='font-stanleybold text-[13px] leading-5'>{title}</p>
            <p className='leading-4 text-[13px]'>{media}</p>
            <p className='text-[13px] leading-4'>{measure}</p>
            <p className='text-[13px] leading-4'>{date}</p>
          </div>
        </div>
        {/* <div className='h-4 md:h-16 w-[80%] border-b-[1px] border-dotted border-black'></div> */}
      </div>
    </>
  );
}
