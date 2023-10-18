"use client";
import  Link  from 'next/link';
import ContainerBlog from "../container/container";
import { useState } from "react";
const links = [
    {
        to: "/#features",
        label: "Funcionalidades",
    },
    {
        to: "/#solution",
        label: "Soluciones",
    },
    {
        to: "/#reviews",
        label: "Opiniones",
    }
];
type NavbarProps = {
    showLogin?: boolean;
};
function Navbar({showLogin = true}: NavbarProps){
    const [isToggled, setIsToggled] = useState<boolean>(false);
    // if (pathname !== "/") {
    //     setIsHome(false);
    // }
    // let isToggled = false;
    //const navlinks = document.querySelector("#navlinks");
    //const hamburger = document.querySelector("#hamburger");
    //const layer = document.querySelector("#navLayer");
    //const links = [...navlinks.querySelector("ul").children];

    // const toggleNavlinks = () => {
    //     console.log("toggleNavlinks");
    //     if(isToggled){
    //         setIsToggled(false);
    //     }else{
    //         setIsToggled(true);
    //     }
    // }
    
    // function toggleNavlinks() {
    //     if (isToggled) {
    //         navlinks.classList.add("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0");
    //         hamburger.classList.add("toggled");
    //         layer.classList.add("origin-top", "scale-y-100");
    //     } else {
    //         navlinks.classList.remove("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0");
    //         hamburger.classList.remove("toggled");
    //         layer.classList.remove("origin-top", "scale-y-100");
    //     }
    // }
    // hamburger.addEventListener("click", () => {
    //     isToggled = !isToggled;
    //     toggleNavlinks();
    // });

    // links.forEach((link) => {
    //     link.addEventListener("click", () => {
    //         isToggled = !isToggled;
    //         toggleNavlinks();
    //     });
    // });
    return(
        <header>
            <nav className="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
                <ContainerBlog>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
                        <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                            <a href="/#home" aria-label="logo" className="flex items-center space-x-2">
                                <div aria-hidden="true" className="flex space-x-1">
                                    <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                                    <div className="h-6 w-2 bg-primary"></div>
                                </div>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">Payroll</span>
                            </a>

                            <div className="relative flex max-h-10 items-center lg:hidden">
                                <button aria-label="humburger" id="hamburger" className="relative -mr-6 p-6">
                                    <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                                    <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                                </button>
                            </div>
                        </div>
                        <div id="navLayer" aria-hidden="true" className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"></div>
                        <div id="navlinks" className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none">
                            <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                                    {
                                        links.map((link) => (
                                            <li key={link.label}>
                                                <Link href={link.to} className="hover:text-primary block transition dark:hover:text-white md:px-4">
                                                    <span>{link.label}</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {
                                showLogin && (
                                    <div className="mt-12 lg:mt-0">
                                        <Link href="/login" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                                            <span className="relative text-base font-semibold text-primary dark:text-white"> login </span>
                                        </Link>
                                    </div>
                                )
                            }
                            
                        </div>
                    </div>
                </ContainerBlog>
            </nav>
        </header>
    )
}

export default Navbar;