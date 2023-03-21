import { ICaixaData, ICaixaEntidade, ICaixaSaida } from "../../models/helper";



export const caixaDataEntrada: ICaixaData[] = [
   
    {
        data: '01/01/2000',
        tipo: 'Dinheiro',
        descricao: "",
        valor: 1000,
       
       
        
    },    {
        data: '01/01/2000',
        tipo: 'Dinheiro',
        descricao: "",
        valor: 1100,
       
       
        
    },  {
        data: '01/01/2000',
        tipo: 'Dinheiro',
        descricao: "",
        valor: 1200,
       
       
        
    },  {
        data: '01/01/2000',
        tipo: 'Dinheiro',
        descricao: "",
        valor: 1300,
       
       
        
    },  
];
   

export const caixaDataSaida: ICaixaData[] = [
   
    {
        data: '01/01/2000',
        tipo: 'Dinheiro',
        descricao: "PIX",
        valor: 900,
       
       
        
    },    {
        data: '01/01/2000',
        tipo: 'Dinheiro',
        descricao: "",
        valor: 500,
       
       
        
    },  {
        data: '01/01/2000',
        tipo: 'Dinheiro',
        descricao: "",
        valor: 300,
       
       
        
    },  {
        data: '01/01/2000',
        tipo: 'Dinheiro',
        descricao: "",
        valor: 250,
       
       
        
    },  
];


export const entidade: ICaixaEntidade[] = [
   
    {
        codigo: 0o1,
        
        descricao: "Serdo Material De Construcao",
        
       
        
    },
     {
        codigo: 0o2,
   
        descricao: "Rimacol Material de Construção - FINAL 50",
   }
];

export const saida: ICaixaSaida[] = [
   
    {
        codigo: 0o23,
        
        descricao: "CHEQUE PRE",
        
    },
    {
        codigo: 0o24,
   
        descricao: "CARTAO MASTER CREDITO",
   },
   {
    codigo: 0o25,

    descricao: "CARTAO BANESC. DEBITO",
    }
     
];
