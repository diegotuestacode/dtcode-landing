import CardContent from "@/components/shared/content/card-content";
import CardMetodologia from "@/components/shared/content/card-metodologia";
import CardServices from "@/components/shared/content/card-services";
import HeroHeader from "@/components/shared/content/heroHeader";
import ItemList from "@/components/shared/content/item-list";
import {
  CardServiceInterface,
  CardSolutionsInterface,
  ItemListInterface,
} from "@/interfaces/data.interface";
import { getPage } from "@/lib/get-data";

import { Suspense } from "react";

export default async function Home() {
  const {
    dataContentHero,
    dataListPage,
    dataCategories,
    dataPage,
    dataSolutions,
  } = await getPage("home");

  const { data: dataContentHero1 } = dataContentHero;

  const { data: dataCategories1 }: { data: CardServiceInterface[] } =
    dataCategories;

  const { data: dataPage1 } = dataPage;

  const { data: dataListPage1 }: { data: ItemListInterface[] } = dataListPage;

  const { data: dataSolutions1 }: { data: CardSolutionsInterface[] } =
    dataSolutions;

  const { STRAPI_HOST } = process.env;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="w-full h-full">
        <HeroHeader data={dataContentHero1[0]} host={STRAPI_HOST ?? ""} />
        <div className="pt-10 pb-20 container mx-auto px-4 flex flex-wrap gap-10 justify-center md:px-0 ">
          {dataCategories1?.map((category) => (
            <CardServices
              key={category.name}
              data={category}
              host={STRAPI_HOST ?? ""}
            />
          ))}
        </div>
        <div className="my-2">
          <CardContent>
            <div className="container px-4 md:px-4">
              <h2 className="text-[2rem] md:text-[4.1rem] font-bold leading-[4.1rem] text-white text-center">
                {dataPage1[0]?.title1}
              </h2>
              <p className=" text-center text-[1.1rem] md:pl-20 md:text-[1.56rem] text-white font-medium ">
                {dataPage1[0]?.description1}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-10 justify-center px-4 md:px0">
              {dataSolutions1
                ?.sort((a, b) => a.number - b.number)
                .map((dataSolutio) => (
                  <CardMetodologia
                  key={dataSolutio.documentId}
                    data={dataSolutio}
                    labelBtn={""}
                    cta={false}
                  />
                ))}
            </div>
          </CardContent>
        </div>
        <div className="py-20 container mx-auto flex flex-col gap-4">
          <div>
            <h3 className="text-center text-5xl leading-none text-colorPrimary font-medium">
              {dataPage1[0]?.title2}
            </h3>
            <h4 className="text-center pl-20 text-colorPrimary text-lg">
              {dataPage1[0]?.description2}
            </h4>
          </div>
          <div className="px-4 md:px-40">
            <p className="text-lg leading-1 text-left">
              {dataPage1[0]?.description3}
            </p>
          </div>
          <div className="px-4 md:px-40 flex flex-col gap-4">
            {dataListPage1?.map((item, index) => (
              <ItemList
                key={index}
                icon={{
                  w: 25,
                  h: 25,
                }}
                text={item?.description}
              />
            ))}
          </div>
        </div>
      </main>
    </Suspense>
  );
}
