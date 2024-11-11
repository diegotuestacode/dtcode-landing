import CardContent from "@/components/shared/content/card-content";
import HeroHeader from "@/components/shared/content/heroHeader";
import { getPage } from "@/lib/get-data";
import Link from "next/link";
import { Suspense } from "react";

import Buttons from '@/components/shared/content/buttons'
import FormContact from "@/components/contact/form.contact";




export default async function Contact() {
  const { dataContentHero, dataPage } = await getPage("contact", true);

  const { data: dataContentHero1 } = dataContentHero;

  const { data: dataPage1 } = dataPage;
  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="w-full h-full">
        <HeroHeader data={dataContentHero1[0]} host={"/assets/images/fondo-contacto.jpg"} />
        <div className="pt-16 pb-20 container flex flex-col  gap-5 items-center mx-auto">
          <h2 className="text-colorPrimary text-[2rem] leading-none font-medium">
            {dataPage1[0]?.title1}
          </h2>
          <p className="text-colorBlack2">{dataPage1[0]?.description1}</p>
          <Link href="">
            <Buttons
              typeBtn="outlineFlat"
              text="Agenda una reunión"
              classNa="text-colorBlack2 hover:text-white hover:bg-colorPrimary"
            />
          </Link>
        </div>
        <CardContent>
          <div className="flex flex-col container gap-5">
            <div className="flex flex-col items-center">
              <h2 className="text-[3rem] text-white font-semibold leading-none">{dataPage1[0]?.title2}</h2>
              <p className="text-white leading-none font-medium">{dataPage1[0]?.description2}</p>
            </div>
            <div style={
                { 
                  backgroundColor: 'rgba(255, 255, 255, 0.5)' ,
                  borderRadius:'10px',
                  width:'80%',
                  margin:'0 auto 0 auto'
                }
              } 
              className="p-4"
              >
             <FormContact  />
            </div>
          </div>
        </CardContent>
        <div className="h-6"></div>
      </main>
    </Suspense>
  );
}
