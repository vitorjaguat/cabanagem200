import Image from 'next/image';
import heroImg from '../../../public/img/hero.jpg';

export default function Hero() {
  return (
    <div className='pt-16'>
      <Image src={heroImg} width='100vw' height='100%' />
    </div>
  );
}
