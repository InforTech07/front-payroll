"use client";
import { useEffect, useState } from 'react';
import {useSession, signOut} from 'next-auth/react';
import Link from 'next/link';
import { menuAdmin, menuUser, menuSuperAdmin } from '@/constants/menu';
import { IMenuItem, ISubMenuItem } from '@/interfaces/platform';
import { useRouter } from 'next/navigation';

function SideBar(){
    const {data: session, status} = useSession();
    const [currentMenu, setCurrentMenu] = useState<IMenuItem[]>(menuUser);
    const roleUser: string = session?.user?.role || "user";
    const router = useRouter();

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

    const handleSignOut = () => {
        signOut();
        router.push('/');
    }

    return(
        <aside className="flex flex-col rounded-xl w-full h-full px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <div className='flex flex-col justify-center items-center'>
                <img className="w-16 h-16 rounded-full" src={session?.user?.logoCompany} alt=""/>
                <span className="mx-2 font-small text-gray-800 dark:text-gray-200">{session?.user?.nameCompany}</span>
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
                            <button onClick={handleSignOut} className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Salir</button>
                        </div>
                    </div> 
                </nav>
                <a href="/profile" className="flex items-center px-4 -mx-2">
                    <img className="object-cover mx-2 rounded-full h-9 w-9" src={session?.user?.image as any} alt="avatar" />
                    <span className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">{session?.user?.name}</span>
                </a>
            </div>
        </aside>
    )
}

export default SideBar;

