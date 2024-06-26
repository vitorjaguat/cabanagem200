import Image from 'next/image';
import svg6 from '../../../public/assets/orn/006.svg';
import svg2 from '../../../public/assets/orn/002b1.svg';
import svg1 from '../../../public/assets/orn/001.svg';
import svg3 from '../../../public/assets/orn/003.svg';
import svg4 from '../../../public/assets/orn/004.svg';
import svg5 from '../../../public/assets/orn/005.svg';
import svg7 from '../../../public/assets/orn/007.svg';

export default function Deco() {
  return (
    <div className='h-[300px] md:h-[400px] flex w-full'>
      {/* <div className='w-14 md:w-20'></div> */}
      <div className='flex items-center w-full'>
        <div className='w-full flex items-center justify-center h-fit'>
          <Image
            className='scale-100'
            width={2362}
            height={94}
            // fill
            alt='ornamento'
            src={svg1}
          />
        </div>
      </div>
    </div>
  );
}
