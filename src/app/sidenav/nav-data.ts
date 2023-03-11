export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'register',
        icon: 'fal fa-box-open',
        label: 'Register',
        items: [
           {
             routeLink: 'register/cadastro',
             icon: 'fal fa-box-open',
            label: 'Consulta de Clientes',
           },
            {
                routeLink: 'products/consulta',
                icon: 'fal fa-box-open',
                label: 'Consulta de Clientes',
            }
        
    ]
    }
 
];