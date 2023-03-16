
export interface INavbarData {
    routeLink: string;
    icon?: string;
    label: string;
    expanded?: boolean;
    multiple?:boolean;
    subItems?: boolean;
   
    items?: INavbarData[];
}


