export interface ISubMenuItem{
    name: string;
    path: string;
    icon: string;
}

export interface IMenuItem{
    name: string;
    icon: string;
    submenu?: ISubMenuItem[];
}





