import CardContentServices from "@/components/shared/content/card-content-services";
import HeroHeader from "@/components/shared/content/heroHeader";
import {
  CardServiceInterface,
} from "@/interfaces/data.interface";
import { getPage } from "@/lib/get-data";
import { Suspense } from "react";

export default async function Services() {
  const { dataContentHero, dataCategories } = await getPage(
    "services"
  );

  const { data: dataContentHero1 } = dataContentHero;

  const { data: dataCategories1 }: { data: CardServiceInterface[] } =
    dataCategories;

  const { STRAPI_HOST } = process.env;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="w-full h-full">
        <HeroHeader data={dataContentHero1[0]} host={STRAPI_HOST ?? ""} />
        <div className=" container py-12 mx-auto flex flex-col gap-10">
          {dataCategories1?.map((category, index) => (
            <CardContentServices
              index={index}
              data={category}
              key={category.name}
              host={STRAPI_HOST ?? ""}
            />
          ))}
        </div>
        <div className="h-6"></div>
      </main>
    </Suspense>
  );
}
