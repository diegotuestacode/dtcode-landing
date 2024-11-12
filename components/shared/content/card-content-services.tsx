import { CardServiceInterface, ItemListInterface } from "@/interfaces/data.interface"
import ItemList from "./item-list"
import { getDataListCategory } from "@/lib/get-data";

interface ContentInterface{
    data: CardServiceInterface,
    host: string;
    index:number;
}

const CardContentServices = async({data, index}: ContentInterface) => {

    const dataListPage = await getDataListCategory(data?.name);
    const { data: dataListPage1 }: { data: ItemListInterface[] } = dataListPage;

    const IMG_DESARROLLO = '/assets/images/settins-icon.png'
    const IMG_DISENO = '/assets/images/diseno-icon.png'
    const IMG_LICENCIAS = '/assets/images/licencia-icon.png'
    const nameService = data?.name.toLowerCase();
    const IMG_OFICIAL =  nameService.includes("desarrollo")  ? IMG_DESARROLLO : 
                            nameService.includes("dise") ? IMG_DISENO : 
                            nameService.includes("licencia") ? IMG_LICENCIAS : ''

    return (
        <article className="flex flex-col gap-4 w-[90%] mx-auto">
            <div className="flex flex-col  gap-2">
                <h2 className="text-colorPrimary text-center leading-none font-medium text-[2rem] ">{data.name}</h2>
                <p className="text-colorBlack2 text-center font-medium">{data.descriptionDetail}</p>
            </div>
            <div className={`flex w-full gap-10 justify-center ${(index+1) % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:flex md:w-[10%] md:justify-center md:items-center p-6 rounded-full bg-colorPrimary ">
                    <img className="w-full bg-cover  h-full rounded-md" src={IMG_OFICIAL} alt={`Imagen del servicio de ${data.name}`} />
                </div>
                <div className="flex flex-col gap-1 w-full md:w-[60%]">
                    {
                        dataListPage1?.map(item => (
                            <ItemList
                                key={1}
                                icon={{
                                w: 15,
                                h: 15,
                                }}
                                text={item.description}
                                classText="text-left text-[14px] "
                            />
                        ))
                    }
               
                </div>
            </div>
        </article>
    )
}

export default CardContentServices