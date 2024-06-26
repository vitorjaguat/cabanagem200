import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useState, useEffect, useContext } from 'react';

const headlines = [
  'estoura insurreição popular na Amazônia durante a madrugada',
  'cabanos fazem barricadas de fogo em praça pública de Belém',
  'Dias seguidos de intensos combates nas ruas de Belém do Pará',
  'O povo toma o poder na província do Grão-Pará',
  'Império fracassa mais uma vez na contenção da revolta armada',
  'indígenas unem força com a insurreição popular amazônica',
  'Felipe Patroni retorna a Belém e reabre tipografia confiscada',
  'Guerra de morte é declarada ao marechal Jorge Rodrigues',
  'Eduardo Angelim, 21 anos, é eleito governador Cabano',
  'Assalto ao Clio: carga saqueada e tripulação aniquilada',
  'Massacre: 20% da população é dizimada após anos de conflito',
  // 'Cabanos se rendem na vila de Luséia, entregando as armas',
];

export default function Hero({ images }) {
  // const [headline, setHeadline] = useState('');
  // useEffect(() => {
  //   const headlineContent =
  //     headlines[Math.floor(Math.random() * headlines.length)];
  //   console.log(headlineContent);
  // }, []);
  // console.log(test);

  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [image5, setImage5] = useState('');
  const [image6, setImage6] = useState('');
  const [image7, setImage7] = useState('');
  const [image8, setImage8] = useState('');
  useEffect(() => {
    // const randomImage = () =>
    //   images[Math.floor(Math.random() * images.length)].url_lg.slice(6);
    const shuffleImages = images.sort(() => Math.random() - 0.5);
    setImage1(shuffleImages[1].url_lg.slice(6));
    setImage2(shuffleImages[2].url_lg.slice(6));
    setImage3(shuffleImages[3].url_lg.slice(6));
    setImage4(shuffleImages[4].url_lg.slice(6));
    setImage5(shuffleImages[5].url_lg.slice(6));
    setImage6(shuffleImages[6].url_lg.slice(6));
    setImage7(shuffleImages[7].url_lg.slice(6));
    setImage8(shuffleImages[8].url_lg.slice(6));
  }, [images]);
  const shuffleImagesArr = images.sort(() => Math.random() - 0.5);
  // console.log(image1);

  //Dark mode toggle:
  // const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === 'system' ? systemTheme : theme;
  // const { toggleDarkMode, darkMode } = useContext(ThemeContext);
  // console.log(toggleDarkMode);
  // console.log(images);

  return (
    <div
      className='overflow-hidden h-full w-full dark:bg-[rgb(38,44,44)] duration-700 transition-all'
      style={{ minHeight: '-webkit-fill-available' }}
      id='home'
    >
      <div
        className='w-full h-[calc(100vh-3.5rem)] md:h-screen md:pt-[4.5rem] pt-[3.5rem] flex flex-col dark:bg-[#262C2C]'
        style={{
          minHeight: '-webkit-fill-available',
          minHeight: 'fill-available',
        }}
      >
        <div className='grid grid-rows-2 h-full max-h-[calc(100%-3.5rem)] md:max-h-[calc(100%-4.5rem)] dark:bg-[#262C2C]'>
          <div className='row-span-1 grid grid-cols-2'>
            <div className='col-span-1 grid grid-cols-2 shrink-0 overflow-hidden'>
              {/* <div className='col-span-1'> */}
              <div className='relative col-span-1 object-cover overflow-hidden min-h-0 min-w-0'>
                {image1 && (
                  // <img
                  //   src={shuffleImagesArr[1].url_lg.slice(6)}
                  //   alt=''
                  //   className='h-full object-cover shrink-0'
                  // />
                  <Image
                    src={shuffleImagesArr[1].url_lg.slice(6)}
                    alt='cabanagem200.net'
                    fill
                    className='object-cover shrink-0 max-h-full'
                    placeholder='blur'
                    blurDataURL={shuffleImagesArr[1].url_sm.slice(6)}
                  />
                )}
              </div>
              {/* <div className='col-span-1'> */}
              <div className='relative col-span-1 object-cover overflow-hidden min-h-0 min-w-0'>
                {image2 && (
                  // <img
                  //   src={image2}
                  //   alt=''
                  //   className='h-full object-cover shrink-0'
                  // />
                  <Image
                    src={shuffleImagesArr[2].url_lg.slice(6)}
                    alt='cabanagem200.net'
                    fill
                    className='object-cover shrink-0 max-h-full'
                    placeholder='blur'
                    blurDataURL={shuffleImagesArr[2].url_sm.slice(6)}
                  />
                )}
              </div>
            </div>
            <div className='col-span-1 grid grid-cols-2 shrink-0'>
              {/* <div className='col-span-1'> */}
              <div className='relative col-span-1 object-cover overflow-hidden min-h-0 min-w-0'>
                {image3 && (
                  // <img
                  //   src={image3}
                  //   alt=''
                  //   className='h-full object-cover shrink-0'
                  // />
                  <Image
                    src={shuffleImagesArr[3].url_lg.slice(6)}
                    alt='cabanagem200.net'
                    fill
                    className='object-cover shrink-0 max-h-full'
                    placeholder='blur'
                    blurDataURL={shuffleImagesArr[3].url_sm.slice(6)}
                  />
                )}
              </div>
              {/* <div className='col-span-1'> */}
              <div className='relative col-span-1 object-cover overflow-hidden min-h-0 min-w-0'>
                {image4 && (
                  // <img
                  //   src={image4}
                  //   alt=''
                  //   className='h-full object-cover shrink-0'
                  // />
                  <Image
                    src={shuffleImagesArr[4].url_lg.slice(6)}
                    alt='cabanagem200.net'
                    fill
                    className='object-cover shrink-0 max-h-full'
                    placeholder='blur'
                    blurDataURL={shuffleImagesArr[4].url_sm.slice(6)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className='row-span-1 grid grid-cols-2'>
            <div className='col-span-1 grid grid-cols-2 shrink-0'>
              {/* <div className='col-span-1'> */}
              <div className='relative col-span-1 object-cover overflow-hidden min-h-0 min-w-0'>
                {image5 && (
                  // <img
                  //   src={image5}
                  //   alt=''
                  //   className='h-full object-cover shrink-0'
                  // />
                  <Image
                    src={shuffleImagesArr[5].url_lg.slice(6)}
                    alt='cabanagem200.net'
                    fill
                    className='object-cover shrink-0 max-h-full'
                    placeholder='blur'
                    blurDataURL={shuffleImagesArr[5].url_sm.slice(6)}
                  />
                )}
              </div>
              {/* <div className='col-span-1'> */}
              <div className='relative col-span-1 object-cover overflow-hidden min-h-0 min-w-0'>
                {image6 && (
                  // <img
                  //   src={image6}
                  //   alt=''
                  //   className='h-full object-cover shrink-0'
                  // />
                  <Image
                    src={shuffleImagesArr[6].url_lg.slice(6)}
                    alt='cabanagem200.net'
                    fill
                    className='object-cover shrink-0 max-h-full'
                    placeholder='blur'
                    blurDataURL={shuffleImagesArr[6].url_sm.slice(6)}
                  />
                )}
              </div>
            </div>
            <div className='col-span-1'>
              <div className='col-span-1 h-full grid grid-cols-2 shrink-0'>
                {/* <div className='col-span-1'> */}
                <div className='relative col-span-1 object-cover overflow-hidden min-h-0 min-w-0'>
                  {image7 && (
                    // <img
                    //   src={image7}
                    //   alt=''
                    //   className='h-full object-cover shrink-0'
                    // />
                    <Image
                      src={shuffleImagesArr[7].url_lg.slice(6)}
                      alt='cabanagem200.net'
                      fill
                      className='object-cover shrink-0 max-h-full'
                      placeholder='blur'
                      blurDataURL={shuffleImagesArr[7].url_sm.slice(6)}
                    />
                  )}
                </div>
                {/* <div className='col-span-1'> */}
                <div className='relative col-span-1 object-cover overflow-hidden min-h-0 min-w-0'>
                  {image8 && (
                    // <img
                    //   src={image8}
                    //   alt=''
                    //   className='h-full object-cover shrink-0'
                    // />
                    <Image
                      src={shuffleImagesArr[8].url_lg.slice(6)}
                      alt='cabanagem200.net'
                      fill
                      className='object-cover shrink-0 max-h-full'
                      placeholder='blur'
                      blurDataURL={shuffleImagesArr[8].url_sm.slice(6)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='min-h-[3.5rem] md:min-h-[4.5rem] bg-[#d6d5c2] dark:bg-[#2f2f2f] flex items-center relative duration-700'>
          <Marquee
            speed={100}
            className='text-3xl md:text-4xl tracking-wider uppercase h-[2.5rem] md:h-[3rem] dark:text-[#fff] '
          >
            {headlines[Math.floor(Math.random() * headlines.length)] ||
              'estoura insurreição popular na Amazônia durante a madrugada'}
            &nbsp;&nbsp;&nbsp;&nbsp;
          </Marquee>
        </div>
      </div>
    </div>
  );
}
