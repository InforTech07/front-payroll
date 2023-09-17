type NavbarAppProps = {
    title: string;
}

function NavbarApp({title}: NavbarAppProps){
    return(
        <div className="bg-base-200 rounded-xl mb-8 navbar bg-base-100">
            <div className="navbar-start">
                <span className="normal-case text-xl text-black">{title}</span>
            </div>
            <div className="navbar-center hidden lg:flex">
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}

export default NavbarApp;