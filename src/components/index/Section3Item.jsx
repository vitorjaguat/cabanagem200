import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Section3Item({
  obrImg,
  instImg,
  title,
  media,
  measure,
  date,
}) {
  const img1Ref = useRef();
  const [showTitle1, setShowTitle1] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseEnter1 = (e) => {
    if (e.currentTarget !== img1Ref.current) return;
    setMousePosition({
      x: e.clientX - img1Ref.current.getBoundingClientRect().left,
      y: e.clientY - img1Ref.current.getBoundingClientRect().top,
    });
  };
  console.log(mousePosition);

  return (
    <div className='w-full flex flex-col items-center pb-16'>
      <div
        className='flex flex-col md:flex-row gap-2 md:gap-4 relative cursor-none'
        ref={img1Ref}
        onMouseMove={handleMouseEnter1}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        <div className='cursor-none pr-2 md:pr-0'>
          <Image src={obrImg} alt='7 de Janeiro de 1835' placeholder='blur' />
        </div>
        <div className='flex w-full md:w-auto md:h-full md:flex-col md:justify-end  pr-2 md:pr-4 cursor-none md:shrink-0'>
          <Image
            src={instImg}
            width={350}
            // className='w-[200px] md:w-auto'
            alt={title}
            placeholder='blur'
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
          className='bg-[#00000090] md:py-2 md:pr-3 pl-4 h-0 md:h-auto md:max-w-[200px] text-slate-200 tracking-wide rounded-sm absolute cursor-none overflow-hidden'
          style={{
            display: mousePosition.x !== 0 ? 'block' : 'none',
            top: mousePosition.y,
            left: mousePosition.x,
          }}
        >
          <p className='font-stanleybold text-[13px] leading-5'>{title}</p>
          <p className='leading-4 text-[13px]'>{media}</p>
          <p className='text-[13px] leading-4'>{measure}</p>
          <p className='text-[13px] leading-4'>{date}</p>
        </div>
      </div>
      {/* <div className='h-4 md:h-16 w-[80%] border-b-[1px] border-dotted border-black'></div> */}
    </div>
  );
}
