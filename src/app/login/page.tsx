"use client";
import Navbar from "@/components/navs/navbar";
import FormLogin from "@/components/ui/form-login";
import ContainerBlog from "@/components/container/container";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage(){
    const router = useRouter();
    // const {data: session, status} = useSession();
    // if(status === 'authenticated'){
    //     router.push('/platform');
    // }

    return(
        <>
            <Navbar showLogin={false}/>
            <ContainerBlog>
                <div className="relative h-screen flex flex-col items-center justify-center">
                    <FormLogin />
                    <div className="mt-3 text-center space-x-4">
                        <span>&copy; Payroll - Platform</span>
                        <a href="#" className="text-sm hover:text-blue-900">Privacidad & Terminos</a>
                    </div>
                </div>
            </ContainerBlog>
        </>
    )
}

export default LoginPage;