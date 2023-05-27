export default function Footer() {
  return (
    <div className='w-full p-6 pb-5 text-xs bg-[#d6d5c2] dark:bg-[#633636]'>
      {/* <div className='flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between h-full w-full md:w-[95%] md:mx-auto'>
        <div className='text-center md:text-left'>
          <div className='font-stanleybold'>Nheenga Cabana</div>
          <div className='pt-1 md:pt-2'>um projeto de</div>
          <div className='pl-0 md:pl-2 pt-1'>Giseli Vasconcelos</div>
          <div className='pl-0 md:pl-2'>Pedro Victor Brandão</div>
          <div className='pt-1 md:pt-1'>2022</div>
        </div>
        <div className='flex flex-col items-center w-full md:w-auto md:justify-end md:items-end pt-8 md:pt-0'>
          <div className='font-stanleybold pb-1 md:pb-2'>cabanagem200.xyz</div>
          <div className=''>desenvolvido por Vitor Butkus</div>
          <div className='pt-1 md:pt-0'>2023</div>
        </div>
      </div> */}
      <div className='flex flex-col items-center justify-center h-full w-full leading-[16px]'>
        <div className='p-3'>
          <span className='font-stanleybold tracking-widest'>
            Nheenga Cabana
          </span>
          &nbsp;&nbsp;
          <a
            className='text-slate-700 tracking-tight hover:underline dark:text-slate-400'
            href='https://creativecommons.org/licenses/by-nc/4.0/'
            target='_blank'
            rel='noreferrer'
          >
            CC BY-NC
          </a>
          &nbsp;&nbsp; 2022
        </div>
        <div className='tracking-widest font-stanleybold'>cabanagem200.net</div>
        <div className='tracking-wider'>desenvolvido por Vitor Butkus</div>
        <div className=''>2023</div>
      </div>
    </div>
  );
}
