

import Buttons from "./buttons";
import Link from "next/link";
import { CardServiceInterface } from "@/interfaces/data.interface";

interface CardServiceI {
   data: CardServiceInterface
   host:string;
}

const CardServices = ({data, host}:CardServiceI) => {

    return (
        <article className="max-w-[400px] min-h-[340px] p-[3%] rounded-[20px] shadow-[1px_1px_20px_rgba(135,127,127,0.25)]  flex flex-col gap-2 items-center">
            <div className="flex flex-col gap-3 items-center">
                <div className="bg-colorPrimary w-[80px] h-[80px] rounded-full flex items-center justify-center">
                    <i> <img src={host+data.icon.url} width={45} alt={`logo de servicio de ${data.name}`} /></i>
                </div>
                <h3 className="text-colorPrimary text-center font-medium text-[25px]">{data.name}</h3>
            </div>
            <p className="text-[16px] leading-[18px] text-center font ">{data.description}</p>
            {
                data.cta ? 
                <div className="mt-5"> <Link href={"/services"} > <Buttons classNa="text-colorBlack2 hover:bg-colorPrimary  hover:text-white" typeBtn="outlineFlat" text={data.labelCTA || ''}  /></Link></div>
                :
                null
            }
            
        </article>
    )
}

export default CardServices