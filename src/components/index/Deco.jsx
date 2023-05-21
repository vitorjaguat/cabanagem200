import Image from 'next/image';
import svg6 from '../../../public/assets/orn/006.svg';

export default function Deco() {
  return (
    <div className='m-0 p-0 w-screen h-[400px] flex'>
      {/* <div className='w-14 md:w-20'></div> */}
      <div className='flex items-center'>
        <div className='w-full h-2'>
          <Image src={svg6} />
        </div>
      </div>
    </div>
  );
}
