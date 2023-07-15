import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import jornalAbertoImg from '../../../public/img/jornal-aberto.jpg';

export default function Section3ItemJ() {
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
  // console.log(mousePosition);

  return (
    <div className='w-full flex flex-col items-center'>
      <div
        className='flex flex-col md:flex-row gap-2 md:gap-4 relative cursor-none'
        ref={img1Ref}
        onMouseMove={handleMouseEnter1}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        {/* <div className='cursor-none pr-2 md:pr-0'>
          <Image src={obrImg} alt='7 de Janeiro de 1835' />
        </div> */}
        <div className='flex flex-col md:block pr-2 md:pr-4 cursor-none'>
          <Image
            src={jornalAbertoImg}
            className=''
            alt='Edição Extraordinária do Jornal Pessoal, de Lúcio Flávio Pinto'
          />
          {/* Ficha técnica MOBILE */}
          <div className='md:hidden pt-3 pl-[6rem] md:pl-2 text-end'>
            <p className='font-stanleybold text-[10px] leading-tight'>
              Edição Extraordinária do Jornal Pessoal — A Agenda Amazônica de
              Lúcio Flávio Pinto
            </p>
            <p className='leading-0 text-[9px] leading-tight'>
              Impressão offset
            </p>
            <p className='text-[9px] leading-tight'>27x20 cm, 32 páginas</p>
            <p className='text-[9px] leading-tight'>Edição de 5.000 cópias</p>
            <p className='text-[9px] leading-tight'>2022</p>
          </div>
        </div>

        {/* Ficha técnica DESKTOP */}
        <div
          className='bg-[#00000090] md:py-2 md:pr-3 pl-4 h-0 md:h-auto md:max-w-[250px] text-slate-200 tracking-wide rounded-sm absolute cursor-none overflow-hidden'
          style={{
            display: mousePosition.x !== 0 ? 'block' : 'none',
            top: mousePosition.y,
            left: mousePosition.x,
          }}
        >
          <p className='font-stanleybold text-[13px] leading-4'>
            Edição Extraordinária do Jornal Pessoal — A Agenda Amazônica de
            Lúcio Flávio Pinto
          </p>
          <p className='leading-4 text-[13px]'>Impressão offset</p>
          <p className='text-[13px] leading-4'>27x20 cm, 32 páginas</p>
          <p className='text-[13px] leading-4'>Edição de 5.000 cópias</p>
          <p className='text-[13px] leading-4'>2022</p>
        </div>
      </div>
      {/* <div className='h-4 md:h-16 w-[80%] border-b-[1px] border-dotted border-black'></div> */}
    </div>
  );
}
