"use client";
import Navbar from "@/components/navs/navbar";
import FormLogin from "@/components/ui/form-login";
import ContainerBlog from "@/components/container/container";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage(){
    const router = useRouter();
    const {data: session, status} = useSession();
    if(status === 'authenticated'){
        router.push('/dashboard');
    }

    return(
        <>
            <Navbar showLogin={false}/>
            <ContainerBlog>
                <FormLogin />
            </ContainerBlog>
        </>
    )
}

export default LoginPage;