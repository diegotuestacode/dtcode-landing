import Link from 'next/link'

import Buttons from '../content/buttons'
import { getCategories } from '@/lib/get-data';
import { CardServiceInterface } from '@/interfaces/data.interface';


interface FooterInterface{
    logo:string;
    description:string;
    bussiness:string;
}


const  Footer = async({logo, description, bussiness}: FooterInterface) => {
    const DATE = new Date();
    const YEAR = DATE.getFullYear()

    const {data} : {data:CardServiceInterface[]} = await getCategories(false)
    
    return (
        <footer className="relative w-full py-7 h-full shadow-[0px_-1px_5px_rgba(135,127,127,0.25)]">
            <div className="container mx-auto flex flex-col gap-6 px-4 lg:px-0">
                <div className='flex flex-col gap-4 lg:gap-0 lg:flex-row  lg:justify-between'>
                    <div className='flex flex-col items-center lg:items-start  lg:w-[20rem]' >
                        <Link href={"/"}><img src={logo} width={100} alt={`${bussiness} logo - footer`} /></Link>
                        <p className='text-[0.8rem] text-center lg:text-[0.6rem] lg:text-start font-semibold'>{description}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:gap-6 items-center'>
                        <h3 className='text-[1.1rem] font-semibold'>¿Tienes una idea?</h3>
                        <Link href={"/contact"}><Buttons text={'¿Lo hacemos realidad?'} typeBtn="outlineFlat" classNa='text-colorBlack2 hover:bg-colorPrimary hover:text-white' /></Link> 
                    </div>
                </div>
                <div className='flex gap-10 justify-center lg:justify-end'>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-[1.1rem] text-colorBlack2 font-semibold'>Soluciones</h4>
                        <ul>
                            {
                                data?.map(category => (
                                    <li className='text-[0.9rem] leading-none'>
                                          <Link href={"/services"}>{category.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-[1.1rem] text-colorBlack2 font-semibold'>Más</h4>
                        <ul>
                            <li className='text-[0.9rem] leading-none'>
                                <Link href={"/contact"}>Contacto</Link>
                            </li>
                            <li className='text-[0.9rem] leading-none'>
                                <Link href={"/solutions"}>Metodologías</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='w-full px-[2rem] h-1 bg-colorBlack2 opacity-70 rounded-md'></div>
                    <p className='mt-2 text-center text-xs sm:text-sm'>&copy;{YEAR} {bussiness}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer