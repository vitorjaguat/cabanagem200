import Image from 'next/image';
import heroImg from '../../../public/img/hero.jpg';

export default function Hero() {
  return (
    <div className='overflow-hidden'>
      <div
        className='relative object-cover w-[2000px] h-screen md:w-screen md:block md:static'
        // style={{ objectPosition: '50% 100%' }}
        // style={{ objectFit: 'cover' }}
      >
        <Image
          src={heroImg}
          fill
          className=' translate-x-[-1100px] translate-y-[50px] md:translate-x-0 md:translate-y-0'
          //   style={{ transform: 'translate(-1100px, 50px)' }}
          sizes='(max-width: 768px) 300vw, (max-width: 1200px) 200vw, 100vw'
        />
      </div>
    </div>
  );
}
