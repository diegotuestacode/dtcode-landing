import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/layout/navbar";
import { Poppins } from 'next/font/google';
import Footer from "@/components/shared/layout/footer";
import { getDataGlobal, getMenu } from "@/lib/get-data";
import { Suspense } from "react";


const poppins = Poppins({
  weight:['400', '500','600','700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "DTCode Servicios",
  description: "Desarrolla tu producto digital con nosotros. DTCode a tu servicio!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {data: dataGlobal} = await getDataGlobal() ?? [];
  const {logo, bussiness, email, description} = dataGlobal[0] ?? {};
  const {data} = await getMenu() ?? [];

  const {STRAPI_HOST} = process.env; 
  const NEW_LOGO = `${STRAPI_HOST}${logo?.url}`
  
  return (
    <html lang="es">
      <body
        className={`${poppins.className} antialiased `}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar data={data} logo={NEW_LOGO}  />
          {children}
          <Footer logo={NEW_LOGO} description={description} bussiness={bussiness} />
        </Suspense>
      </body>
    </html>
  );
}
