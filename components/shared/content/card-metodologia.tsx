import Buttons from "./buttons";
import { CardSolutionsInterface } from "@/interfaces/data.interface";

interface CardMetodologiaInterface {
    cta:boolean;
    data: CardSolutionsInterface
    labelBtn?:string;
    onClick?:(e:React.MouseEvent<HTMLButtonElement>) => void
}

const CardMetodologia = ({cta = false,data, labelBtn = '', onClick = () => {}}: CardMetodologiaInterface) => {

    return (
        <article className="max-w-[400px] bg-white h-[400px] pt-[55px] pb-[40px] px-[45px]  shadow-[1px_1px_20px_rgba(135,127,127,0.25)]  flex flex-col gap-2 card-float  ">
            
            <h3 className="text-colorPrimary  font-medium text-[70px]">{data.number.toString().length === 1 ? '0'+data.number : data.number  }</h3>
          
            <h2 className="text-colorBlack1 text-[25px] font-bold">{data.nombre}</h2>
            <p className="text-[16px] leading-[18px] text-colorBlack2 ">{data.description}</p>
            {
                cta ? 
                <div className="mt-5"><Buttons classNa="text-colorBlack2 hover:bg-colorPrimary  hover:text-white" typeBtn="outlineFlat" text={labelBtn} onClick={onClick} /></div>
                :
                null
            }
            
        </article>
    )
}

export default CardMetodologia