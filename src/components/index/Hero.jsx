import Image from 'next/image';
import heroImg from '../../../public/img/hero.jpg';
import Marquee from 'react-fast-marquee';

export default function Hero() {
  return (
    <div className='overflow-hidden'>
      <div
        className='flex items-center justify-center h-screen md:w-screen mt-[4.5rem] md:h-[calc(100vh-4.5rem)]'
        // style={{ objectPosition: '50% 100%' }}
        // style={{ objectFit: 'cover' }}
      >
        <div className='h-full flex flex-col justify-end'>
          <div className='grid grid-cols-3 h-full'>
            <div className='w-full h-full col-span-1 bg-black/20'></div>
            <div className='w-full h-full col-span-1 bg-black/30'></div>
            <div className='w-full h-full col-span-1 bg-black/10'></div>
          </div>
          <div className='min-h-[4.5rem] bg-[#e1e1e1] flex items-center'>
            <Marquee speed={100} className='text-5xl tracking-wider uppercase'>
              estoura insurreição popular na Amazônia durante a
              madrugada&nbsp;&nbsp;&nbsp;
            </Marquee>
          </div>
        </div>
        {/* <Image
          src={heroImg}
          alt='cabanagem200'
          fill
          className='object-cover'
          //   style={{ transform: 'translate(-1100px, 50px)' }}
          // sizes='(max-width: 768px) 300vw, (max-width: 1200px) 200vw, 100vw'
          unoptimized
        /> */}

        <div className='text-white z-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-7xl tracking-wider leading-relaxed text-center'>
          {/* O POVO EM ARMAS NA AMAZÔNIA */}
        </div>
      </div>
    </div>
  );
}
