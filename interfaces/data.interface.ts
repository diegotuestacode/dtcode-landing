export interface DataResultInterface {
    data: Datum[];
    meta: MetaInterface;
}

export interface Datum {
    id:          number;
    documentId:  string;
    bussiness:   string;
    email:       string;
    description: string;
    logo:        Logo;
}

export interface Logo {
    id:         number;
    documentId: string;
    url:        string;
}

export interface MetaInterface {
    pagination: PaginationInterface;
}

export interface PaginationInterface {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}



export interface ImageInterface {
    id:         number;
    documentId: string;
    url:        string;
}

export interface CardServiceInterface {
    id:                number;
    documentId:        string;
    name:              string;
    description:       string;
    cta:               boolean;
    labelCTA:          null;
    descriptionDetail: string;
    image: Logo;
    icon:Logo;
}

export interface ItemListInterface {
    id:          number;
    documentId:  string;
    description: string;
}

export interface CardSolutionsInterface {
    id:          number;
    documentId:  string;
    number:      number;
    nombre:      string;
    description: string;
}




