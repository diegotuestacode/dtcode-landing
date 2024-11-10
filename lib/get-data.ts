"use server"
import {query} from "./strapi"


export async function getDataGlobal(){
    const dataGlobal = await query('data-globals?fields[0]=bussiness&fields[1]=email&fields[2]=description&populate[logo][fields][0]=url');
    
    return dataGlobal;
}

export async function getMenu(){
    const menu = await query('menus?fields[0]=name&fields[1]=slug&fields[2]=cta&fields[3]=orden');
    // console.log("menu: ", menu)
    return menu;
}

 async function getDataPage(namePage:string){
    const result = await query(`pages?filters[name][$contains]=${namePage}&fields[0]=name&fields[1]=title1&fields[2]=description1&fields[3]=title2&fields[4]=description2&fields[5]=description3`)
    return result;
}

 async function getDataContentHero(namePage:string){
    const result = await query(`content-hero-headers?filters[page][name][$contains]=${namePage}&fields[0]=titulo&fields[1]=description&fields[2]=cta&fields[3]=labelcta&populate[image][fields][0]=url`);
    // console.log("contentHero: ", result.data[0].image)
    return result;
}

 async function getDataListPage(namePage:string){
    const result = await query(`lists?filters[page][name][$contains]=${namePage}&fields[0]=description`);
    // console.log("getdata: ", result)
    return result;
}

export async function getDataListCategory(nameCategory:string){
    const result = await query(`lists?filters[category][name][$contains]=${nameCategory}&fields[0]=description`);

    return result;
}

export async function getCategories(img:boolean){
    const ste =  'categories?fields[0]=name&fields[1]=description&fields[2]=cta&fields[3]=labelCTA&fields[4]=descriptionDetail';
    
    const newSte =  img ? `${ste}&populate[image][fields][0]=url&&populate[icon][fields][0]=url`
    : ste

    
    const result = await query(newSte);
    return result;
}

export async function getSolutions(){
    const result = await query(`solutions?fields[0]=number&fields[1]=nombre&fields[2]=description`);

    return result;
}

export async function getPage(namePage:string='', onlyHeroHeader:boolean = false){
    const dataPage = await getDataPage(namePage)
    const dataContentHero = await getDataContentHero(namePage)
    let dataListPage
    let dataCategories
    let dataSolutions
    if(!onlyHeroHeader){
        dataListPage = await getDataListPage(namePage)
        dataCategories = await getCategories(true);
        dataSolutions = await getSolutions();
    }
    // console.log("aa: ", dataPage)
    return {
        dataCategories,
        dataPage,
        dataContentHero,
        dataListPage,
        dataSolutions
    }
}