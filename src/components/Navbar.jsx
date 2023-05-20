import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { t } = useTranslation('common');

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
            ? 'fixed w-full h-[3.5rem] md:h-[4.5rem] z-[100] ease-in-out duration-700 bg-[#e1e1e1]'
            : 'fixed w-full h-10 md:h-12 z-[100] ease-in-out duration-700 bg-[#e1e1e1]/90'
        }
      >
        <div className='flex justify-between items-center w-full h-full px-1 md:px-4 2xl:px-16 mx-auto'>
          <Link href='/' scroll={false}>
            <div
              className={
                !shadow
                  ? 'w-[100px] md:w-[200px] px-1 text-2xl md:text-[19px] lg:text-3xl uppercase tracking-widest md:tracking-[2.5px] duration-700 ease-in-out'
                  : 'w-[100px] md:w-[200px] px-1 text-[14px] lg:text-[15px] uppercase font-stanleybold tracking-widest md:tracking-[2.5px] duration-700 ease-in-out'
              }
            >
              cabanagem200
            </div>
          </Link>

          <div className='flex gap-16'>
            <ul className='hidden md:flex md:justify-between text-xs md:text-[13px] md:gap-3 lg:gap-8 mx-auto tracking-widest'>
              <Link href='/#home' scroll={false}>
                <li className='uppercase hover:text-slate-500'>
                  {t('navbar.home')}
                </li>
              </Link>

              <li className='uppercase group w-fit'>
                <Link href='/#paineis' scroll={false}>
                  <div className='hover:text-slate-500'>exposição</div>
                </Link>
                <div className='absolute lowercase overflow-hidden opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-300 bg-[#e1e1e1] p-1 pr-7 text-md rounded-sm translate-x-1'>
                  <Link href='/#paineis' scroll={false}>
                    <div className='pt-4 hover:text-slate-500 pb-4'>
                      paineis
                    </div>
                  </Link>
                  <Link href='/#vistas' scroll={false}>
                    <div className='hover:text-slate-500'>vistas</div>
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
                  <div className='hover:text-slate-500'>arquivo</div>
                </Link>
                <div className='absolute lowercase overflow-hidden opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-300 bg-[#e1e1e1] p-1 pr-7 text-md rounded-sm translate-x-1'>
                  <Link href='/#arquivo' scroll={false}>
                    <div className='pt-4 hover:text-slate-500 pb-4'>
                      imagens de processo
                    </div>
                  </Link>
                  <Link href='/#prompts' scroll={false}>
                    <div className='hover:text-slate-500'>
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
            </ul>

            {/* <div className='flex justify-end'>
              <LanguageToggle />
            </div> */}
          </div>

          <div
            onClick={handleNav}
            className='w-[100px] flex justify-end md:hidden pl-10'
          >
            <AiOutlineMenu size={21} />
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
                ? 'fixed left-0 top-0 w-[75%] sm:w-[50%] md:w-[40%] h-full bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] p-10 top-0 h-full ease-in duration-500'
            }
          >
            {/* <div className=''>
              <div className='my-4'>
                <p className='w-[85%] md:w-[90%] tracking-widest py-4 font-stanleybold'></p>
              </div>
            </div> */}
            <div className='h-full flex flex-col justify-center'>
              <ul className='uppercase select-none outline-none flex flex-col justify-end'>
                <Link href='/#home' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.home')}
                  </li>
                </Link>

                <li className='py-4 text-sm group'>
                  <Link
                    href='/#paineis'
                    scroll={false}
                    onClick={() => setNav(false)}
                  >
                    <div className=''>exposição</div>
                  </Link>
                  <div className='ml-2'>
                    <Link
                      href='/#paineis'
                      scroll={false}
                      onClick={() => setNav(false)}
                    >
                      <div className='lowercase'>paineis</div>
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
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    jornal pessoal
                  </li>
                </Link>

                <li className='py-4 text-sm group'>
                  <Link
                    href='/#arquivo'
                    scroll={false}
                    onClick={() => setNav(false)}
                  >
                    <div className=''>arquivo</div>
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
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.press')}
                  </li>
                </Link>
                <Link href='/about' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.about')}
                  </li>
                </Link>
              </ul>
            </div>
            <div className='right-4 bottom-4 absolute'>
              <div
                onClick={() => setNav(false)}
                className='rounded-full bg-[#e2e2e2] p-2 cursor-pointer'
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
