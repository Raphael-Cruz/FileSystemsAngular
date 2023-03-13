import { INavbarData } from "../models/helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Inicio',
       
       
        
    },
    {
        routeLink: 'clientes',
        icon: 'fal fa-box-open',
        label: 'Clientes',
        
        items: [
            {
                routeLink: 'clientes/consulta',
               
                label: 'Cadastrar Clientes',
                
               
            },
            {
                routeLink: 'clientes/cadastro',
              
                label: 'Consultar Clientes',
                
            }
        ]
    },
    {
        routeLink: 'vendas',
        icon: 'fal fa-chart-bar',
        label: 'Vendas'
       
       
    },
    {
        routeLink: 'financeiro',
        icon: 'fal fa-tags',
        label: 'Financeiro',
       
        items: [
            {
                routeLink: 'financeiro/consulta',
                label: 'Imprimir Relatorio',
                icon: 'fal fa-tags'
                
            },
            {
                routeLink: 'financeiro/cadastro',
                label: 'Criar Relatorio',
                icon: 'fal fa-tags'
                
            }
        ]
    },
    {
        routeLink: 'caixa',
        icon: 'fal fa-file',
        label: 'Caixa',
       
    }
   
   
];