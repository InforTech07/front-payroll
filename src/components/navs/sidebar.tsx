"use client";
import {useSession, signOut} from 'next-auth/react';
import Link from 'next/link';

function SideBar(){
    const {data: session, status} = useSession();
    return(
        <aside className="w-full h-full p-6 rounded-xl sm:w-60 dark:bg-gray-900 dark:text-gray-100">
            <nav className="space-y-8 text-sm flex flex-col">
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">Empresa</h2>
                </div>
                <ul className="menu bg-gray-900 rounded-box p-0">
                    <li>
                        <Link className='text-sm font-semibold tracki uppercase text-gray-400 hover:bg-success active:bg-succes  focus:bg-succes' href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold tracki uppercase text-gray-400'>Empleados</summary>
                            <ul>
                                <li>
                                    <Link className='text-sm  tracki uppercase text-gray-400 hover:bg-success active:bg-succes  focus:bg-succes' href="/employee">Nuevo</Link>
                                </li>
                                <li>
                                    <Link className='text-sm  tracki uppercase text-gray-400 hover:bg-success active:bg-succes  focus:bg-succes' href="/dashboard">Empleados</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold tracki uppercase text-gray-400'>Empleados</summary>
                            <ul>
                                <li>
                                    <Link className='text-sm  tracki uppercase text-gray-400 hover:bg-success active:bg-succes  focus:bg-succes' href="/employee">Nuevo</Link>
                                </li>
                                <li>
                                    <Link className='text-sm  tracki uppercase text-gray-400 hover:bg-success active:bg-succes  focus:bg-succes' href="/dashboard">Empleados</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold tracki uppercase text-gray-400'>Empleados</summary>
                            <ul>
                                <li>
                                    <Link className='text-sm font-semibold tracki uppercase text-gray-400 hover:bg-success active:bg-succes  focus:bg-succes' href="/employee">Nuevo</Link>
                                </li>
                                <li>
                                    <Link className='text-sm font-semibold tracki uppercase text-gray-400 hover:bg-success active:bg-succes  focus:bg-succes' href="/dashboard">Empleados</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link rel="noopener noreferrer" className='text-m font-semibold' href="#">Perfil</Link>
                    </li>
                    <li>
                        <button onClick={()=>signOut()} className='text-m font-semibold'>Salir</button>
                    </li>
                </ul>
                <div className="space-y-2 justify-end">
                    <img src={session?.user?.image ? session.user.image : './images/avatars/avatar.webp' } alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">{session?.user?.name}</h2>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default SideBar;

