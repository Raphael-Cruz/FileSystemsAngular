import { INavbarData } from "../models/helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Inicio',
        expanded: false,
       
        
    },
    {
        routeLink: 'clientes',
        icon: 'fal fa-box-open',
        label: 'Clientes',
        expanded: true,
        multiple: true,
        items: [
            {
                routeLink: 'register/cadastro',
                icon: 'fal fa-box-open',
                label: 'Cadastrar Clientes',
                
               
            },
            {
                routeLink: 'register/cadastro',
                icon: 'fal fa-box-open',
                label: 'Consultar Clientes',
                
            }
        ]
    },
    {
        routeLink: 'vendas',
        icon: 'fal fa-chart-bar',
        label: 'Statistics',
       
    },
    {
        routeLink: 'financeiro',
        icon: 'fal fa-tags',
        label: 'Coupens',
        expanded: true,
        multiple: true,
        items: [
            {
                routeLink: 'register',
                label: 'List Coupens',
                icon: 'fal fa-tags'
                
            },
            {
                routeLink: 'register',
                label: 'Create Coupens',
                icon: 'fal fa-tags'
                
            }
        ]
    },
    {
        routeLink: 'caixa',
        icon: 'fal fa-file',
        label: 'Pages',
       
    }
   
   
];