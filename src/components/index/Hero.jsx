import Image from 'next/image';
import heroImg from '../../../public/img/hero.jpg';
import Marquee from 'react-fast-marquee';
import { useState, useEffect } from 'react';

const headlines = [
  'estoura insurreição popular na Amazônia durante a madrugada',
  'cabanos fazem barricadas de fogo em praça pública de Belém',
  'Império fracassa mais uma vez na contenção da revolta armada',
  'indígenas unem força com a insurreição popular amazônica',
];

export default function Hero({ images }) {
  // const [headline, setHeadline] = useState('');
  // useEffect(() => {
  //   const headlineContent =
  //     headlines[Math.floor(Math.random() * headlines.length)];
  //   console.log(headlineContent);
  // }, []);

  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  useEffect(() => {
    const randomImage = () =>
      images[Math.floor(Math.random() * images.length)].url.slice(6);
    setImage1(randomImage());
    setImage2(randomImage());
    setImage3(randomImage());
    setImage4(randomImage());
  }, [images]);
  console.log(image1);

  return (
    <div className='overflow-hidden h-screen'>
      <div
        className='w-screen p-0 m-0 h-screen'
        // style={{ objectPosition: '50% 100%' }}
        // style={{ objectFit: 'cover' }}
      >
        <div className='h-full flex flex-col justify-end md:pt-[4.5rem] pt-[3.5rem] '>
          <div className='md:pt-[4.5rem] grid grid-rows-2 h-full'>
            {/* <div className='w-full h-full md:h-[calc(100vh-4.5rem)] row-span-1 md:col-span-1 bg-black/20'>
              {image1 && <img src='/assets/percurso/171_percurso.png' alt='' />}
            </div>
            <div className='w-full h-full md:h-[calc(100vh-4.5rem)] row-span-1 md:col-span-1 bg-black/30'></div>
            <div className='w-full h-full md:h-[calc(100vh-4.5rem)] row-span-1 md:col-span-1 bg-black/10'></div> */}
            <div className='row-span-1 grid grid-cols-2'>
              <div className='col-span-1 bg-slate-100 object-cover overflow-hidden'>
                {image1 && (
                  <img
                    src={image1}
                    alt=''
                    className='h-full w-screen object-cover'
                  />
                )}
              </div>
              <div className='col-span-1 bg-slate-200'>
                {image2 && (
                  <img
                    src={image2}
                    alt=''
                    className='h-full w-screen object-cover'
                  />
                )}
              </div>
            </div>
            <div className='row-span-1 grid grid-cols-2'>
              <div className='col-span-1 bg-slate-300'>
                {image3 && (
                  <img
                    src={image3}
                    alt=''
                    className='h-full w-screen object-cover'
                  />
                )}
              </div>
              <div className='col-span-1 bg-slate-400'>
                {image4 && (
                  <img
                    src={image4}
                    alt=''
                    className='h-full w-screen object-cover'
                  />
                )}
              </div>
            </div>
          </div>
          <div className='min-h-[3.5rem] md:min-h-[4.5rem] bg-[#e1e1e1] flex items-center'>
            <Marquee
              speed={100}
              className='text-3xl md:text-4xl tracking-wider uppercase h-[2.5rem] md:h-[3rem]'
            >
              {headlines[Math.floor(Math.random() * headlines.length)] ||
                'estoura insurreição popular na Amazônia durante a madrugada'}
              &nbsp;&nbsp;&nbsp;
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
