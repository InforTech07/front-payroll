import { ISubMenuItem, IMenuItem } from "@/interfaces/platform";


export const menuUser: IMenuItem[] = [
    {
        name: 'Dashboard',
        icon: 'mdi-view-dashboard',
        submenu: [
            {
                name: 'Dashboard',
                path: '/dashboard',
                icon: 'mdi-view-dashboard',
            },
            {
                name: 'Dashboard 2',
                path: '/dashboard2',
                icon: 'mdi-view-dashboard',
            },
            {
                name: 'Dashboard 3',
                path: '/dashboard3',
                icon: 'mdi-view-dashboard',
            }
        ]
    }
]

export const menuAdmin: IMenuItem[] = [
    {
        name: 'Dashboard',
        icon: 'mdi-view-dashboard',
        submenu: [
            {
                name: 'Dashboard',
                path: '/dashboard',
                icon: 'mdi-view-dashboard',
            },
            {
                name: 'Dashboard 2',
                path: '/dashboard2',
                icon: 'mdi-view-dashboard',
            },
            {
                name: 'Dashboard 3',
                path: '/dashboard3',
                icon: 'mdi-view-dashboard',
            }
        ]
    },
    {
        name: 'Rec. Humanos',
        icon: 'mdi-account',
        submenu: [
            {
                name: 'Empleados',
                path: '/platform/hrm/employee',
                icon: 'mdi-account',
            },
            {
                name: 'Puestos',
                path: '/platform/hrm/jobposition',
                icon: 'mdi-account',
            },
            {
                name: 'Departamentos',
                path: '/platform/hrm/department',
                icon: 'mdi-account',
            }
        ]
    },
    {
        name: 'Ges. Nomina',
        icon: 'mdi-account',
        submenu: [
            {
                name: 'Nomina',
                path: '/platform/pm/payroll',
                icon: 'mdi-account',
            },
            {
                name: 'Ingresos',
                path: '/platform/pm/income',
                icon: 'mdi-account',
            },
            {
                name: 'Deducciones',
                path: '/platform/pm/deduction',
                icon: 'mdi-account',
            },
            {
                name: 'Periocidad',
                path: '/platform/pm/period',
                icon: 'mdi-account',
            },
            {
                name: 'Conceptos',
                path: '/platform/pm/concepts',
                icon: 'mdi-account',
            }
        ]
    },
    {
        name: 'Administracion',
        icon: 'mdi-account',
        submenu: [
            {
                name: 'User',
                path: '/user',
                icon: 'mdi-account',
            },
            {
                name: 'User 2',
                path: '/user2',
                icon: 'mdi-account',
            },
            {
                name: 'User 3',
                path: '/user3',
                icon: 'mdi-account',
            }
        ]
    }
];

export const menuSuperAdmin: IMenuItem[] = [
    {
        name: 'Dashboard',
        icon: 'mdi-view-dashboard',
        submenu: [
            {
                name: 'Dashboard',
                path: '/dashboard',
                icon: 'mdi-view-dashboard',
            },
            {
                name: 'Dashboard 2',
                path: '/dashboard2',
                icon: 'mdi-view-dashboard',
            },
            {
                name: 'Dashboard 3',
                path: '/dashboard3',
                icon: 'mdi-view-dashboard',
            }
        ]
    },
    {
        name: 'User',
        icon: 'mdi-account',
        submenu: [
            {
                name: 'User',
                path: '/user',
                icon: 'mdi-account',
            },
            {
                name: 'User 2',
                path: '/user2',
                icon: 'mdi-account',
            },
            {
                name: 'User 3',
                path: '/user3',
                icon: 'mdi-account',
            }
        ]
    },
    {
        name: 'Admin',
        icon: 'mdi-account',
        submenu: [
            {
                name: 'Admin',
                path: '/admin',
                icon: 'mdi-account',
            },
            {
                name: 'Admin 2',
                path: '/admin2',
                icon: 'mdi-account',
            },
            {
                name: 'Admin 3',
                path: '/admin3',
                icon: 'mdi-account',
            }
        ]
    }
];

