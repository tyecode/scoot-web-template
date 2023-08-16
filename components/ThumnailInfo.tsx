import Image from 'next/image';

type ThumnailInfoProps = {
  object: {
    key: string;
    image: string;
    title: string;
    description: string;
    index: string;
   }
};

const ThumnailInfo = ({ object }: ThumnailInfoProps) => {
    const {image, title, description,key, index} = object;
  return (
    <div className='mb-8 flex flex-col flex-center md:px-4'>
      <div className="w-[240px] h-[240px] relative flex-center">
        <Image
          src={image}
          alt={key}
          width={240}
          height={240}
          className='absolute rounded-full w-full h-full'
        />
        <h1 className='absolute -bottom-10 bg-primary flex-center font-space-mono w-[80px] h-[80px] rounded-full'>{index}</h1>
      </div>
      <div className="max-w-[28rem] text-center p-4 mt-4">
      <h1 className='heading-3 my-4'>{title}</h1>
      <p className='text-style '>{description}</p>
      </div>
    </div>
  )
}

export default ThumnailInfo