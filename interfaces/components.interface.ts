import { ImageInterface } from "./data.interface";

export interface IconInterface{
    w?:number;
    h?:number;
    color?: string;
}

export interface ItemListInterfaceData{
    icon?:IconInterface;
    text:string;
    classText?:string;
}

export interface HeroItemInterface{
    titulo:string,
    description:string;
    cta:boolean;
    labelcta:string;
    image:ImageInterface;
}