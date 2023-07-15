export default function Footer() {
  return (
    <div className='w-full p-6 pb-5 text-[13px] bg-[#d6d5c2] dark:bg-[#633636]'>
      <div className='flex flex-col items-center justify-center h-full w-full leading-[16px]'>
        <div className='p-3'>
          <span className='font-bold tracking-widest'>Nheenga Cabana</span>
          &nbsp;&nbsp;
          <a
            className='text-slate-700 tracking-tight hover:underline dark:text-slate-400'
            href='https://creativecommons.org/licenses/by-nc/4.0/'
            target='_blank'
            rel='noreferrer'
          >
            CC BY-NC
          </a>
          &nbsp;&nbsp; 2023
        </div>
        {/* <div className='tracking-widest font-stanleybold'>cabanagem200.net</div> */}
        {/* <div className='tracking-wider'>
          desenvolvido por{' '}
          <a
            className='text-slate-700 tracking-tight hover:underline dark:text-slate-400'
            href='https://portfolio-vitor.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            Vitor Butkus
          </a>
        </div> */}
        {/* <div className=''>2023</div> */}
      </div>
    </div>
  );
}
