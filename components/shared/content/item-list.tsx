import {  ItemListInterfaceData } from "@/interfaces/components.interface"
import IconRigth from "../icon/iconRight"



const ItemList = ({icon, text, classText}:ItemListInterfaceData) => {
    return (
        <span className="flex gap-2 ml-0 p-0">
            <IconRigth w={icon?.w} h={icon?.h} color={icon?.color} />
            <p className={`text-base text-colorBlack3 mt-[-1%] text-left leading-1 ${classText}`}>{text}</p>
        </span>
    )
}

export default ItemList