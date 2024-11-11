

import { HeroItemInterface } from '@/interfaces/components.interface'
import Buttons from './buttons'



interface HeroInterface{
    data: HeroItemInterface
    host:string
}

const HeroHeader = ({data, host}: HeroInterface) =>{


    const NEW_IMG = host

   

    return (
        <section className={`z-full h-[600px] bg-cover relative `} style={{ backgroundImage: `url(${NEW_IMG})`}}>
            <div className=' pt-[9rem] flex flex-col gap-3 container mx-auto px-4  lg:pr-[25rem] xl:pr-[35rem] xl:px-0 sm:pt-[250px]  '>
                <h1 className='text-colorPrimary leading-[3.2rem] text-[3.2rem] font-bold'>{data?.titulo}</h1>
                <p className='font-medium'>{data?.description}</p>
                <div className='mt-2'>
                   { data?.cta && <Buttons text={data?.labelcta} typeBtn='rounded' /> }
                </div>
            </div>
            <div className=' absolute bottom-[-20px] left-[50%] w-1 h-[100px]  bg-colorPrimary rounded-sm'></div>
        </section>
    )
}

export default HeroHeader