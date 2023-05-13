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
            ? 'fixed w-full h-[3.5rem] border-none md:h-[4.5rem] z-[100] ease-in-out duration-700 bg-[#e1e1e1]'
            : 'fixed w-full h-10 md:h-12 z-[100] ease-in-out duration-700 bg-[#d5d5d5]/90'
        }
      >
        <div className='flex justify-between items-center w-full h-full px-1 md:px-4 2xl:px-16 mx-auto'>
          <Link href='/' scroll={false}>
            <div
              className={
                !shadow
                  ? 'w-[100px] md:w-[200px] px-1 text-[15px] md:text-3xl uppercase tracking-widest md:tracking-[2.5px] duration-700 ease-in-out'
                  : 'w-[100px] md:w-[200px] px-1 text-[12px] md:text-[15px] uppercase font-stanleybold tracking-widest md:tracking-[2.5px] duration-700 ease-in-out'
              }
            >
              cabanagem200
            </div>
          </Link>

          <div className='flex gap-16'>
            <ul className='hidden md:flex md:justify-between text-xs md:text-[13px] gap-14 mx-auto tracking-widest'>
              <Link href='/' scroll={false}>
                <li className='uppercase hover:text-slate-500'>
                  {t('navbar.home')}
                </li>
              </Link>
              {/* <Link href='/references' scroll={false}>
              <li className='ml-8 uppercase hover:border-b'>
                {t('navbar.references')}
              </li>
            </Link>
            <Link href='/glossary' scroll={false}>
              <li className='ml-8 uppercase hover:border-b'>
                {t('navbar.glossary')}
              </li>
            </Link> */}
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

            <div className='flex justify-end'>
              <LanguageToggle />
            </div>
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
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[50%] md:w-[40%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] p-10 top-0 h-screen ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between'>
                <div className=''>
                  {/* <Link href='/#home' scroll={false}>
                  <Image
                    src='/../public/assets/logo.png'
                    width={60}
                    height={35}
                    alt='logo'
                  />
                </Link> */}
                </div>
                <div
                  onClick={handleNav}
                  className='rounded-full bg-[#e2e2e2] p-2 cursor-pointer'
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className='my-4'>
                <p className='w-[85%] md:w-[90%] py-4 font-stanleybold'>
                  cabanagem200
                </p>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.home')}
                  </li>
                </Link>
                {/* <Link href='/references' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.references')}
                  </li>
                </Link>
                <Link href='/glossary' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.glossary')}
                  </li>
                </Link> */}
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
              <div className='pt-40'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
