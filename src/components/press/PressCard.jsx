import Image from 'next/image';

export default function PressCard({ link, img, title, text1, text2 }) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <div className='p-5 flex flex-col md:flex-row justify-between gap-6 border-[0.5px] border-black'>
        <div className=' order-last md:order-1 w-[300px] h-[250px] relative md:overflow-hidden shrink-0 mt-auto mx-auto md:mx-0'>
          <Image src={img} className='object-cover' fill />
        </div>
        <div className='relative flex flex-col justify-between'>
          <p className='text-3xl mb-4'>{title}</p>
          <p className='text-sm text-justify'>{text1}</p>
          <p className='text-sm text-justify'>{text2}</p>
          <div className='font-stanleybold absolute -bottom-2 right-0 text-2xl'>
            +
          </div>
        </div>
      </div>
    </a>
  );
}
