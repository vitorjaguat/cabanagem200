import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';

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
      <div className='fixed z-[99] shadow-md bg-slate-600 w-full h-[95px]'></div>
      <div
        className={
          shadow
            ? 'fixed w-full h-16 shadow-lg z-[100] ease-in duration-300 bg-slate-500'
            : 'fixed w-full h-16 shadow-md z-[100] ease-in duration-200 bg-slate-500'
        }
      >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 max-w-[1240px] mx-auto'>
          <Link href='/#home' scroll={false}>
            {/* <Image
            src='/../public/assets/img/logo.png'
            alt='logo'
            width={150}
            height={50}
          /> */}
            {/* <div className='h-1 w-[200px] bg-slate-800'></div> */}
            <div className='px-1 text-lg'>Cabanagem 200</div>
          </Link>
          <div>
            <ul className='hidden md:flex'>
              <Link href='/' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  {t('navbar.home')}
                </li>
              </Link>
              <Link href='/references' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  {t('navbar.references')}
                </li>
              </Link>
              <Link href='/#skills' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  {t('navbar.glossary')}
                </li>
              </Link>
              <Link href='/#projects' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  {t('navbar.press')}
                </li>
              </Link>

              <Link href='/#contact' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  {t('navbar.about')}
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden text-[#999999]'>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div
          className={
            nav ? 'fixed md:hidden left-0 top-0 w-full h-full bg-black/70' : ''
          }
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link href='/#home' scroll={false}>
                  <Image
                    src='/../public/assets/logo.png'
                    width={60}
                    height={35}
                    alt='logo'
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className='rounded-full shadow-md p-3 cursor-pointer'
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>cabanagem200</p>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/#home' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.home')}
                  </li>
                </Link>
                <Link href='/#about' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.references')}
                  </li>
                </Link>
                <Link href='/#skills' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.glossary')}
                  </li>
                </Link>
                <Link href='/#projects' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.press')}
                  </li>
                </Link>
                <Link href='/#contact' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {t('navbar.about')}
                  </li>
                </Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#5651e5]'>
                  Let's connect
                </p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                    <FaGithub />
                  </div>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                    <AiOutlineMail />
                  </div>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
