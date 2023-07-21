import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import LanguageToggle from './LanguageToggle';
import { MdDarkMode } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { t } = useTranslation('common');
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* <div className='fixed z-[99] shadow-md bg-slate-600 w-full h-[95px]'></div> */}
      <div
        className={
          !shadow
            ? 'fixed w-full h-[3.5rem] md:h-[4.5rem] z-[100] ease-in-out duration-700 bg-[#d6d5c2] dark:bg-[#2f2f2f] dark:text-white'
            : 'fixed w-full h-10 md:h-12 z-[100] ease-in-out duration-700 bg-[#d6d5c2] dark:bg-[#2f2f2f] dark:text-white'
        }
      >
        <div className='flex justify-between items-center w-full h-full px-1 md:px-4 2xl:px-16 mx-auto'>
          <Link href='/' scroll={false}>
            <div
              className={
                !shadow
                  ? 'w-[100px] md:w-[200px] px-1 text-xl md:text-[23px] font-bold uppercase tracking-widest md:tracking-[2.5px] duration-700'
                  : 'w-[100px] md:w-[200px] px-1 text-[15px] md:text-[17px] uppercase font-bold tracking-widest md:tracking-[2.5px] duration-700'
              }
            >
              <div className='translate-y-[0px] w-fit'>
                <div
                  className={`w-[90%] mx-auto h-3 relative transition-all duration-700 ${
                    shadow ? 'translate-y-[7px]' : 'translate-y-[3px]'
                  }`}
                >
                  <Image
                    className='dark:invert duration-700'
                    src='/assets/orn/001.svg'
                    fill
                    alt='Ornamento Nheenga Cabana'
                  />
                  {/* <Svg className='absolute top-0 left-0' /> */}
                </div>
                <div className='w-fit '>cabanagem200</div>
              </div>
            </div>
          </Link>

          <div className='flex gap-16'>
            <ul className='hidden items-center md:flex md:justify-between text-sm md:text-md md:gap-4 lg:gap-8 mx-auto tracking-widest'>
              {/* <div
                className='p-1 bg-[#d6d5c2] dark:bg-slate-900 rounded-full cursor-pointer'
                onClick={() => toggleDarkMode}
              >
                <MdDarkMode color='' />
              </div> */}
              <Link href='/#home' scroll={false}>
                <li className='uppercase hover:text-slate-500'>início</li>
              </Link>

              <li className='uppercase group w-fit'>
                <Link href='/#paineis' scroll={false}>
                  <div className='hover:text-slate-500'>exposição</div>
                </Link>
                <div className='absolute lowercase overflow-hidden -translate-y-[300px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 ease-in-out transition-opacity duration-700 bg-[#d6d5c2] dark:bg-[#2f2f2f] p-1 pr-7 text-md translate-x-1 min-w-[100px] rounded-b-md'>
                  <Link href='/#paineis' scroll={false}>
                    <div className='pt-4 dark:hover:text-slate-400 hover:text-slate-500 pb-4'>
                      painéis
                    </div>
                  </Link>
                  <Link href='/#vistas' scroll={false}>
                    <div className='hover:text-slate-500 dark:hover:text-slate-400'>
                      vistas
                    </div>
                  </Link>
                </div>
              </li>

              <Link href='/#jornal' scroll={false}>
                <li className='uppercase hover:text-slate-500 whitespace-nowrap'>
                  jornal pessoal
                </li>
              </Link>

              <li className='uppercase group w-fit'>
                <Link href='/#arquivo' scroll={false}>
                  <div className='hover:text-slate-500 '>arquivo</div>
                </Link>
                <div className='absolute lowercase overflow-hidden opacity-0 -translate-y-[300px] group-hover:translate-y-0 group-hover:opacity-100 ease-in-out transition-opacity duration-700 bg-[#d6d5c2] dark:bg-[#2f2f2f] p-1 pr-7 text-md translate-x-1 rounded-b-md'>
                  <Link href='/#arquivo' scroll={false}>
                    <div className='pt-4 hover:text-slate-500 pb-4 dark:hover:text-slate-400'>
                      imagens de processo
                    </div>
                  </Link>
                  <Link href='/#prompts' scroll={false}>
                    <div className='hover:text-slate-500 dark:hover:text-slate-400'>
                      entradas de texto
                    </div>
                  </Link>
                </div>
              </li>

              <Link href='/press' scroll={false}>
                <li className='uppercase hover:text-slate-500'>
                  {t('navbar.press')}
                </li>
              </Link>

              <Link href='/about' scroll={false}>
                <li className='uppercase hover:text-slate-500'>
                  {t('navbar.about')}
                </li>
              </Link>

              <div
                className='p-1 rounded-full cursor-pointer dark:text-[#F5F9E9]'
                onClick={() => {
                  toggleDarkMode();
                  // console.log('done');
                }}
              >
                {darkMode ? (
                  <FiSun color='#d1d1d1' />
                ) : (
                  <MdDarkMode color='black' />
                )}
              </div>
            </ul>

            {/* <div className='flex justify-end'>
              <LanguageToggle />
            </div> */}
          </div>

          <div className='md:hidden flex items-center justify-between'>
            <div
              className='md:hidden p-1 rounded-full cursor-pointer dark:text-[#F5F9E9]'
              onClick={() => {
                toggleDarkMode();
                // console.log('done');
              }}
            >
              {darkMode ? (
                <FiSun color='#d1d1d1' />
              ) : (
                <MdDarkMode size={20} color='black' />
              )}
            </div>

            <div
              onClick={handleNav}
              className='flex justify-end md:hidden pl-4 pr-1'
            >
              <RxHamburgerMenu size={26} />
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-full h-full bg-black/70 ease-in duration-200'
              : ''
          }
          onClick={() => setNav(false)}
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[50%] md:w-[40%] h-full bg-[#d6d5c2] dark:bg-[#633636] p-10 ease-in duration-500'
                : 'fixed left-[-100%] p-10 top-0 h-full ease-in duration-500'
            }
          >
            {/* <div className=''>
              <div className='my-4'>
                <p className='w-[85%] md:w-[90%] tracking-widest py-4 font-stanleybold'></p>
              </div>
            </div> */}
            <div className='h-full flex flex-col justify-center'>
              <ul className='uppercase select-none outline-none flex flex-col justify-end text-md'>
                <Link href='/#home' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 font-bold'>
                    {t('navbar.home')}
                  </li>
                </Link>

                <li className='py-4 group'>
                  <Link
                    href='/#paineis'
                    scroll={false}
                    onClick={() => setNav(false)}
                  >
                    <div className='font-bold'>exposição</div>
                  </Link>
                  <div className='ml-2'>
                    <Link
                      href='/#paineis'
                      scroll={false}
                      onClick={() => setNav(false)}
                    >
                      <div className='lowercase'>painéis</div>
                    </Link>
                    <Link
                      href='/#vistas'
                      scroll={false}
                      onClick={() => setNav(false)}
                    >
                      <div className='lowercase'>vistas</div>
                    </Link>
                  </div>
                </li>

                <Link href='/#jornal' scroll={false}>
                  <li onClick={() => setNav(false)} className='font-bold py-4 '>
                    jornal pessoal
                  </li>
                </Link>

                <li className='py-4 group'>
                  <Link
                    href='/#arquivo'
                    scroll={false}
                    onClick={() => setNav(false)}
                  >
                    <div className='font-bold'>arquivo</div>
                  </Link>
                  <div className='ml-2'>
                    <Link
                      href='/#arquivo'
                      scroll={false}
                      onClick={() => setNav(false)}
                    >
                      <div className='lowercase'>imagens de processo</div>
                    </Link>
                    <Link
                      href='/#prompts'
                      scroll={false}
                      onClick={() => setNav(false)}
                    >
                      <div className='lowercase'>entradas de texto</div>
                    </Link>
                  </div>
                </li>

                <Link href='/press' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 font-bold'>
                    {t('navbar.press')}
                  </li>
                </Link>
                <Link href='/about' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 font-bold'>
                    {t('navbar.about')}
                  </li>
                </Link>
              </ul>
            </div>
            <div className='right-4 bottom-4 absolute'>
              <div
                onClick={() => setNav(false)}
                className='rounded-full p-2 cursor-pointer border-black border-[0.5px]'
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Svg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='2362pt'
      height='94pt'
      fill='currentColor'
      viewBox='0 0 2362 94'
    >
      <path
        d='M1128.08 13.84c3.32.6 6.81.73 9.93 2.14 2.74 1.55 3.82 4.78 3.41 7.79-1.01.07-3.03.2-4.04.27-.17-1.76-.31-3.52-.57-5.26-.06 3.3.07 6.61.39 9.9 2.29.94 4.62 1.76 6.95 2.62.26 4.97.14 9.94-.12 14.9 2.22.03 4.46.03 6.71.03-.67-4.56-.79-9.23-.22-13.81.87-1.48 2.27-2.59 3.69-3.53 3.97-.94 7.21 2.21 10.7 3.52.3 4.58.11 9.18-.21 13.75l6.75-.03c-.18-5.11-.1-10.27-1.23-15.29 3.02-.22 6.1-.3 8.99-1.39-.91-1.95-2.13-3.73-2.95-5.7-.67-3.08-.57-6.25-.59-9.38 5.04.33 12.47.32 13.57 6.69.79 2.96-2.56 3.57-4.51 4.59-.21 1.25-.41 2.5-.58 3.76 1.58.49 3.17.97 4.79 1.47-1.4 1.89-3.14 3.55-4.17 5.68-.88 3.11-.95 6.37-1.5 9.54 3.43-.01 6.88.02 10.33.02-1.31-4.46-1.29-9.14-1.31-13.75 1.7-1.35 3.28-2.9 5.16-4.04 4.03-1.24 7.16 2.33 10.31 4.21-.36 4.55-.66 9.12-1.24 13.66 2.38-.03 4.79-.06 7.2-.07-.62-4.01-.67-8.08-.4-12.12-.21-2.44 2.19-3.81 3.85-5.13 3.93-.15 7.87.83 11.6 2.08-.41 5.02-.5 10.06-.63 15.1 2.24.01 4.49 0 6.76-.02-.79-4.5-1.93-9.04-1.67-13.63 1.72-5.14 8.23-3.01 12.01-1.69 1.54 4.8.08 10.24-.1 15.27 2.41-.01 4.83 0 7.26.03-.78-5.3-1.23-10.64-1.25-15.99 1.27-.13 2.56-.24 3.86-.35-.03-1.04-.04-2.08-.03-3.12-1.69-.56-3.41-1.02-4.93-1.91-.78-3.22-.59-6.56-.67-9.84 3.79.26 8.28-.27 11.32 2.5 1.85 1.58 1.96 4.13 2.17 6.37-1.69.79-3.4 1.49-5.13 2.14.06.83.18 2.48.25 3.3 2.19.53 4.39 1.04 6.6 1.6 1.22 5.01.5 10.18.17 15.26 1.92 0 3.84.01 5.78.02-.34-5.86-1.13-11.93.71-17.63 3.63-.18 7.54.57 10.37 2.96.28 4.89.22 9.81.19 14.71 1.66-.03 3.35-.06 5.06-.1-.46-4.69-.42-9.41-1.18-14.07 2.2-1.44 3.39-3.61 2.74-6.27-1.34-.1-2.66-.19-3.97-.29-.28-3.74-.31-7.49-.4-11.24 4.15.03 8.38.73 12.07 2.71 1.68 1.1 2.35 3.24 2.33 5.17-.21 2.71-3.38 3.4-5.18 4.8-.24-2.7.03-5.4.15-8.1-.87 3.19-1.27 6.49-1.63 9.77 1.57.27 3.18.49 4.68 1.1 2.01.63 2.03 3.09 2.8 4.73-.88.21-2.64.64-3.53.85.12 3.62.1 7.25-.02 10.87 2.17.02 4.35.05 6.54.07-.29-4.26-.95-8.6-.16-12.83.45-1.14.6-3.01 2.09-3.28 3.73-1.42 7.39.59 10.71 2.15.33 4.64.38 9.31-.26 13.94 2.06-.01 4.15-.01 6.24-.01-.38-5.33-.61-10.71-.01-16.04 1.58-.19 3.18-.35 4.8-.48-1.17-4.24-.74-8.65-1.17-12.97-.87 3.11-.3 6.34-.27 9.51-4.99-1.46-2.76-7.89-3.45-11.72 3.64.38 7.56.21 10.86 2.07 2.5 1.62 2.42 4.79 2.57 7.43-1.73.5-3.44.99-5.13 1.49.04 1.38.12 2.76.22 4.13 1.59.49 3.2.97 4.82 1.47-.75 5-.58 10.07-.98 15.1 342.95-.02 685.9.01 1028.85-.01v10c-361-.01-722-.05-1083 .01-3.56.13-7.19-.4-10.67.35-2.91 1.37-5.45 3.45-7.6 5.8-.03 6.65 4.46 12.35 7.53 17.99-1.55-1.28-3-2.67-4.42-4.06-1.56 1.04-3.05 2.24-4.83 2.84-1.41-.4-2.68-1.08-3.97-1.69-1.82 1.17-3.67 2.29-5.65 3.11 1.62-1.82 3.5-3.4 5.35-5 2 .93 4.01 2.96 6.35 1.73.81-1.89-.05-3.83-.5-5.68-.94-3.27-1.67-6.58-2.63-9.83-3.9 5.09-3.57 12.41-8.55 16.84-1.56 2.44-4.45 2.4-7.02 2.46.02-4.02 1.06-8.2-.15-12.14-1.85-4.18-6.07-6.53-9.78-8.84-.24.61-.72 1.85-.96 2.46-.47-.05-1.43-.14-1.9-.19 1.05 6.13 4.2 11.7 9.23 15.42-2.09-3.96-4.49-7.83-5.29-12.31 5.52 3.26 6.24 10.21 8.82 15.51-3.48.21-6.85-.45-9.65-2.58-1.87-1.61-4.01-.46-5.77.6-.96-.59-1.89-1.17-2.82-1.75-1.96.75-3.92 1.5-5.94 2.03 1.44-1.1 2.81-3.01 4.85-2.84 4.18.62 8.41-.36 12.56.72-1.87-2.32-4.16-4.4-5.27-7.22-1.07-2.75-1.9-5.59-3.09-8.29-3.11 4.98-5.34 10.43-8.16 15.57-.62 1.37-1.86 2.25-2.98 3.15 1.11-7.25 6.43-12.72 8.8-19.47-1.62.77-3.18 1.59-4.72 2.45.37-1.28.74-2.56 1.11-3.85-2.77 1.78-5.83 4.17-6.03 7.74-1.07 4.41.4 8.85.23 13.3-3.15-1.65-3.3-5.2-3.12-8.33 1.23-5.01 3.43-9.82 6.77-13.8-4.55-.11-8.96.96-13.19 2.49 2.02 3.26 4.35 6.61 4.09 10.65-3.05-3.01-4.09-7.3-6.56-10.69-1.85 4.65-2.34 9.67-2.34 14.64 1.86.57 3.69 1.36 5.65 1.64 1.38-.88 2.39-2.19 3.54-3.34.75 1.56 1.49 3.12 2.21 4.71-.66-.48-1.97-1.45-2.62-1.94-1.3.77-2.57 1.59-3.95 2.15-1.86-.83-3.45-2.11-5.08-3.28a62.696 62.696 0 01-5.94 3.91c-1.05-1.25-3.08-2.18-2.7-4.1 0-5.42 2.56-10.26 5.6-14.58-5.56-1.45-11.26-2.37-17.01-2.04 3.89 3.46 7.99 6.98 10.32 11.74.99 3.26-.28 6.97-3.11 8.87-1.47 1.05-3.67 3.15-5.32 1.33-4.82-5.49-6.4-12.94-10.31-18.98-1.14 3.66-1.35 7.57-2.9 11.1-.41-3.86-.05-7.73-.18-11.6-3.88 4.91-6.02 10.84-8.65 16.44 1.47-.71 2.92-1.52 4.47-2.12 1.43.3 2.58 1.29 3.87 1.96 2.78-1.05 5.81-2.35 8.74-.91 2.46.27 2.65 3.15 3.27 5.02-2.49-1.25-4.54-3.22-7.03-4.43-1.81.49-3.5 1.3-5.19 2.05-1-.93-1.99-1.85-2.96-2.77-3.53 2.06-6.99 4.48-11.11 5.12-.03-4.67-1.21-9.67 1.67-13.79.56 3.48 1.06 6.97 1.76 10.43 2.56-6.06 5.74-11.78 8.87-17.54-2.2.95-4.3 2.06-6.46 3.05 1.15-1.52 2.38-2.99 3.6-4.48-5.41-1.72-10.77.44-15.97 1.74 1.94 3.06 4.17 6.2 4.22 9.99-2.4-1.66-3.35-4.44-4.85-6.79-1.33-.94-2.82-1.63-4.22-2.43-1.36.77-2.72 1.5-4.12 2.17-1.12 2.62-2.31 5.34-4.68 7.08-.07-3.78 2.24-6.89 4.14-9.95-5.18-1.44-10.56-3.54-15.94-1.78 1.54 1.79 3.15 3.54 4.63 5.4-2.58-1.44-5.06-3.05-7.69-4.38 3.16 5.92 6.52 11.72 9.11 17.93 1.24-4.48 1.75-9.18-.6-13.4 2.86 3.6 5.22 7.76 4.35 12.55l2.36-2.87c1.25.98 2.42 2.29 4.09 2.57 1.57-.5 3-1.37 4.45-2.17 1.45.81 2.9 1.7 4.53 2.15 1.71-.46 3.1-1.62 4.59-2.54.27.66.8 1.98 1.07 2.64-2.87.49-5.87 1.77-8.63.23-2.12-1.31-4.11.63-6.05 1.35-1.34-.62-2.67-1.25-3.97-1.88-1.19 1.38-2.29 2.84-3.58 4.13-3.92.25-6.96-2.91-10.29-4.52-1.01.92-1.99 1.84-2.97 2.77-1.7-.75-3.38-1.56-5.16-2.05-2.47 1.08-4.42 3.07-6.77 4.36.13-2 .6-4.77 3.09-5 2.92-1.42 5.9-.01 8.7.96 1.26-.62 2.37-1.84 3.85-1.92 1.52.56 2.93 1.37 4.41 2.06-2.63-5.6-4.77-11.54-8.64-16.44-.15 3.87.21 7.75-.17 11.62-1.57-3.53-1.78-7.44-2.92-11.1-4.05 6.22-5.57 14.06-10.85 19.48-3.97.35-6.52-3.52-8.46-6.41-.35.63-1.06 1.88-1.41 2.5 1.04-3.48 1.73-7.24 4.07-10.15 2.29-3.17 5.23-5.77 8.22-8.27-5.97.85-11.15-3.09-17.06-2.57-363.02.05-726.04-.15-1089.06.02V46c338.43-.01 676.87 0 1015.3-.01-.02-5.51-.5-11-1.36-16.44 2.75-.02 5.48.43 8.11 1.24-.11 5.12-.16 10.23-.18 15.35 1.78-.04 3.59-.08 5.4-.11-.12-5.26-.47-10.5-.9-15.74 1.48-.05 2.98-.05 4.49-.05-.09-4.44-.24-8.88-.29-13.32-.19 3.37-.11 6.76-.74 10.09-1.2-1.07-2.6-1.98-3.45-3.37-.67-2.99-.46-6.09-.48-9.13 3.36.03 6.91-.17 10.03 1.34 2.18 1.95 2.46 5 2.41 7.74-1.47.34-2.92.68-4.36 1.03.32 1.7.67 3.39 1.05 5.08 1.69.3 3.38.61 5.1.92.59 5.15.35 10.36-.31 15.49 2.13-.02 4.27-.05 6.43-.08-.53-4.62-.93-9.28-.73-13.92.74-.82 1.52-1.62 2.33-2.4-.66-3.03-1.4-6.07-1.4-9.2 2.4.6 5.5.59 6.96 2.99 1.69 1.94 1.5 4.63 1.91 7.02 1.28.27 2.58.53 3.89.79-.11 4.92.02 9.86-.5 14.77 2.01 0 4.04.01 6.08.01-.69-5.13-.28-10.3-.3-15.45 1.75-.26 3.51-.48 5.29-.71-.3-2.34-1.85-3.98-3.56-5.42-.83-3.18-.52-6.54-.61-9.8 3.34.1 6.92 0 9.92 1.74 2.29 1.63 3.47 4.6 2.92 7.37-1.74.97-3.75 1.24-5.62 1.77.47 1.33.9 2.7 1.59 3.96 1.67.51 3.4.8 5.13 1.19 1.95 4.92.76 10.28.52 15.39 1.96-.01 3.92-.03 5.9-.05-.71-5.64-.91-11.41.75-16.91 3.45.06 6.83.81 10.13 1.79.27 5.04.27 10.1-.18 15.13 2.45-.04 4.91-.07 7.38-.12-.7-4.69-.83-9.44-1.56-14.12.96-.92 2.08-1.73 2.8-2.88-.49-4.07-.45-8.18-.85-12.25-.34 2.82-.23 5.66-.44 8.48-2.02-3.29-1.4-7.28-1.73-10.95 3.97.62 8.79.84 11.57 4.14 1.36 3.71-2.1 6.64-3.03 9.99 4.41 1.41 9.01 2.04 13.62 2.45-.32 5.08-.21 10.16-.33 15.24 2.26.01 4.53 0 6.81-.02-.94-5.32-1.21-10.74-1.51-16.12 1.55-.15 3.11-.22 4.69-.27-.2-1.6-.35-3.19-.63-4.77-.94.3-1.86.68-2.75 1.03-3.03-3.28-2.57-7.96-2.63-12.08m158.72 2.15c.03 2.98-.27 6.1.95 8.91.44-3 .41-6.14-.95-8.91m-258.49 1.51c-.65 1.34-1.17 4.45.39 5.09.64-1.35 1.07-4.38-.39-5.09m102.99-.15c-.58 1.42-1.11 4.54.41 5.29.57-1.42 1.07-4.55-.41-5.29m-62.99 1.13c-.79 1.48-.79 3.6-.01 5.07 1.41-.52 1.38-4.52.01-5.07m109.97.02c-.82 1.07-.82 2.86 0 3.93 1.47-.09 1.48-3.87 0-3.93m74.02-.21c-.58 1.44-1.1 4.56.4 5.33.55-1.43 1.1-4.59-.4-5.33m-67 1.29c-.83 1.03-.83 2.81 0 3.85 1.51-.04 1.49-3.81 0-3.85m-95.21 12.8c-.62 4.53.4 9.18-.81 13.66.79-.01 2.38-.02 3.17-.03-1.15-3.77-1.8-7.67-.85-11.56-.38-.51-1.13-1.55-1.51-2.07m185.5.53c-.92 4.33-1.73 8.67-1.99 13.1 1.59-.01 3.2-.02 4.82-.02-1.53-4.22-1.7-8.75-2.83-13.08m-160.91.96c.05 4.05.17 8.1-.17 12.13 1.34.01 2.7.01 4.07.02-.98-3.55-1.34-7.21-1.66-10.86-.56-.32-1.68-.97-2.24-1.29m42.25-.12c-1.39 3.95-1.09 8.17-1.69 12.26 1.51.03 3.03.06 4.57.08-1.3-4.05-.52-8.63-2.88-12.34m62.69.82c-.89 3.74-1.21 7.58-1.47 11.41 1.73.06 3.47.1 5.23.13-.37-3.18-.19-6.45-.95-9.57-.93-.7-1.89-1.3-2.81-1.97m87.16 11.39c1.27.02 2.55.05 3.84.07-1.27-4.39-.61-9.25-2.77-13.37-1.71 4.22-.57 8.88-1.07 13.3m-199.22-9.59c-.28 3.18-.29 6.38-.86 9.53 1.68.04 3.39.09 5.1.12-.63-3.46-.66-7.01-1.48-10.43-1.03-.37-2.93-1.1-2.76.78m91.61-1.49c-.41 3.75-.06 7.59-1.1 11.27 1.38 0 2.76.01 4.17.01-.88-3.9-.39-8.25-2.17-11.85l-.9.57m-148.92 2.4c-.36 2.91-.63 5.83-1.38 8.67 2.02.03 4.05.05 6.1.04-.59-3.46-.87-7-1.95-10.35-.97.49-1.9 1.04-2.77 1.64m19.92-.94c-.29 3.24-.34 6.5-1.08 9.68 2.11 0 4.22.01 6.36.01-.69-3.19-1.17-6.41-1.71-9.63l-3.57-.06m64.17.13c-.24 3.18-.34 6.37-.52 9.55 1.72 0 3.46 0 5.21-.01-.83-3.29-1.12-6.68-1.92-9.97-.69.11-2.08.32-2.77.43m40.53 9.64c1.31-.02 2.64-.05 3.98-.08-.54-3.46-.76-6.95-1.31-10.4-3.94 1.74-1.96 7.08-2.67 10.48m64.3-10.5c-.33 3.47-.28 6.97-.78 10.43l3.86-.03c-.6-3.19-.83-6.43-1.38-9.62-.42-.2-1.27-.59-1.7-.78m85.07-.15c.38 3.5.37 7.03.03 10.54 1.4.01 2.83.02 4.27.04-.74-3.34-1.03-6.74-1.63-10.1-.67-.12-2.01-.36-2.67-.48m-293.35 1.49c-.16 3.02-.13 6.05-.28 9.08 1.55-.01 3.11-.02 4.69-.02-.32-3.01-.86-5.98-1.41-8.95-.75-.03-2.25-.08-3-.11m224.95.04c.01 3.01.07 6.02.01 9.03h4.28c-.2-3.04-.43-6.08-.45-9.13-1.29.02-2.57.06-3.84.1m34.06 8.85l2.61.2c-.46-3.3-.56-6.63-1.01-9.92-1.6 2.98-1.33 6.46-1.6 9.72m-54.31 13.97c2.99 2.84 6.4 5.41 8.44 9.09 1.67 2.56 1.04 5.73 1.41 8.61 1.22-4.46 1.04-10.09 5.54-12.77-.42 4.77-2.65 9.07-4.11 13.55 4.5-4.47 7.1-10.52 8.42-16.66-3.71-2.22-8.06-2.91-12.32-2.95-2.46.49-4.86 1.23-7.38 1.13m-137.07 6.83c-1.65 3.84.14 8.02 1.08 11.82 1.98-4.8 3.11-10.59 8.03-13.37-1.42 5.18-4.47 9.74-5.85 14.93 4.45-5.79 8.66-11.98 10.25-19.25-5.28-1.48-10.55 1.59-13.51 5.87m76.42-5.87c1.59 7.26 5.8 13.46 10.26 19.25-1.4-5.19-4.47-9.74-5.85-14.95 4.87 2.83 6.1 8.57 7.96 13.42 1-3.79 2.7-7.96 1.17-11.84-3-4.25-8.24-7.36-13.54-5.88m18.93 16.87c2.53-.48 5.45-1.99 5.89-4.81.77-3.82.96-7.76.59-11.64-3.34 4.78-7.77 10.24-6.48 16.45z'
        opacity='1'
      ></path>
    </svg>
  );
};
