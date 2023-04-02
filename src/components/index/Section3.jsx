import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import inst1Img from '../../../public/img/inst1.jpg';
import inst2Img from '../../../public/img/inst2.jpg';
import inst3Img from '../../../public/img/inst3.jpg';
import obr1Img from '../../../public/img/obr1.jpg';
import obr2Img from '../../../public/img/obr2.jpg';
import obr3Img from '../../../public/img/obr3.jpg';
import { useEffect, useRef, useState } from 'react';

export default function Section3() {
  const { ref, inView } = useInView();
  const img1Ref = useRef();
  const [showTitle1, setShowTitle1] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  //   useEffect(() => {
  //     const mouseMove = (e) => {
  //       //   console.log(e.target);
  //       if (e.target !== img1Ref.current) return;

  //       setMousePosition((currPosition) => {
  //         return {
  //           x: e.clientX,
  //           y: e.clientY,
  //         };
  //       });
  //       console.log(mousePosition);
  //     };

  //     window.addEventListener('mousemove', mouseMove);

  //     return () => {
  //       window.removeEventListener('mousemove', mouseMove);
  //     };
  //   }, []);

  const handleMouseEnter1 = (e) => {
    if (e.currentTarget !== img1Ref.current) return;
    setMousePosition({
      x: e.clientX - img1Ref.current.getBoundingClientRect().left,
      y: e.clientY - img1Ref.current.getBoundingClientRect().top,
    });
  };
  console.log(mousePosition);

  return (
    <div className='flex'>
      <div
        className='w-14 md:w-20 h-[calc(100vh-3rem)] pt-6 flex items-center sticky top-14'
        style={{ writingMode: 'vertical-rl', height: 'calc(100vh-20px)' }}
      >
        <div className='min-h-[350px] max-h-[350px] md:max-h-[500px] md:min-h-[500px] text-xs md:text-sm'>
          <span className='font-bold'>Nheenga Cabana</span>, 2022 Instalação com
          painéis expográficos, impressões em jato de tinta e tiragem offset de
          jornal
        </div>
      </div>

      <div className='h-[3000px] w-full flex flex-col items-center pt-6'>
        <div
          className='flex gap-4 relative cursor-none'
          ref={img1Ref}
          onMouseMove={handleMouseEnter1}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
          <div className=' cursor-none'>
            <Image src={inst1Img} alt='7 de Janeiro de 1835' />
          </div>

          <div className='pr-4 cursor-none'>
            <Image src={obr1Img} alt='7 de Janeiro de 1835' />
          </div>

          <div
            className='bg-[#00000090] py-2 pr-3 pl-4 max-w-[200px] text-slate-200 tracking-wide rounded-sm absolute cursor-none'
            style={{
              display: mousePosition.x !== 0 ? 'block' : 'none',
              top: mousePosition.y,
              left: mousePosition.x,
            }}
          >
            <p className='font-stanleybold text-[13px] leading-5'>
              7 de Janeiro de 1835
            </p>
            <p className='leading-4 text-[13px]'>
              Impressão em jato de tinta sobre papel de algodão a partir de
              imagens geradas por aprendizagem de máquina
            </p>
            <p className='text-[13px] leading-4'>110x110cm</p>
            <p className='text-[13px] leading-4'>2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
