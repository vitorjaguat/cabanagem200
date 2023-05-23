export default function Footer() {
  return (
    <div className='w-full p-10 pb-7 text-xs bg-[#d6d5c2]'>
      <div className='flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between h-full w-full md:w-[95%] md:mx-auto'>
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
      </div>
    </div>
  );
}
