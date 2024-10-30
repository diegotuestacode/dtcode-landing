"use client"

import Buttons from "../content/buttons"
import { useEffect, useState } from "react"
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";


interface ItemMenuInterface{
    name:string;
    slug:string;
    cta:boolean;
    orden:number;
}

interface MenuInterface {
    data: ItemMenuInterface[]
    logo:string;
}
const Navbar = ({data, logo}: MenuInterface) => {
    
    const [bgColor, setBgColor] = useState('bg-opacity-30');

    const handleScroll = () => {
        if (window.scrollY > 90) {
            setBgColor('bg-opacity-100');
        } else {
            setBgColor('bg-opacity-30');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const LOGO = '/assets/images/Logo-png.png'

    return (
        <header className={`h-[90px] z-50 bg-white ${bgColor} shadow-[0px_1px_5px_rgba(135,127,127,0.25)] top-0 left-0  right-0 fixed transition-colors duration-500`}>
            <div className="container flex justify-between  h-full  py-[10px] items-center mx-auto pr-4">
                <div className=" cursor-pointer flex  w-[123px] h-[60px] items-center ">
                    <Link href={"/"}><img src={logo} alt="DTCode logo" /></Link> 
                </div>
                <ul className="flex items-center gap-5">
                    {
                        data?.sort((a,b) => a.orden - b.orden ).map(itemMenu => {
                            if (!itemMenu.cta) {
                              return  <li key={itemMenu.slug} className="item-menu hidden md:block"><Link  href={`${itemMenu.slug}`}>{itemMenu.name}</Link></li>
                            }else{
                                return <li key={itemMenu.slug}><Link  href={`${itemMenu.slug}`} ><Buttons text={itemMenu.name} typeBtn="flat" classNa='hidden md:block' /></Link></li>
                                
                            }
                        } )
                    }
                   <IoMenu size={30} className='md:hidden' />
                </ul>
            </div>
        </header>
    )
}

export default Navbar