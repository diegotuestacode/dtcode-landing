import { CardServiceInterface, ItemListInterface } from "@/interfaces/data.interface"
import ItemList from "./item-list"
import { getDataListCategory } from "@/lib/get-data";

interface ContentInterface{
    data: CardServiceInterface,
    host: string;
    index:number;
}

const CardContentServices = async({data, host, index}: ContentInterface) => {

    const dataListPage = await getDataListCategory(data?.name);
    const { data: dataListPage1 }: { data: ItemListInterface[] } = dataListPage;

    return (
        <article className="flex flex-col gap-4 w-[90%] mx-auto">
            <div className="flex flex-col  gap-2">
                <h2 className="text-colorPrimary text-center leading-none font-medium text-[2rem] ">{data.name}</h2>
                <p className="text-colorBlack2 text-center font-medium">{data.descriptionDetail}</p>
            </div>
            <div className={`flex w-full gap-10 justify-center ${(index+1) % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:flex md:w-[40%] md:justify-center md:items-center ">
                    <img className="w-[200px] bg-cover  h-[100px] rounded-md" src={host+data.image.url} alt={`Imagen del servicio de ${data.name}`} />
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