type TypeBtn  = 'outlineFlat' | 'flat' | 'rounded' | 'roundedOutline';


interface ButtonsInterface  {
    classNa?:string;
    typeBtn: TypeBtn;
    text: string;
    disabled?:boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>)=>void
}


const Buttons = ({
    classNa='', 
    typeBtn, 
    text = 'Button',
    disabled=false,
    onClick
 }: ButtonsInterface) => {



    return (
        <button 
            className={`py-[10px] px-[15px] w-auto h-[44px] text-center  text-[16px] rounded-[10px] font-bold 
                            ${
                                typeBtn=== "flat" ? 
                                'bg-colorPrimary text-white' : 
                                typeBtn=== "outlineFlat" ? 
                                'bg-transparent border-2 border-colorPrimary ' :
                                typeBtn=== "rounded" ?  
                                'rounded-[25px] bg-colorPrimary text-white' : 
                                'rounded-[25px] bg-transparent border-[1.5px] border-[colorPrimary]'
                            } 
                        ${classNa}
                    `}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    
    )
}

export default Buttons