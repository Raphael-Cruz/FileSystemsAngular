
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
    estoque: number;
   
    quantidade: number;
    desconto: number
    total: number;
    
}

export interface IConsultaProposta {
    codigo: number;
    cliente: string;
    cadastro: string;
    dataPrevista: string;
    situacao: string;
    frete: string;
    total: number;
    
}


export interface IFinanceiro {
    codigo: number;
    descricao: string;
   
    
}

export interface IContasPagar {
    codigo: number;
    fornecedor: string;
    doc: number;
    tipoConta: string;
    descricao: string
    vencimento: string;
    valor: number;
    parcela: number ;
    pago: string
}