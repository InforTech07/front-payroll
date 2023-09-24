"use client";
import { useEffect, useState } from 'react';
import {useSession, signOut} from 'next-auth/react';
import Link from 'next/link';
import { menuAdmin, menuUser, menuSuperAdmin } from '@/constants/menu';
import { IMenuItem, ISubMenuItem } from '@/interfaces/menu';

function SideBar(){
    const [currentMenu, setCurrentMenu] = useState<IMenuItem[]>(menuUser);
    const roleUser:string = "admin";

    useEffect(() => {
        switch (roleUser) {
            case "admin":
                setCurrentMenu(menuAdmin);
                break;
            case "user":
                setCurrentMenu(menuUser);
                break;
            case "superadmin":
                setCurrentMenu(menuSuperAdmin);
                break;
            default:
                setCurrentMenu(menuUser);
                break;
        }
    }, [roleUser]);
    return(
        <aside className="flex flex-col rounded-xl w-full h-full px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <div className='flex flex-col justify-center items-center'>
                <img className="w-auto h-7 rounded-full" src="https://merakiui.com/images/logo.svg" alt=""/>
                <span className="mx-2 font-small text-gray-800 dark:text-gray-200">Institucion</span>
            </div>
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        {
                            currentMenu.map((menu : IMenuItem, index) => (
                                <div key={index} className="collapse collapse-plus bg-gray-900">
                                    <input type="checkbox" /> 
                                        <div className="collapse-title text-l">
                                                <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">{menu.name}</label>
                                        </div>
                                    <div className="collapse-content"> 
                                        <div className='flex flex-col'>
                                            {menu.submenu?.map((subitem : ISubMenuItem, index) => (
                                                    <Link key={index} href={subitem.path} className="mx-2 text-xs">
                                                        <span className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">{subitem.name}</span>
                                                    </Link>
                                                ))
                                            }    
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="collapse-title text-l min-h-0">
                            <button onClick={() => signOut()} className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Salir</button>
                        </div>
                    </div> 
                </nav>
                <a href="/profile" className="flex items-center px-4 -mx-2">
                    <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    <span className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">John Doe</span>
                </a>
            </div>
        </aside>
    )
}

export default SideBar;

