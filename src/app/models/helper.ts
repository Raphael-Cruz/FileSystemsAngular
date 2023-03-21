
export interface INavbarData {
    routeLink: string;
    icon?: string;
    label: string;
    expanded?: boolean;
    multiple?:boolean;
    subItems?: boolean;
   
    items?: INavbarData[];
}



export interface ICaixaData {
    data: string;
    tipo: string;
    descricao: string;
    valor: number;
    
}


export interface ICaixaEntidade {
    codigo: number;
    descricao: string;
    
}

export interface ICaixaSaida {
    codigo: number;
    descricao: string;
    
}


export interface IVendas {
    codigo: number;
    descricao: string;
    
}

export interface IListaPreco {
    codigo: number;
    descricao: string;
    unidade: string;
    preco: number;
    
}