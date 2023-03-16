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
        routeLink: 'caixa',
        icon: 'fal fa-file',
        label: 'Caixa',
        items: [
            {
                routeLink: 'caixa/cadastro',
                label: 'Cadastrar',
                icon: 'fal fa-tags',
                subItems: true,
                items: [
                    {
                        routeLink: 'caixa/',
                        label: 'Fluxo de Caixa',
                        icon: 'fal fa-tags'
                        
                    },
                    {
                        routeLink: 'caixa/',
                        label: 'Tipo de Pagamento/Saida',
                        icon: 'fal fa-tags'
                        
                    },
                    {
                        routeLink: 'caixa/',
                        label: 'Entidade',
                        icon: 'fal fa-tags'
                        
                    }
                ]
                
            },
            {
                routeLink: 'caixa/consulta',
                label: 'Relatorio ',
                icon: 'fal fa-tags',
                items: [
                    {
                        routeLink: 'caixa/',
                        label: 'Fluxo por Dia',
                        icon: 'fal fa-tags'
                        
                    },
                    {
                        routeLink: 'caixa/',
                        label: 'Fluxo por Periodo',
                        icon: 'fal fa-tags'
                        
                    }
                ]
            }
            
        ]
    },
    {
        routeLink: 'vendas',
        icon: 'fal fa-chart-bar',
        label: 'Vendas',
        items: [
            {
                routeLink: 'vendas/cadastro',
                label: 'Cadastrar',
                icon: 'fal fa-tags',
                subItems: true,
                items: [
                    {
                        routeLink: 'vendas/',
                        label: 'Produto/Servico',
                        icon: 'fal fa-tags'
                        
                    },
                    {
                        routeLink: 'vendas/',
                        label: 'Formdas de pagamento',
                        icon: 'fal fa-tags'
                        
                    },
                    {
                        routeLink: 'vendas/',
                        label: 'Proposta Comercial',
                        icon: 'fal fa-tags'
                        
                    }
                ]
                
            },
            {
                routeLink: 'vendas/consulta',
                label: 'Consulta ',
                icon: 'fal fa-tags',
                items: [
                    {
                        routeLink: 'vendas/',
                        label: 'Produto/Servico',
                        icon: 'fal fa-tags'
                        
                    },
                    {
                        routeLink: 'vendas/',
                        label: 'Proposta Comercial',
                        icon: 'fal fa-tags'
                        
                    }
                ]
            },
            {
                routeLink: 'vendas/precos',
                label: 'Lista de Preco ',
                icon: 'fal fa-tags',
            }

            
        ]
       
       
    },
    {
        routeLink: 'financeiro/',
        icon: 'fal fa-tags',
        label: 'Financeiro',
        items: [
            {
                routeLink: 'Financeiro/cadastro',
                label: 'Cadastar Contas',
                icon: 'fal fa-tags',
                subItems: true,
                items: [
                    {
                        routeLink: 'financeiro/cadastro',
                        label: 'Contas a Pagar',
                        icon: 'fal fa-tags'
                        
                    },
                    {
                        routeLink: 'financeiro/consulta',
                        label: 'Contas a Receber',
                        icon: 'fal fa-tags'
                        
                    },
                    {
                        routeLink: 'financeiro/',
                        label: 'Fornecedor',
                        icon: 'fal fa-tags'
                        
                    },
                    {
                        routeLink: 'financeiro/',
                        label: 'Tipos de Conta',
                        icon: 'fal fa-tags'
                        
                    }
                ]
                
            },
            {
                routeLink: 'financeiro/consulta',
                label: 'Consultar Contas',
                icon: 'fal fa-tags',
                items: [
                    {
                        routeLink: 'financeiro/',
                        label: 'Contas a Pagar',
                        icon: 'fal fa-tags'
                        
                    },
                    {
                        routeLink: 'financeiro/',
                        label: 'Contas a Receber',
                        icon: 'fal fa-tags'
                        
                    }
                ]
            }
        ]
    }
    
   
   
];
