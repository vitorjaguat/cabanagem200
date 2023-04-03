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

export default function Section3() {
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
    <div className='flex'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 min-h-[350px] max-h-[350px] md:max-h-[500px] md:min-h-[500px] flex items-center sticky top-14 md:pt-4'
        style={{ writingMode: 'vertical-rl', height: 'calc(100vh-20px)' }}
      >
        <div className='min-h-[350px] max-h-[350px] md:max-h-[500px] md:min-h-[500px] text-[11px] md:text-sm px-3 md:px-4'>
          <span className='font-bold'>Nheenga Cabana</span>, 2022 Instalação com
          painéis expográficos, impressões em jato de tinta e tiragem offset de
          jornal
        </div>
      </div>

      <div className='flex flex-col items-center'>
        {/* IMAGE 1 */}
        <Section3Item
          obrImg={obr1Img}
          instImg={inst1Img}
          title='7 de Janeiro de 1835'
          media='Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina'
          measure='110x110cm'
          date='2022'
        />
        <Section3Item
          obrImg={obr2Img}
          instImg={inst2Img}
          title='256 cabanxs'
          media='Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina'
          measure='110x110cm'
          date='2022'
        />
        <Section3Item
          obrImg={obr3Img}
          instImg={inst3Img}
          title='Sonho Cabano'
          media='Impressão em jato de tinta sobre papel de algodão a partir de imagens geradas por aprendizagem de máquina'
          measure='110x110cm'
          date='2022'
        />
        <Section3ItemJ />
        {/* <div className='w-full flex flex-col items-center'>
          <div
            className='flex flex-col md:flex-row gap-2 md:gap-4 relative cursor-none'
            ref={img1Ref}
            onMouseMove={handleMouseEnter1}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            <div className='cursor-none'>
              <Image src={obr1Img} alt='7 de Janeiro de 1835' />
            </div>
            <div className='flex md:block pr-2 md:pr-4 cursor-none'>
              <Image
                src={inst1Img}
                className='w-[200px] md:w-auto'
                alt='7 de Janeiro de 1835'
              />
              <div className='md:hidden pl-2 flex flex-col justify-end'>
                <p className='font-stanleybold text-[10px] leading-tight'>
                  7 de Janeiro de 1835
                </p>
                <p className='leading-0 text-[9px] leading-tight'>
                  Impressão em jato de tinta sobre papel de algodão a partir de
                  imagens geradas por aprendizagem de máquina
                </p>
                <p className='text-[9px] leading-tight'>110x110cm</p>
                <p className='text-[9px] leading-tight'>2022</p>
              </div>
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
          <div className='h-4 md:h-16 w-[80%] border-b-[1px] border-dotted border-black'></div>
        </div> */}

        {/* IMAGE 2 */}
        {/* <div className='pt-4 md:pt-16 w-full flex flex-col items-center'>
          <div
            className='flex flex-col md:flex-row gap-2 md:gap-4 relative cursor-none'
            ref={img1Ref}
            onMouseMove={handleMouseEnter1}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            <div className='cursor-none'>
              <Image src={obr1Img} alt='7 de Janeiro de 1835' />
            </div>
            <div className='flex md:block pr-2 md:pr-4 cursor-none'>
              <Image
                src={inst1Img}
                className='w-[200px] md:w-auto'
                alt='7 de Janeiro de 1835'
              />
              <div className='md:hidden pl-2 flex flex-col justify-end'>
                <p className='font-stanleybold text-[10px] leading-tight'>
                  7 de Janeiro de 1835
                </p>
                <p className='leading-0 text-[9px] leading-tight'>
                  Impressão em jato de tinta sobre papel de algodão a partir de
                  imagens geradas por aprendizagem de máquina
                </p>
                <p className='text-[9px] leading-tight'>110x110cm</p>
                <p className='text-[9px] leading-tight'>2022</p>
              </div>
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
          <div className='h-4 md:h-16 w-[80%] border-b-[1px] border-dotted border-black'></div>
        </div> */}
      </div>
    </div>
  );
}
