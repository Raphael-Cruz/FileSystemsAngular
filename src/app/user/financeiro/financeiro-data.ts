import { IFinanceiro } from "../../models/helper";

import { IContasPagar } from "../../models/helper";

export const financeiroData: IFinanceiro[] = [
   
    
    {
        codigo: 0o1,
       
        descricao: "DUPLICATA",

    },
    {
        codigo: 0o2,
       
        descricao: "SICOB R	",
    },
    {
        codigo: 0o3,
       
        descricao: "RIMACOL/CX",
    }

];
   

export const contasPagar: IContasPagar[] = [
   
    
    {
        codigo: 0o1,
        fornecedor: "Incefra",
        doc: 1020304,
        tipoConta: "Duplicata",
        descricao: "Rimacol",
        vencimento: "01/01/2000",
        valor: 100.00,
        parcela: 1 ,
        pago: "Sim" 
    }
];