import { useInView } from 'react-intersection-observer';

export default function Section3() {
  const { ref, inView } = useInView();

  return (
    <div className='flex'>
      <div
        className='w-14 md:w-20 h-[calc(100vh-3.5rem)] pt-6 flex items-center sticky top-14'
        style={{ writingMode: 'vertical-rl', height: 'calc(100vh-20px)' }}
      >
        <div className='max-h-[350px] md:max-h-[500px] text-xs md:text-sm'>
          <span className='font-bold'>Nheenga Cabana</span>, 2022 Instalação com
          painéis expográficos, impressões em jato de tinta e tiragem offset de
          jornal
        </div>
      </div>

      <div className='h-[3000px] w-full bg-[#00000010]'></div>
    </div>
  );
}
