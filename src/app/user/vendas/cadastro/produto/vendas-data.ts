import { IVendas } from "../../../../models/helper";
import { IListaPreco } from "../../../../models/helper";


export const situacaoVendas: IVendas[] = [
   
    
    {
        codigo: 0o1,
       
        descricao: "ORCAMENTO",
    },
    {
        codigo: 0o2,
       
        descricao: "PEDIDO",
    },
    {
        codigo: 0o3,
       
        descricao: "FINALIZADO",
    }

];
   


export const formaPagamento: IVendas[] = [
   
    
    {
        codigo: 0o1,
       
        descricao: "CHEQUE PRE",
    },
    {
        codigo: 0o2,
       
        descricao: "CARTAO MASTER/VISA/ELO",
    },
    {
        codigo: 0o3,
       
        descricao: "CARTAO BANESCARD",
    }

];
   
export const listaPreco: IListaPreco[] = [
   
    
    {
        codigo: 18582,
        descricao: "1 INTERRUPTOR PARALELO 10A 250V BC 551021",
        unidade: "UN",
        preco: 16.20,
    },
    {
        codigo: 18267,
        descricao: "1416 REGISTRO PRESSAO C-50 1/2' 10150",
        unidade: "UN",
        preco: 65.90,
    },
    {
        codigo: 11504	,
        descricao: "2930 LANTERNA 7LED RECARREGAVEL",
        unidade: "UN",
        preco: 29.80,
    }

];
   